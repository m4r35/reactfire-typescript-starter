import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "../LoginForm";
import { FirebaseAppProvider } from "reactfire";
import Loading from "../../Page/Loading";

// TODO: fix the test
test("renders login form", () => {
  const { getByText } = render(
    <React.Suspense fallback={<Loading />}>
      <FirebaseAppProvider>
        <LoginForm />
      </FirebaseAppProvider>
    </React.Suspense>
  );
  const linkElement = getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
