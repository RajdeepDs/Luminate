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
import { REFRESH_TOKEN_MUTATION } from "@/graphql/Mutations";
import { fetchLocation } from "@/lib/utils";
import UAParser from "ua-parser-js";

export const ApolloProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/", //This is the port where our server is running
    credentials: "include", // This is important to share our cookies between both client and server
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = sessionStorage.getItem("token"); // Here we are fetching the access token which is saved in local storage
    // fetch location
    const location = (await fetchLocation()) as string;
    // fetch user agent
    const parser = new UAParser(navigator.userAgent);
    const browserName = parser.getBrowser().name;
    const osName = parser.getOS().name;
    const useragent = `${browserName} on ${osName}`;

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        "client-name": useragent,
        "client-location": location,
      },
    };
  });
  // If the user is not authenticated, means we not found the access token, then generate a new access token using the refresh token which is present as cookie.
  // If the refresh token not found then redirect to '/sign-in' page
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          client
            .mutate({ mutation: REFRESH_TOKEN_MUTATION })
            .then(({ data }) => {
              if (data && data.refreshToken) {
                console.log("refresh token : ", data);
                sessionStorage.setItem("token", data.refreshToken);
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
