"use client";
import "./submit-login-form.styles.scss";
import { useFormStatus } from "react-dom";

export function SubmitLoginForm() {
  const { pending, method } = useFormStatus();
  console.log("method", method);
  return (
    <button type="submit" disabled={pending} className="btnSubmitLoginForm">
      {pending ? "Loading..." : "Login User"}
    </button>
  );
}
