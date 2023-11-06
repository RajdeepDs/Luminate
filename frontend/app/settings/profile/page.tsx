"use client";
import PageHeader from "@/components/page-header";
import { ProfileForm } from "@/components/profile-form";
import { GET_USER } from "@/graphql/Queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";

export default function ProfilePage() {
  const { data, loading, error } = useQuery(GET_USER);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="mx-auto mt-14 w-1/2">
      <PageHeader title={"Profile"} desc={"Manage your Luminate Profile."} />
      <div className="space-y-10">
        <div className="">
          <h1 className="text-lg">Profile picture</h1>
          <Image
            src={data?.user?.avatar}
            alt="profile picture"
            width={160}
            height={160}
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1 className="text-lg">Email</h1>
          <p className="text-base font-light text-gray">{data?.user?.email}</p>
        </div>
        <ProfileForm
          name={data?.user?.name}
          username={data?.user?.username}
          bio={data?.user?.bio}
        />
      </div>
    </div>
  );
}
