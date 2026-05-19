import { useActionState, useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { ActionState, loginFormFn } from "@/app/utils/login-form-function";
import { useAppStore } from "@/app/store/provider";
import { SubmitLoginForm } from "../submit-login-form/submit-login-form.component";
import "./login-form.styles.scss";

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
    <form id="formLogin" action={formAction}>
      <fieldset disabled={isPending} className={"flex flex-col gap-2"}>
        <legend>Login Form</legend>
        <div className="boxInput">
          <label htmlFor="id">Id User</label>
          <input
            type="number"
            alt="ID user"
            placeholder="Text an ID (number)"
            name="id"
            id="id"
          />
          <div className="boxErrorIdForm">
            {state.error && <strong>{state.error}</strong>}
          </div>
        </div>

        <SubmitLoginForm />
      </fieldset>
    </form>
  );
};
