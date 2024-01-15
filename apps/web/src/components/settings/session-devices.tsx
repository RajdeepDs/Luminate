"use client";
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";

import * as Icons from "@repo/ui/icons";
import { GET_ALL_USER_SESSIONS, GET_USER_SESSIONS } from "@/graphql/Queries";

interface SessionType {
  id: number;
  userAgent: string;
  location: string;
}

export default function SessionDevices() {
  const [currentSession, setCurrentSession] = useState(null);

  // Fetch current user session data
  const { data: userSessionData } = useQuery(GET_USER_SESSIONS);
  const thisSessionId = userSessionData?.userSessions?.id;

  // Fetch current user's all sessions data
  const { data: allUserSessionsData } = useQuery(GET_ALL_USER_SESSIONS);

  // useEffect to update currentSession based on user session data
  useEffect(() => {
    // Check if the current session ID exists in the array of all user sessions
    if (thisSessionId && allUserSessionsData?.allUserSessions) {
      const foundSession = allUserSessionsData.allUserSessions.find(
        (session: SessionType) => session.id === thisSessionId
      );
      setCurrentSession(foundSession);
    }
  }, [thisSessionId, allUserSessionsData]);

  // Separate current session and previous sessions
  const currentSessionArray = currentSession ? [currentSession] : [];
  const previousSessionsArray =
    allUserSessionsData?.allUserSessions?.filter(
      (session: SessionType) => session.id !== thisSessionId
    ) || [];

  // Concatenate current session and previous sessions
  const sessionsToDisplay = currentSessionArray.concat(previousSessionsArray);

  return (
    <div className="grid gap-2">
      {sessionsToDisplay.map((session: SessionType) => (
        <div
          key={session.id}
          className="flex w-[450px] items-center gap-4 rounded-md border border-blueGray px-3 py-2"
        >
          <div className="w-fit rounded-md bg-gray/25 p-2">
            <Icons.Globe className="h-4 w-4" />
          </div>
          <div className="flex flex-col -space-y-1">
            <h1>{session?.userAgent}</h1>
            <div className="flex items-center">
              {currentSession && thisSessionId === session.id ? (
                <>
                  <Icons.Dot className="h-4 w-4 text-green-500" />
                  <p className="text-sm text-green-500">Current Session</p>
                </>
              ) : (
                <>
                  <Icons.Dot className="h-4 w-4 text-gray" />
                  <p className="text-sm text-gray">Previous Session</p>
                </>
              )}
              <Icons.Dot className="h-7 w-7 text-gray" />
              <p className="text-sm text-gray">{session?.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
