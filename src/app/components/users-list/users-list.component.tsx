"use client";
import { use } from "react";
import { User } from "@/app/store/interface";

interface Props {
  usersPromise: Promise<User[]>;
}

export function UserList({ usersPromise }: Props) {
  // React only pauses rendering right here inside this sub-component
  const usersData = use(usersPromise);

  console.log(usersData);
  return (
    <ul>
      {usersData.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
