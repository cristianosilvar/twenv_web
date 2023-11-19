import { Textarea, TextareaProps, VStack } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
import { Label } from '../Label'

interface InputTextareaInterface extends TextareaProps {
  name: string
  placeholder?: string
  label?: string
  align?: string
  isRequired?: boolean
}

const InputTextarea = ({
  name,
  placeholder,
  label,
  align,
  maxH = '200px',
  isReadOnly,
  isRequired,
  ...rest
}: InputTextareaInterface) => {
  return (
    <VStack align={align} w="full">
      <Controller
        name={name}
        render={({ field }) => (
          <>
            {label && <Label label={label} isRequired={isRequired} />}
            <Textarea
              placeholder={placeholder}
              isReadOnly={isReadOnly}
              isRequired={isRequired}
              bgColor={'#fefefe15'}
              borderColor="#fefefe25"
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
          </>
        )}
      />
    </VStack>
  )
}

export default InputTextarea
