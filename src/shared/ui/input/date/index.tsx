import { type InputProps, Text } from '@chakra-ui/react';
import { Input, VStack } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

import { IconCalendar } from '@/shared/ui/icons';
import { InputGroup } from '@/shared/ui/input-group';

import { Label } from '../../label';

interface InputDateInterface extends InputProps {
  name: string;
  label?: string;
  isRequired?: boolean;
  align?: string;
}

export const InputDate = ({
  label,
  name,
  isRequired,
  align,
  size = 'lg',
  ...rest
}: InputDateInterface) => {
  return (
    <VStack align={align} w="full">
      <Controller
        render={({ field, fieldState }) => (
          <>
            {label && <Label label={label} isRequired={isRequired} />}
            <InputGroup
              startElement={<IconCalendar boxSize="25px" color="#fefefe60" />}
            >
              <Input
                type="date"
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
                css={{
                  '& ::-webkit-calendar-picker-indicator': {
                    h: 'full',
                    w: '20%',
                    right: 0,
                    opacity: 0,
                    zIndex: 10,
                    position: 'absolute',
                    cursor: 'pointer',
                  },
                }}
                {...field}
                {...rest}
              />
            </InputGroup>
            {fieldState.error && (
              <Text fontSize="12px" color="red.500" fontWeight="semibold">
                {fieldState.error.message?.toString()}
              </Text>
            )}
          </>
        )}
        name={name}
      />
    </VStack>
  );
};
