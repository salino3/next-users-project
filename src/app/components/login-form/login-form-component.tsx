import { useActionState, useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { ActionState, loginFormFn } from "@/app/utils/login-form-function";
import { useAppStore } from "@/app/store/provider";

export const LoginForm = () => {
  const { setUser } = useAppStore(
    useShallow((state) => ({
      setUser: state.setUser,
    })),
  );

  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    loginFormFn,
    { success: false, error: "" },
  );

  useEffect(() => {
    if (state.success && state.user) {
      setUser(state.user);
    }
  }, [state.success, state.user, setUser]);

  return (
    <form action={formAction}>
      <fieldset disabled={isPending} className={"flex flex-col gap-2"}>
        <legend>Login Form</legend>

        <button type="submit">Call Users List</button>
      </fieldset>
    </form>
  );
};
