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

  console.log(users);

  //
  const handleCallUsers = async () => {
    const data = await getUsers();
    setUsersData(data);
  };

  return (
    <div className="rootHomePage">
      <h1>Title</h1>
      <button onClick={() => handleCallUsers()}>Call Users List</button>
      <Suspense fallback={<div>Loading users from server...</div>}>
        <UserList usersData={usersData} />
      </Suspense>
    </div>
  );
}
