import { Alert } from "antd";

interface IError {
  responseCode: number;
  ErrorType: string;
  setErrorRes: React.Dispatch<string>;
}

export const GenericErrors = (props: IError) => {
  const { responseCode, ErrorType, setErrorRes } = props;

  let messageE = "";
  let description = "";

  console.log(responseCode);

  switch (responseCode) {
    case 401:
      messageE = "Error 401";
      description =
        "Usuario sin credenciales validas, inicie sesion o contacte al administrador";
      break;

    case 403:
      messageE = "Error 403";
      description =
        "Usuario sin autorizacion por favor regrese o contacte con un administrador";
      break;

    case 422:
      messageE = "Error 422";
      description = "Revise los datos ingresados";
      break;

    case 500:
      messageE = "Error 500";
      description = "Problemas con el servidor, vuelva a intentarlo por favor";
      break;

    default:
      break;
  }

  return (
    <>
      {ErrorType.includes("alert") && (
        <Alert
          message={messageE}
          description={description}
          type="warning"
          onClose={() => setErrorRes("")}
          closable
          showIcon
        />
      )}
    </>
  );
};
