import React, { useRef } from "react";
import { useAuth } from "reactfire";
import { useHistory } from "react-router-dom";
import { routeConfig } from "../../util/RouteConfig";

function LoginForm() {
  const auth = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<{ message: string } | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { push } = useHistory();

  const signIn = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (emailRef?.current && passwordRef?.current) {
      setLoading(true);

      try {
        await auth.signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        );

        push(routeConfig.home.path);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
  };

  return (
    <div>
      {error && (
        <div>
          <p>Error!</p>
          <p>{error.message}</p>
        </div>
      )}
      <form onSubmit={signIn}>
        <label htmlFor="login:email">Email:</label>
        <input
          ref={emailRef}
          type="text"
          placeholder="you@example.com"
          required
        />
        <label htmlFor="login:password">Password:</label>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">
          <span>{loading ? "Loading..." : "Login"}</span>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
