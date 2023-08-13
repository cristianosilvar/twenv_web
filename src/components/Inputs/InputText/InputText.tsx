import { Input, VStack } from "@chakra-ui/react";
import { Label } from "../Label";

interface InputTextInterface {
  placeholder?: string;
  label?: string;
  size?: string;
  align?: string;
  isReadOnly: boolean;
  isRequired: boolean;
}

export const InputText = ({
  placeholder,
  label,
  size,
  align,
  isReadOnly,
  isRequired,
  ...rest
}: InputTextInterface) => {
  return (
    <VStack align={align ? align : "start"} w="full">
      {label && <Label label={label} isRequired={isRequired} />}
      <Input
        placeholder={placeholder}
        isReadOnly={isReadOnly}
        size={size}
        isRequired={isRequired}
        {...rest}
      ></Input>
    </VStack>
  );
};
