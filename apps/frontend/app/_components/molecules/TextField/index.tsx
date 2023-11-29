// atoms
import { cn } from "@/app/_utils";
import { Input, Text } from "../../atoms";

// interfaces
interface TextFieldProperties {
  title: string;
  placeholder: string;
  className?: string;
  type: string;
}

export const TextField = ({
  title,
  placeholder,
  className,
  type,
}: TextFieldProperties) => {
  return (
    <div className={cn("space-y-1", className)}>
      <Text as="p" size={14}>
        {title}
      </Text>
      <Input placeholder={placeholder} type={type} />
    </div>
  );
};
