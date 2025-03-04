import { Input, InputProps, VStack } from '@chakra-ui/react';
import { Label } from '../../../shared/ui/label';
import { Controller } from 'react-hook-form';

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
    <VStack align={'start'} w="full">
      <Controller
        name={name}
        render={({ field }) => (
          <>
            {label && <Label label={label} isRequired={required} />}
            <Input
              type="password"
              placeholder={placeholder}
              readOnly={readOnly}
              required={required}
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
          </>
        )}
      />
    </VStack>
  );
};
