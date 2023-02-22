import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { GenericFields } from "./Forms/Components/GenericFields";
import { GenericForm } from "./Forms/GenericForm";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useAddListRow } from "../Hooks/useAddListRow";
import { GenericErrors } from "./Errors/GenericErrors";

const PacientURL = "/pacient/";

export const NewEquipmentForm = ({ type, status, brand }: any) => {
  const navigate = useNavigate();
  const [errorRes, setErrorRes] = useState<any>();
  const toast = useToast();

  const addRow = useAddListRow();

  const success = () => {
    toast({
      title: "Pacient added successfully.",
      description: "Pacient added successfully.",
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };

  const formik = useFormik({
    initialValues: {
      birthdate: "",
      em_contact: "",
      em_phone: "",
      email: "",
      f_last_name: "",
      m_last_name: "",
      marital_status: "",
      med_insurance: "",
      name: "",
      phone_num: "",
      phone_type: "",
      sex: "",
    },
    validationSchema: Yup.object({
      date_init: Yup.date().required("Add a date"),
    }),

    onSubmit: async (values: any) => {
      try {
        await addRow(values, PacientURL);
        success();
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      } catch (error: any) {
        setErrorRes(error);
      }
    },
  });

  const fields = [
    {
      key: 1,
      id: "birthdate",
      name: "birthdate",
      title: "BirthDate",
      type: "date",
      placeholder: "Date",
      value: formik.values.birthdate,
      touched: formik.touched.birthdate,
      errors: formik.errors.birthdate,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },
    {
      key: 2,
      id: "name",
      name: "name",
      title: "First Name",
      type: "text",
      placeholder: "Descripcion",
      value: formik.values.name,
      touched: formik.touched.name,
      errors: formik.errors.name,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "textArea",
    },
    {
      key: 3,
      id: "f_last_name",
      name: "f_last_name",
      title: "Last name",
      type: "text",
      placeholder: "Name",
      value: formik.values.f_last_name,
      touched: formik.touched.f_last_name,
      errors: formik.errors.f_last_name,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },
    {
      key: 4,
      id: "m_last_name",
      name: "m_last_name",
      title: "Maiden last name",
      type: "text",
      placeholder: "Name",
      value: formik.values.m_last_name,
      touched: formik.touched.m_last_name,
      errors: formik.errors.m_last_name,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },
    {
      key: 5,
      id: "marital_status",
      name: "marital_status",
      title: "Marital Status",
      type: "text",
      placeholder: "Name",
      value: formik.values.marital_status,
      touched: formik.touched.marital_status,
      errors: formik.errors.marital_status,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },
    {
      key: 6,
      id: "med_insurance",
      name: "med_insurance",
      title: "Medical Insurance",
      type: "text",
      placeholder: "Name",
      value: formik.values.med_insurance,
      touched: formik.touched.med_insurance,
      errors: formik.errors.med_insurance,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },

    {
      key: 7,
      id: "email",
      name: "email",
      title: "Email",
      type: "email",
      placeholder: "email",
      value: formik.values.email,
      touched: formik.touched.email,
      errors: formik.errors.email,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "textArea",
    },
    {
      key: 8,
      id: "phone_num",
      name: "phone_num",
      title: "Phone number",
      type: "text",
      placeholder: "Phone",
      value: formik.values.phone_num,
      touched: formik.touched.phone_num,
      errors: formik.errors.phone_num,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },
    {
      key: 9,
      id: "phone_type",
      name: "phone_type",
      title: "Phone type",
      type: "text",
      placeholder: "Type",
      value: formik.values.phone_type,
      touched: formik.touched.phone_type,
      errors: formik.errors.phone_type,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },
    {
      key: 10,
      id: "em_contact",
      name: "em_contact",
      title: "Emergency contact",
      type: "text",
      placeholder: "Emergency contact",
      value: formik.values.em_contact,
      touched: formik.touched.em_contact,
      errors: formik.errors.em_contact,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },

    {
      key: 11,
      id: "em_phone",
      name: "em_phone",
      title: "Emergency Phone",
      type: "text",
      placeholder: "Emergency Phone",
      value: formik.values.em_phone,
      touched: formik.touched.em_phone,
      errors: formik.errors.em_phone,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      inputType: "normalInput",
    },
  ];

  return (
    <>
      <div className="mx-2 px-6 w-full  pt-4">
        {errorRes ? (
          <>
            <GenericErrors
              ErrorType="alert"
              responseCode={errorRes.response.status}
              setErrorRes={setErrorRes}
            />
          </>
        ) : null}
        <GenericForm
          formTitle="Registro de equipo"
          handleSubmit={formik.handleSubmit}
          formClass="flex flex-col"
          buttonsClass="flex justify-between"
          ButtonCancel="yes"
          ButtonConfirm="yes"
          buttonCancelText="Volver"
          buttonConfirmText="Crear equipo"
          ButtonCancelAction={() => navigate(-1)}
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
      </div>
    </>
  );
};
