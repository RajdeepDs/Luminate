"use client";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import UAParser from "ua-parser-js";
import { fetchLocation } from "@/lib/utils";

export function ApolloProviders({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/", //This is the port where our server is running
    credentials: "include", // This is important to share our cookies between both client and server
  });

  const authLink = setContext(async (_, { headers }) => {
    // fetch location
    const location = await fetchLocation()!;
    // fetch user agent
    const parser = new UAParser(navigator.userAgent);
    const browserName = parser.getBrowser().name;
    const osName = parser.getOS().name;
    const useragent = `${browserName} on ${osName}`;

    return {
      headers: {
        ...headers,
        "client-name": useragent,
        "client-location": location,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
