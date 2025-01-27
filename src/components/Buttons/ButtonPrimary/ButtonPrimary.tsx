import { Button, ButtonProps } from '@chakra-ui/react';

export interface ButtonInterface extends ButtonProps {
  text?: string;
}

const ButtonPrimary = ({ text, ...rest }: ButtonInterface) => {
  return (
    <Button
      fontWeight="semibold"
      bgColor="#5200FF"
      _hover={{ border: '1px solid #ffffff65' }}
      _active={{ border: '1px solid #ffffff' }}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default ButtonPrimary;
