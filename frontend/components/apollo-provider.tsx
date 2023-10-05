"use client";
import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { REFRESH_TOKEN_MUTATION } from "../graphql/Mutations";

export const ApolloProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/",
    credentials: "include",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          client
            .mutate({ mutation: REFRESH_TOKEN_MUTATION })
            .then(({ data }) => {
              if (data && data.refreshToken) {
                console.log("refresh token : ", data);
                localStorage.setItem("token", data.refreshToken);
                return forward(operation);
              } else {
                window.location.href = "/sign-in";
              }
            })
            .catch((error) => {
              console.error("Failed to refresh token:", error);
            });
        }
      }
    }
  });

  const client = new ApolloClient({
    link: errorLink.concat(authLink).concat(httpLink),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
