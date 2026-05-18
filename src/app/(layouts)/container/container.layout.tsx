"use server";
import { getUsers } from "@/app/hooks/get-fetch-users";
import HomePage from "@/app/(pods)/(home)/page";
import "./container.styles.scss";

export default async function ContainerLayout() {
  const usersPromise = getUsers();

  return (
    <div className="rootContainerLayout">
      <header>
        <h2>Header title</h2>
      </header>
      <HomePage usersPromise={usersPromise} />
    </div>
  );
}
