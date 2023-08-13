import { Input, InputGroup, InputLeftAddon, VStack } from "@chakra-ui/react";
import { Label } from "../Label";

interface InputNumberLeftElementInterface {
  leftElement: string;
  placeholder?: string;
  label?: string;
  size?: string;
  align?: string;
  isReadOnly: boolean;
  isRequired: boolean;
}

export const InputNumberLeftElement = ({
  leftElement,
  placeholder,
  label,
  size,
  align,
  isReadOnly,
  isRequired,
}: InputNumberLeftElementInterface) => {
  return (
    <VStack align={align} w={"full"}>
      {label && <Label label={label} isRequired={isRequired} />}
      <InputGroup size={size}>
        <InputLeftAddon children={leftElement} />
        <Input
          type="number"
          placeholder={placeholder}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
      </InputGroup>
    </VStack>
  );
};
