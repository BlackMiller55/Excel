import { Select, Input } from "antd";
import { FormikTouched } from "formik";

interface FieldProps {
  fieldValues: {
    id: string;
    name?: string;
    title?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    valueArray?: string[];
    touched?: FormikTouched<{}>;
    errors?: any;
    onChange: ((e: React.ChangeEvent<any>) => void) | (() => void);
    onBlur?: (e: React.FocusEvent<any, Element>) => void;
    inputType: string;
    tagOptions?: {}[];
    dropOptions?: [];
    prevValues?: any;
  };
  fieldClass?: string;
}

const { Option } = Select;

export const GenericFields = (props: FieldProps) => {
  const { fieldValues, fieldClass } = props;

  const handleChange = (values: string) => {
    fieldValues.valueArray?.push(values);
  };

  return (
    <div className={fieldClass}>
      <label className="text-base font-medium mb-4" htmlFor={fieldValues.id}>
        {fieldValues.title}
      </label>

      {fieldValues.inputType.includes("normalInput") && (
        <input
          className="text-xl font-medium mb-4 p-2 border border-primary"
          id={fieldValues.id}
          name={fieldValues.name}
          type={fieldValues.type}
          placeholder={fieldValues.placeholder}
          onChange={fieldValues.onChange}
          onBlur={fieldValues.onBlur}
          value={fieldValues.value}
        />
      )}

      {fieldValues.inputType.includes("textArea") && (
        <Input.TextArea
          className="text-xl font-medium mb-4 border border-primary"
          id={fieldValues.id}
          name={fieldValues.name}
          placeholder={fieldValues.placeholder}
          onChange={fieldValues.onChange}
          onBlur={fieldValues.onBlur}
          value={fieldValues.value}
        />
      )}

      {fieldValues.inputType.includes("multiple") && (
        <Select
          className="text-xl font-medium mb-4 border border-primary"
          mode="multiple"
          size="large"
          id={fieldValues.id}
          fieldNames={{ label: fieldValues.name }}
          placeholder={fieldValues.placeholder}
          onChange={handleChange}
          onBlur={fieldValues.onBlur}
          allowClear
          showArrow
          tokenSeparators={[","]}
          options={fieldValues.tagOptions}
          defaultValue={fieldValues.prevValues}
        />
      )}
      {fieldValues.inputType.includes("tags") && (
        <Select
          className="text-xl font-medium mb-4 border border-primary"
          mode="tags"
          size="large"
          id={fieldValues.id}
          fieldNames={{ label: fieldValues.name }}
          placeholder={fieldValues.placeholder}
          onChange={handleChange}
          onBlur={fieldValues.onBlur}
          allowClear
          showArrow
          tokenSeparators={[","]}
          options={fieldValues.tagOptions}
          defaultValue={fieldValues.prevValues}
        />
      )}
      {fieldValues.inputType.includes("dropdown") && (
        <Select
          className="text-xl font-medium mb-4 border border-primary"
          size="large"
          onChange={fieldValues.onChange}
          id={fieldValues.id}
          placeholder={fieldValues.placeholder}
        >
          {fieldValues.dropOptions?.map((fieldValues) => (
            <Option value={fieldValues}>{fieldValues}</Option>
          ))}
        </Select>
      )}

      {[fieldValues.touched] && [fieldValues.errors] ? (
        <>
          {fieldValues.errors && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{fieldValues.errors}</AlertDescription>
            </Alert>
          )}
        </>
      ) : null}
    </div>
  );
};
