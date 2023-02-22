import { LoginForm } from "../components/LogIn";

export const Login = () => {
  return (
    <>
      <div className=" sm:login-mobile md:login-desktop">
        <Login />
        <div className="sm:login-mobile__banner md:login-desktop__banner">
          <h1 className="text-6xl text-secondary">Bienvenido</h1>
        </div>
      </div>
    </>
  );
};
