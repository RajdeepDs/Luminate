"use client";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { Separator } from "@repo/ui";
import { GET_USER } from "@/graphql/Queries";
import ProfileForm from "@/components/settings/profile-form";

export default function ProfilePage(): JSX.Element {
  const { data, loading } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;

  const name = data?.user.name;
  const username = data?.user.username;
  const email = data?.user.email;
  const bio = data?.user.bio;

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-xl">Public Profile</h1>
      <Separator />
      <div className="grid grid-cols-2">
        <ProfileForm
          bio={bio ?? ""}
          email={email ?? ""}
          name={name ?? ""}
          username={username ?? ""}
        />
        <div className="flex flex-col px-8">
          {data?.user.avatar ? (
            <div className="">
              <h2 className="flex justify-start">Profile picture</h2>
              <Image
                alt="avatar"
                className="mx-10 mt-2 rounded-full"
                height={200}
                priority
                src={data.user.avatar}
                width={200}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
