import { Button } from "@chakra-ui/react";

export interface ButtonInterface {
  size?: string;
  w?: number | string;
  text?: string;
  mt?: number;
}

const ButtonPrimary = ({ size, w, text }: ButtonInterface) => {
  return (
    <Button
      fontWeight="semibold"
      size={size}
      w={w}
      bgColor={"#5200FF"}
      _hover={{ border: "1px solid #ffffff65" }}
      _active={{ border: "1px solid #ffffff" }}
    >
      {text}
    </Button>
  );
};

export default ButtonPrimary;
