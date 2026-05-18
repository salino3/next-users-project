"use client";

import { Suspense } from "react";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "@/app/store/provider";
import { UserList } from "@/app/components/users-list";
import { User } from "@/app/store/interface";
import "./home.styles.scss";

interface Props {
  usersPromise: Promise<User[]>;
}

export default function HomePage({ usersPromise }: Props) {
  const { users } = useAppStore(
    useShallow((state) => ({
      users: state.users,
    })),
  );

  console.log(users);

  return (
    <div className="rootHomePage">
      <h1>Title</h1>
      <Suspense fallback={<div>Loading users from server...</div>}>
        <UserList usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
}
