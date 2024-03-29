"use client";
import React from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const ApolloProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const client = new ApolloClient({
    uri: `/api/graphql`,
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
