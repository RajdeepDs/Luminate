"use client";
import { useQuery } from "@apollo/client";
import { Icons } from "./icon";
import { GET_USER_SESSIONS } from "@/graphql/Queries";

export default function SessionDevices() {
  const { data } = useQuery(GET_USER_SESSIONS);
  const location = data?.userSessions[0]?.location;
  const userAgent = data?.userSessions[0]?.userAgent;
  return (
    <div className="flex w-[450px] items-center gap-4 rounded-md border border-purple-light px-3 py-2">
      <div className="w-fit rounded-md bg-gray/25 p-2">
        <Icons.globe className="h-4 w-4" />
      </div>
      <div className="flex flex-col -space-y-1">
        <h1>{userAgent}</h1>
        <div className="flex items-center">
          <Icons.dot className="h-4 w-4 text-green" />
          <p className="text-sm text-green">Current Session</p>
          <Icons.dot className="h-7 w-7 text-gray" />
          <p className="text-sm text-gray">{location}</p>
        </div>
      </div>
    </div>
  );
}
