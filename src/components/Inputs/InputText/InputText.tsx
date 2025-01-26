import { Input, InputProps, VStack } from '@chakra-ui/react'
import { Label } from '../Label'
import { Control, Controller } from 'react-hook-form'

interface InputTextInterface extends InputProps {
  name: string
  placeholder?: string
  label?: string
  isRequired?: boolean
}

export const InputText = ({
  name,
  placeholder,
  label,
  readOnly,
  required,
  ...rest
}: InputTextInterface) => {
  return (
    <VStack align={'start'} w="full">
      <Controller
        name={name}
        render={({ field }) => (
          <>
            {label && <Label label={label} isRequired={required} />}
            <Input
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
  )
}
