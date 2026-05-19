"use server";
import { fetchUserdata } from "@/lib/controllers/controller";
import { User } from "../store/interface";

export interface ActionState {
  success: boolean;
  error: string;
  user?: User;
}

//
export async function loginFormFn(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    const id = formData.get("id") as string;
    const authenticatedUser = await fetchUserdata(id);

    return { success: true, error: "", user: authenticatedUser };
  } catch (err) {
    return { success: false, error: "Failed to authenticate user" };
  }
}
