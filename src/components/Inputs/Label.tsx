import { Flex, Text, TextProps } from '@chakra-ui/react'

interface LabelInterface extends TextProps {
  label: string
  isRequired?: boolean
}

export const Label = ({ label, isRequired, ...props }: LabelInterface) => {
  return (
    <Flex fontSize="md" fontWeight="medium" gap={1}>
      <Text {...props}>{label}</Text>
      {isRequired && (
        <Text {...props} color={'purple.500'}>
          *
        </Text>
      )}
    </Flex>
  )
}
