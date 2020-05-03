import React, { useRef } from "react";
import { useAuth } from "reactfire";
import { routeConfig } from "../../util/RouteConfig";
import { useHistory } from "react-router-dom";

function RegistrationPage() {
  const auth = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<{ message: string } | null>(null);
  const { push } = useHistory();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const signUp = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (emailRef?.current && passwordRef?.current) {
      setLoading(true);

      try {
        await auth.createUserWithEmailAndPassword(
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
      <form onSubmit={signUp}>
        <label htmlFor="register:email">Email:</label>
        <input
          type="text"
          ref={emailRef}
          placeholder="you@example.com"
          required
        />
        <label htmlFor="register:password">Password:</label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
        />
        <button type="submit">{loading ? "Loading..." : "Sign Up"}</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
