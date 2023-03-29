const variants = {
  light: {
    background: "bg-neutral-400",
    text: "text-neutral-950",
  },
  dark: {
    background: "bg-neutral-700",
    text: "text-neutral-50",
  },
  colored: {
    background: "bg-amber-500",
    text: "text-neutral-50",
  },
};

interface ButtonProps {
  variant: keyof typeof variants;
  label: string;
  onClick?: () => void;
  extended?: boolean;
}

const Button = (props: ButtonProps) => {
  const { variant, label, onClick, extended } = props;
  const { background, text } = variants[variant];

  const extendedClass = extended ? "col-span-2 text-left px-6" : "w-16";

  return (
    <button
      className={`rounded-full h-16 text-2xl ${background} ${text} ${extendedClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
