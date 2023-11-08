import { useMutation } from "@apollo/client";
import { SESSION_MUTATION } from "@/graphql/Mutations";

export function useSessionMutation() {
  const [createSession] = useMutation(SESSION_MUTATION);

  async function createSessionWithLocation(location: any) {
    try {
      await createSession({
        variables: {
          location: location,
        },
      });
      console.log("Session created Successfully");
    } catch (error) {
      console.error("Failed to create session:", error);
    }
  }

  return createSessionWithLocation;
}
