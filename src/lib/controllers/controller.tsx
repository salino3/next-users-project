import "server-only"; // <--- The Lock
import { User } from "@/app/store/interface";
import { CONSTANT_LIB_APP } from "../consts-lib/const-variables";

export async function fetchUsersList(): Promise<User[]> {
  return fetch(CONSTANT_LIB_APP.ENDPOINS.GET_ALL_USERS).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
  });
}

//
export async function fetchUserdata(id: string): Promise<User> {
  return fetch(`${CONSTANT_LIB_APP.ENDPOINS.GET_ALL_USERS}/${id}`).then(
    (res) => {
      if (!res.ok) throw new Error("Failed to fetch user");
      return res.json();
    },
  );
}
