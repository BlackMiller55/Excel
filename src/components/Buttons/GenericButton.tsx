interface ButtonProps {
  text: string | undefined;
  click?: () => void;
  buttonType?: "submit" | "reset" | "button";
}

export const GenericButton = (props: ButtonProps) => {
  const { text, click, buttonType } = props;

  return (
    <button
      className=" md:button__desktop sm:button__mobile"
      onClick={click}
      type={buttonType}
    >
      {text}
    </button>
  );
};
