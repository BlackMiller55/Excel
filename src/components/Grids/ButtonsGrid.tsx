import { GenericButton } from "../Buttons/GenericButton";

interface IBtnGrid {
  ButtonProps: {
    key:number;
    text: string;
    click?: () => void;
  }[];
}

export const ButtonGrid = ({ ButtonProps }: IBtnGrid) => {

  return (
    <div className="grid grid-cols-3 grids md:gap-10 sm:gap-5 w-full sm:p-6 md:p-12">
      {ButtonProps.map((buttons) => (
        <GenericButton key={buttons.key} text={buttons.text} click={buttons.click} />
      ))}
    </div>
  );
};
