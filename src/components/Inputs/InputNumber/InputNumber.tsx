import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputProps,
  VStack,
} from '@chakra-ui/react'
import { Control, Controller } from 'react-hook-form'

import { Label } from '../Label'

type LeftElementType = 'R$' | '%'

interface InputNumberInterface extends InputProps {
  name: string
  leftElement?: LeftElementType
  isRequired?: boolean
  label?: string
  align?: string
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
            <InputGroup size={size}>
              {leftElement && (
                <InputLeftElement pointerEvents="none" children={leftElement} />
              )}
              <Input
                type="number"
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
  )
}

export default InputNumber
