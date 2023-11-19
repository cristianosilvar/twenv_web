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
  isReadOnly,
  isRequired,
  ...rest
}: InputTextInterface) => {
  return (
    <VStack align={'start'} w="full">
      <Controller
        name={name}
        render={({ field }) => (
          <>
            {label && <Label label={label} isRequired={isRequired} />}
            <Input
              placeholder={placeholder}
              isReadOnly={isReadOnly}
              isRequired={isRequired}
              bgColor={'#fefefe15'}
              borderColor="#fefefe25"
              _focus={{
                borderColor: '#513BD9',
              }}
              _hover={{
                borderColor: '#fefefe35',
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
