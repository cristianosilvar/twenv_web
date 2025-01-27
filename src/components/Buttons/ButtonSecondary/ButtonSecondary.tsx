import { Button } from '@chakra-ui/react';

import { ButtonInterface } from '../ButtonPrimary/ButtonPrimary';

const ButtonSecondary = ({ size, w, text, mt }: ButtonInterface) => {
  return (
    <Button
      fontWeight="semibold"
      size={size}
      w={w}
      mt={mt}
      bgColor="#ffffff10"
      _hover={{ backgroundColor: '#ffffff25', border: '1px solid #ffffff50' }}
      _active={{ border: '1px solid #ffffff' }}
    >
      {text}
    </Button>
  );
};

export default ButtonSecondary;
