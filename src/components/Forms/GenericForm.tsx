import { FC } from "react";
import { GenericButton } from "../Buttons/GenericButton";

interface FormProps {
  formTitle: string;
  children: JSX.Element;
  handleSubmit: () => void;
  buttonConfirmText?: string;
  buttonCancelText?: string;
  formClass: string;
  buttonsClass?: string;
  ButtonConfirm: "yes" | "no";
  ButtonCancel: "yes" | "no";
  ButtonCancelAction?: () => void;
}

export const GenericForm: FC<FormProps> = ({
  formTitle,
  handleSubmit,
  children,
  buttonConfirmText,
  buttonCancelText,
  formClass,
  buttonsClass,
  ButtonConfirm,
  ButtonCancel,
  ButtonCancelAction,
}) => {
  function onKeyDown(keyEvent:any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl font-light my-4 text-center"> {formTitle}</h1>
      </div>
      <div className="w-full">
        <form className={formClass} onSubmit={handleSubmit} onKeyDown={onKeyDown}>
          {children}
          <div className={buttonsClass}>
            {ButtonCancel.includes("yes") ? (
              <GenericButton
                text={buttonCancelText}
                click={ButtonCancelAction}
              />
            ) : null}

            {ButtonConfirm.includes("yes") ? (
              <GenericButton text={buttonConfirmText} buttonType="submit" />
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
};
