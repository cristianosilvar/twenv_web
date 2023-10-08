import { Textarea, VStack } from "@chakra-ui/react";
import { Label } from "../Label";

type ResizeType = "vertical" | "horizontal" | "none";

interface InputTextareaInterface {
  placeholder?: string;
  label?: string;
  size?: string;
  align?: string;
  resize?: ResizeType;
  isReadOnly: boolean;
  isRequired: boolean;
}

const InputTextarea = ({
  placeholder,
  label,
  size,
  align,
  resize,
  isReadOnly,
  isRequired,
  ...rest
}: InputTextareaInterface) => {
  return (
    <VStack align={align} w="full">
      {label && <Label label={label} isRequired={isRequired} />}
      <Textarea
        placeholder={placeholder}
        size={size}
        resize={resize}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        {...rest}
      />
    </VStack>
  );
};

export default InputTextarea;
