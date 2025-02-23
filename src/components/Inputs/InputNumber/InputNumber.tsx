import { Box, Input, InputProps, VStack } from '@chakra-ui/react';
import { Control, Controller } from 'react-hook-form';

import { Label } from '../Label';
import { InputGroup } from '@/shared/ui/input-group';

type LeftElementType = 'R$' | '%';

interface InputNumberInterface extends InputProps {
  name: string;
  leftElement?: LeftElementType;
  isRequired?: boolean;
  label?: string;
  align?: string;
}

const InputNumber = ({
  name,
  leftElement,
  label,
  align,
  isRequired,
  size = 'lg',
  ...rest
}: InputNumberInterface) => {
  return (
    <VStack align={align} w={'full'}>
      <Controller
        name={name}
        render={({ field }) => (
          <>
            {label && <Label label={label} isRequired={isRequired} />}
            <InputGroup
              startElement={
                leftElement && <Box pointerEvents="none">{leftElement}</Box>
              }
            >
              <Input
                type="number"
                size={size}
                bgColor={'#fefefe15'}
                borderColor="#fefefe25"
                _hover={{
                  borderColor: '#fefefe35',
                }}
                _focusVisible={{
                  borderColor: '#513BD9',
                }}
                {...field}
                {...rest}
              />
            </InputGroup>
          </>
        )}
      />
    </VStack>
  );
};

export default InputNumber;
