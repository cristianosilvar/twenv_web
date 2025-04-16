import type { InputProps } from '@chakra-ui/react';
import { Box, Input, VStack, Text } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

import { InputGroup } from '@/shared/ui/input-group';

import { Label } from '../../label';

type LeftElementType = 'R$' | '%';

interface InputNumberInterface extends InputProps {
  name: string;
  leftElement?: LeftElementType;
  isRequired?: boolean;
  label?: string;
  align?: string;
}

export const InputNumber = ({
  name,
  leftElement,
  label,
  align,
  isRequired,
  size = 'lg',
  onChange,
  ...rest
}: InputNumberInterface) => {
  return (
    <VStack align={align} w="full">
      <Controller
        name={name}
        render={({ field, fieldState }) => (
          <>
            {label && <Label label={label} isRequired={isRequired} />}
            <InputGroup
              startElement={
                leftElement && <Box pointerEvents="none">{leftElement}</Box>
              }
            >
              <Input
                size={size}
                bgColor="#fefefe15"
                borderColor="#fefefe25"
                outline="none"
                _hover={{
                  borderColor: '#fefefe35',
                }}
                _focusVisible={{
                  borderColor: '#513BD9',
                }}
                pattern="[0-9]*"
                maxLength={16}
                {...field}
                {...rest}
                onChange={(event) => {
                  const value = event.currentTarget.value.replace(
                    /[^0-9]/g,
                    '',
                  );

                  field.onChange(value ? Number(value) : undefined);

                  if (onChange) onChange(event);
                }}
              />
            </InputGroup>
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
