const getEnv = (variable: string): string => {
  const value = process.env[variable];
  console.log("process.env:", process.env);

  if (typeof value !== "string") {
    throw new Error(`'${variable}' env var must be provided`);
  }

  return value;
};

export const REACT_APP_FIREBASE_API_KEY = getEnv("REACT_APP_FIREBASE_API_KEY");
export const REACT_APP_FIREBASE_AUTH_DOMAIN = getEnv(
  "REACT_APP_FIREBASE_AUTH_DOMAIN"
);
export const REACT_APP_FIREBASE_DATABASE_URL = getEnv(
  "REACT_APP_FIREBASE_DATABASE_URL"
);
export const REACT_APP_FIREBASE_PROJECT_ID = getEnv(
  "REACT_APP_FIREBASE_PROJECT_ID"
);
export const REACT_APP_FIREBASE_STORAGE_BUCKET = getEnv(
  "REACT_APP_FIREBASE_STORAGE_BUCKET"
);
export const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = getEnv(
  "REACT_APP_FIREBASE_MESSAGING_SENDER_ID"
);
export const REACT_APP_FIREBASE_APP_ID = getEnv("REACT_APP_FIREBASE_APP_ID");
export const REACT_APP_FIREBASE_MEASUREMENT_ID = getEnv(
  "REACT_APP_FIREBASE_MEASUREMENT_ID"
);
