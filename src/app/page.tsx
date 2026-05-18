"use server";
import ContainerLayout from "./(layouts)/container/container.layout";
import { getUsers } from "./hooks/get-fetch-users";
import "./page.module.scss";

export default async function Home() {
  const usersPromise = getUsers();

  return (
    <div className="rootHome">
      <ContainerLayout usersPromise={usersPromise} />
    </div>
  );
}
