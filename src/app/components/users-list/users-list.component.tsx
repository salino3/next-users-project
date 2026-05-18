"use client";
import { User } from "@/app/store/interface";

interface Props {
  usersData: User[];
}

export function UserList({ usersData }: Props) {
  console.log(usersData);
  return (
    <ul>
      {usersData.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
