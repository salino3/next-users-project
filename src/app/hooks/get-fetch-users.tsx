"use server";

import { fetchUsersList } from "@/lib/controllers/controller";

export const getUsers = async () => {
  try {
    return await fetchUsersList();
  } catch (error) {
    console.error(error);
    return [];
  }
};
