"use client";

import { use } from "react";
import { User } from "@/app/store/interface";
import "./home.styles.scss";
import { useAppStore } from "@/app/store/provider";
import { useShallow } from "zustand/shallow";

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

  const usersData = use(usersPromise);

  console.log(usersData);

  return (
    <div className="rootHomePage">
      <h1>Title</h1>
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
