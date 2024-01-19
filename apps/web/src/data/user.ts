import { GET_USER_BY_EMAIL } from "@/graphql/Queries";
import { useQuery } from "@apollo/client";

export const GetUserByEmail = (email: string) => {
  const { data, loading } = useQuery(GET_USER_BY_EMAIL, {
    variables: {
      email,
    },
  });
  if (loading) return "loading";
  if (data) return data;
};
