"use client";
import Image from "next/image";

import { useQuery } from "@apollo/client";

import { GET_USER } from "@/graphql/Queries";
import ProfileForm from "@/components/profile-form";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  const { data, loading } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;

  const name = data?.user?.name;
  const username = data?.user?.username;
  const email = data?.user?.email;
  const bio = data?.user?.bio;

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-xl">Public Profile</h1>
      <Separator />
      <div className="grid grid-cols-2">
        <ProfileForm name={name} username={username} email={email} bio={bio} />
        <div className="flex flex-col px-8">
          {data?.user?.avatar && (
            <div className="">
              <h2 className="flex justify-start">Profile picture</h2>
              <Image
                src={data?.user?.avatar}
                alt="avatar"
                width={200}
                height={200}
                className="mx-10 mt-2 rounded-full"
                priority={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
