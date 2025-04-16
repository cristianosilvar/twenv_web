import { type InputProps, Text } from '@chakra-ui/react';
import { Input, VStack } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

import { Label } from '../../label';

interface InputPasswordInterface extends InputProps {
  name: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
}

export const InputPassword = ({
  name,
  placeholder,
  label,
  readOnly,
  required,
  ...rest
}: InputPasswordInterface) => {
  return (
    <VStack align="start" w="full">
      <Controller
        name={name}
        render={({ field, fieldState }) => (
          <>
            {label && <Label label={label} isRequired={required} />}
            <Input
              type="password"
              placeholder={placeholder}
              readOnly={readOnly}
              required={required}
              borderColor="#fefefe25"
              outline="none"
              _hover={{
                borderColor: '#fefefe35',
              }}
              _focusVisible={{
                borderColor: '#513BD9',
              }}
              {...field}
              {...rest}
            />
            {fieldState.error && (
              <Text fontSize="12px" color="red.500" fontWeight="semibold">
                {fieldState.error.message?.toString()}
              </Text>
            )}
          </>
        )}
      />
    </VStack>
  );
};
