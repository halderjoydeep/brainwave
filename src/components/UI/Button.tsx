import { cn } from "@/lib/utils";
import ButtonSvg from "../SVG/ButtonSvg";

interface ButtonProps extends React.ComponentProps<"button"> {
  white?: boolean;
}

const Button = ({ white, className, children }: ButtonProps) => {
  const buttonClass = cn(
    "button relative inline-flex h-11 items-center justify-center px-7 transition-colors hover:text-color-1",
    {
      "text-n-8": white,
      "text-n-1": !white,
    },
    className,
  );

  return (
    <button className={buttonClass}>
      <span className="z-2">{children}</span>
      <ButtonSvg white={white} />
    </button>
  );
};

export default Button;
