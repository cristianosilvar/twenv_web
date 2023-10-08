import { Input, InputGroup, InputLeftAddon, VStack } from "@chakra-ui/react";
import { Label } from "../Label";

type LeftElementType = "R$" | "%";

interface InputNumberInterface {
  leftElement?: LeftElementType;
  placeholder?: string;
  label?: string;
  size?: string;
  align?: string;
  isReadOnly: boolean;
  isRequired: boolean;
}

const InputNumber = ({
  leftElement,
  placeholder,
  label,
  size,
  align,
  isReadOnly,
  isRequired,
}: InputNumberInterface) => {
  return (
    <VStack align={align} w={"full"}>
      {label && <Label label={label} isRequired={isRequired} />}
      <InputGroup size={size}>
        {leftElement && <InputLeftAddon children={leftElement} />}
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

export default InputNumber;
