import { Suspense } from "react";
import HomePage from "@/app/(pods)/(home)/page";
import { User } from "@/app/store/interface";
import "./container.styles.scss";

interface Props {
  usersPromise: Promise<User[]>;
}

export default function ContainerLayout({ usersPromise }: Props) {
  return (
    <div className="rootContainerLayout">
      <Suspense fallback={<div>Loading users from server...</div>}>
        <HomePage usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
}
