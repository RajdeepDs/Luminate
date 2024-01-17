import { GET_USER_BY_EMAIL } from "@/graphql/Queries";
import { useQuery } from "@apollo/client";

export const GetUserByEmail = async (email: string) => {
  try {
    const user = useQuery(GET_USER_BY_EMAIL, {
      variables: {
        email,
      },
    });
    return user.data;
  } catch {
    return null;
  }
};
