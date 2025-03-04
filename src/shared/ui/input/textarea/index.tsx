import type { TextareaProps } from '@chakra-ui/react';
import { Text, Textarea, VStack } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

import { Label } from '../../label';

interface InputTextareaInterface extends TextareaProps {
  name: string;
  placeholder?: string;
  label?: string;
  align?: string;
  isRequired?: boolean;
}

export const InputTextarea = ({
  name,
  placeholder,
  label,
  align,
  maxH = '200px',
  readOnly,
  required,
  ...rest
}: InputTextareaInterface) => {
  return (
    <VStack align={align} w="full">
      <Controller
        name={name}
        render={({ field, fieldState }) => (
          <>
            {label && <Label label={label} isRequired={required} />}
            <Textarea
              placeholder={placeholder}
              readOnly={readOnly}
              required={required}
              bgColor="#fefefe15"
              borderColor="#fefefe25"
              outline="none"
              _hover={{
                borderColor: '#fefefe35',
              }}
              _focusVisible={{
                borderColor: '#513BD9',
              }}
              maxH={maxH}
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
