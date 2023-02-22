import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "../../api/axios";
import useAuth from "../../Hooks/useAuth";
import { useCookies } from "react-cookie";

const LOGIN_URL = "/auth/login";

import { GenericForm } from "../Forms/GenericForm";
import { GenericFields } from "../Forms/Components/GenericFields";

export const LoginForm = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const auth = useAuth();

  const [user, setUser] = useState("");

  useEffect(() => {}, [user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Direccion de correo invalida")
        .required("Campo requerido"),

      password: Yup.string()
        .required("Campo requerido")
        .min(6, "La contraseña debe de contener 6 caracteres minimo")
        .matches(
          /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/,
          "La contraseña debe de estar compuesta de 6 caracteres conteniendo un numero por lo menos"
        ),
    }),

    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      try {
        const resp = await axios.post(LOGIN_URL, { ...values });
        removeCookie("token");
        const user = resp.data.data.user.first_name;
        const accessToken = resp?.data?.data.token;
        const permissions = resp?.data?.data.permissions;
        const roles = resp?.data?.data.roles;
        auth?.setAuth({ user, permissions, accessToken, roles });
        setUser("");
        setCookie("token", resp?.data?.data.token);
        navigate(from, { replace: true });
      } catch (err: any) {
        {
          err &&
            toast({
              title: "Error.",
              description: `Fallo al iniciar sesion. ${err.response.status} ${err.response.data.message}`,
              position: "top",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
        }
      }
    },
  });

  const fields = [
    {
      key: 1,
      id: "email",
      name: "email",
      title: "Email",
      type: "email",
      placeholder: "Email",
      value: formik.values.email,
      touched: formik.touched.email,
      errors: formik.errors.email,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },
    {
      key: 2,
      id: "password",
      name: "password",
      title: "Password",
      type: "password",
      placeholder: "Password",
      value: formik.values.password,
      touched: formik.touched.password,
      errors: formik.errors.password,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },
  ];

  return (
    <>
      <div className="md:login-desktop__form sm:login-mobile__form ">
        <div className="w-full h-screen center">
          <GenericForm
            formTitle="Inicia Sesion"
            handleSubmit={formik.handleSubmit}
            formClass="flex flex-col"
            buttonsClass="flex justify-center"
            ButtonCancel="no"
            buttonConfirmText="Iniciar sesion"
            ButtonConfirm="yes"
          >
            <>
              {fields.map((fields) => (
                <GenericFields
                  fieldValues={fields}
                  key={fields.key}
                  fieldClass={"flex flex-col m-2"}
                />
              ))}
            </>
          </GenericForm>
          <div></div>
        </div>
      </div>
    </>
  );
};
