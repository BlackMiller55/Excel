import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { useRefreshToken } from "../../Hooks/useRefreshToken";
import { ErrorPage } from "../../Pages/ErrorPage";

export const Credentials = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const refresh = useRefreshToken();
  const auth = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err: any) {
        console.error(err.response.status);
        setError(err.response.status);
      } finally {
        setIsLoading(false);
      }
    };

    !auth.auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  useEffect(() => {}, [isLoading]);

  return (
    <>{isLoading ? <p>Loading...</p> : error ? <ErrorPage /> : <Outlet />}</>
  );
};
