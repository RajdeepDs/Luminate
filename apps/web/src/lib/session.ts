// Import necessary dependencies and the SESSION_MUTATION constant

import { useMutation } from "@apollo/client";
import { fetchLocation } from "./utils";
import UAParser from "ua-parser-js";
import { SESSION_MUTATION } from "@/graphql/Mutations";

// Custom hook to create a session
export function useCreateSession() {
  const [createSessionMutation] = useMutation(SESSION_MUTATION);

  async function createSession(location: string, userAgent: string) {
    try {
      const { data } = await createSessionMutation({
        variables: {
          location,
          userAgent,
        },
      });
      console.log("Session created:", data);

      // Handle the result or errors as needed
      return data;
    } catch (error) {
      console.error("Error creating session:", error);
      throw error; // You can handle or propagate the error as needed
    }
  }

  // Function to get user agent details
  function getUserAgent() {
    const parser = new UAParser(navigator.userAgent);
    const browserName = parser.getBrowser().name;
    const osName = parser.getOS().name;
    return `${browserName} on ${osName}`;
  }

  // Function to create a session with user agent details
  async function createSessionWithUserDetails() {
    const location = (await fetchLocation()) || "";
    const userAgent = getUserAgent() || "";
    return createSession(location, userAgent);
  }

  return {
    createSessionWithUserDetails,
  };
}
