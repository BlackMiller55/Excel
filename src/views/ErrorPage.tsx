import { useNavigate } from "react-router-dom";
import { GenericButton } from "../Components/Buttons/GenericButton";


export const ErrorPage = () => {
  const navigate = useNavigate();

    return (
      <>
        <div className="flex flex-col w-screen h-screen items-center justify-center">
          <h1 className="text-4xl font-bold mb-3">Error</h1>
          <h3 className="text-xl font-light mb-6">Credenciales no validas</h3>
          <GenericButton text="Volver a iniciar sesion" click={() => navigate("/login")}/>

        </div>
      </>
    );
  };
  