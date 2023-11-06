"use client";

import Image from "next/image";
import { useQuery } from "@apollo/client";

import { GET_USER } from "@/graphql/Queries";
import PageHeader from "@/components/page-header";
import { ProfileForm } from "@/components/profile-form";

export default function ProfilePage() {
  const { data, loading, error } = useQuery(GET_USER);
  const { user } = data || {};
  const { avatar, username, email, name, bio } = user || {};
  if (loading) return <p>Loading...</p>;
  return (
    <div className="mx-auto mt-14 w-1/2">
      <PageHeader title={"Profile"} desc={"Manage your Luminate Profile."} />
      <div className="space-y-10">
        <div className="">
          <h1 className="text-lg">Profile picture</h1>
          <Image
            src={avatar}
            alt="profile picture"
            width={160}
            height={160}
            className="rounded-full"
            priority={true}
          />
        </div>
        <div className="">
          <h1 className="text-lg">Email</h1>
          <p className="text-base font-light text-gray">{email}</p>
        </div>
        <ProfileForm name={name} username={username} bio={bio} />
      </div>
    </div>
  );
}
