import { useActionState } from "react";
import { useShallow } from "zustand/shallow";
import { loginFormFn } from "@/app/utils/login-form-function";
import { useAppStore } from "@/app/store/provider";

export const LoginForm = () => {
  const { setUser } = useAppStore(
    useShallow((state) => ({
      setUser: state.setUser,
    })),
  );

  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await loginFormFn(prevState, formData);

      if (result.success && result.user) {
        setUser(result.user);
      }

      return result;
    },
    { success: false, error: "" },
  );

  return (
    <form action={formAction}>
      <fieldset disabled={isPending} className={"flex flex-col gap-2"}>
        <legend>Login Form</legend>

        <button type="submit">Call Users List</button>
      </fieldset>
    </form>
  );
};
