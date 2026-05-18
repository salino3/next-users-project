"use client";

import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";
import { getUsersList } from "@/app/hooks/get-fetch-users";
import { useAppStore } from "@/app/store/provider";
import { UserList } from "@/app/components/users-list";
import "./home.styles.scss";
import { LoginForm } from "@/app/components/login-form/login-form-component";

export default function HomePage() {
  const { users, currentUser, getUsers } = useAppStore(
    useShallow((state) => ({
      users: state.users,
      currentUser: state.currentUser,
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

  useEffect(() => {
    handleCallUsers();
  }, [currentUser]);
  console.log("clog5", currentUser);

  return (
    <div className="rootHomePage">
      <h1>Title</h1>

      {currentUser ? null : <LoginForm />}

      {isPending && currentUser ? (
        <div>Fetching users from server...</div>
      ) : currentUser && users && users.length > 0 ? (
        <UserList usersData={users} />
      ) : null}
    </div>
  );
}
