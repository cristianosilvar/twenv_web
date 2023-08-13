import { Textarea, VStack } from "@chakra-ui/react";
import { Label } from "../Label";

interface InputTextareaInterface {
  placeholder?: string;
  label?: string;
  size?: string;
  align?: string;
  resize?: "vertical" | "horizontal" | "none";
  isReadOnly: boolean;
  isRequired: boolean;
}

export const InputTextarea = ({
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
    <VStack align={align ? align : "start"} w="full">
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
