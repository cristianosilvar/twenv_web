import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  VStack,
} from '@chakra-ui/react'
import { Label } from '../Label'
import { Controller } from 'react-hook-form'
import { IconCalendar } from '@/icons'

interface InputDateInterface extends InputProps {
  name: string
  label?: string
  isRequired?: boolean
  align?: string
}

const InputDate = ({
  label,
  name,
  isRequired,
  align,
  size = 'lg',
  ...rest
}: InputDateInterface) => {
  return (
    <VStack align={align} w={'full'}>
      <Controller
        render={({ field }) => (
          <>
            {label && <Label label={label} isRequired={isRequired} />}
            <InputGroup>
              <InputRightElement
                children={<IconCalendar boxSize="25px" color="#fefefe60" />}
                zIndex={-1}
                h="full"
              />
              <Input
                type="date"
                size={size}
                bgColor={'#fefefe15'}
                borderColor="#fefefe25"
                _hover={{
                  borderColor: '#fefefe35',
                }}
                _focusVisible={{
                  borderColor: '#513BD9',
                }}
                sx={{
                  '::-webkit-calendar-picker-indicator': {
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
          </>
        )}
        name={name}
      />
    </VStack>
  )
}

export default InputDate
