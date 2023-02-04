interface ButtonTertiaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const ButtonTertiary: React.FC<ButtonTertiaryProps> = ({
  children,
  ...rest
}) => {
  return (
    <button
      className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white transition hover:bg-white/20"
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonTertiary;