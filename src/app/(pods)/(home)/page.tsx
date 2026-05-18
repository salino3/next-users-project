"use client";

import { Suspense, useState } from "react";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "@/app/store/provider";
import { UserList } from "@/app/components/users-list";
import { User } from "@/app/store/interface";
import "./home.styles.scss";
import { getUsers } from "@/app/hooks/get-fetch-users";

export default function HomePage() {
  const { users } = useAppStore(
    useShallow((state) => ({
      users: state.users,
    })),
  );

  const [usersData, setUsersData] = useState<User[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);

  console.log(users);

  //
  const handleCallUsers = async () => {
    setIsPending(true);
    await getUsers()
      .then((res) => {
        setIsPending;
        setUsersData(res);
      })
      .finally(() => setIsPending(false));
  };

  return (
    <div className="rootHomePage">
      <h1>Title</h1>
      <button onClick={() => handleCallUsers()}>Call Users List</button>
      {isPending ? (
        <div>Fetching users from server...</div>
      ) : usersData && usersData.length > 0 ? (
        <UserList usersData={usersData} />
      ) : null}
    </div>
  );
}
