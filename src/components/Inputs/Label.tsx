import { Flex, Text } from "@chakra-ui/react";

interface LabelInterface {
  label: string;
  isRequired: boolean;
}

export const Label = ({ label, isRequired }: LabelInterface) => {
  return (
    <Flex fontSize="lg" fontWeight="semibold" gap={1}>
      <Text>{label}</Text>
      <Text color={"purple.500"}>{isRequired && "*"}</Text>
    </Flex>
  );
};
