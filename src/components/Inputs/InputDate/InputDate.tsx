import { Input, VStack } from "@chakra-ui/react";
import { Label } from "../Label";

interface InputDateInterface {
  placeholder?: string;
  label?: string;
  size?: string;
  align?: string;
  isReadOnly: boolean;
  isRequired: boolean;
}

const InputDate = ({
  placeholder,
  label,
  size,
  align,
  isReadOnly,
  isRequired,
}: InputDateInterface) => {
  return (
    <VStack align={align} w={"full"}>
      {label && <Label label={label} isRequired={isRequired} />}
      <Input
        type="date"
        placeholder={placeholder}
        size={size}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
      ></Input>
    </VStack>
  );
};

export default InputDate;
