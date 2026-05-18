"use server";
import ContainerLayout from "./(layouts)/container/container.layout";
import "./page.module.scss";

export default async function Home() {
  return (
    <div className="rootHome">
      <ContainerLayout />
    </div>
  );
}
