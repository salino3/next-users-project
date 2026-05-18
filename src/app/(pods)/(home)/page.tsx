"use client";

import { Suspense, useState } from "react";
import { useShallow } from "zustand/shallow";
import { getUsersList } from "@/app/hooks/get-fetch-users";
import { useAppStore } from "@/app/store/provider";
import { UserList } from "@/app/components/users-list";
import "./home.styles.scss";

export default function HomePage() {
  const { users, getUsers } = useAppStore(
    useShallow((state) => ({
      users: state.users,
      getUsers: state.getUsers,
    })),
  );

  const [isPending, setIsPending] = useState<boolean>(false);

  console.log(users);

  //
  const handleCallUsers = async () => {
    setIsPending(true);
    await getUsersList()
      .then((res) => {
        setIsPending;
        getUsers(res);
      })
      .finally(() => setIsPending(false));
  };

  return (
    <div className="rootHomePage">
      <h1>Title</h1>
      <button onClick={() => handleCallUsers()}>Call Users List</button>
      {isPending ? (
        <div>Fetching users from server...</div>
      ) : users && users.length > 0 ? (
        <UserList usersData={users} />
      ) : null}
    </div>
  );
}
