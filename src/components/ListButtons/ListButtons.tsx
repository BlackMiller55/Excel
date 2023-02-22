import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

interface IBtnGrid {
  ListProps: {
    key: number;
    text: string;
    link: string;
  }[];
}

export const ListButtons = ({ ListProps }: IBtnGrid) => {
  return (
    <>
      <div
        className="flex 
        w-full sm:flex-col 
        sm:my-6 lg:my-0 lg:flex-row 
      lg:text-secondary justify-between"
      >
        {ListProps.map((buttons) => (
          <Link
            key={buttons.key}
            as={RouterLink}
            to={buttons.link}
            className="sm:text-2xl lg:text-sm uppercase sm:my-4 lg:my-0 lg:text-center"
          >
            {buttons.text}
          </Link>
        ))}
      </div>
    </>
  );
};
