import { cn } from "@/lib/utils";
import ButtonSvg from "../SVG/ButtonSvg";

interface ButtonProps extends React.ComponentProps<"button"> {
  white?: boolean;
}

const Button = ({ white, className, children }: ButtonProps) => {
  return (
    <button
      className={cn(
        "button inline-flex items-center justify-center",
        className,
      )}
    >
      <span>{children}</span>
      <ButtonSvg white={white} />
    </button>
  );
};

export default Button;
