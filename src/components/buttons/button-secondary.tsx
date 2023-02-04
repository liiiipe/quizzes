interface ButtonSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  children,
  ...rest
}) => {
  return (
    <button
      className="w-60 rounded-md bg-purple py-2 px-4 text-sm font-medium text-white transition-all hover:bg-lighter-purple focus:bg-lighter-purple focus:ring-2 focus:ring-offset-2"
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
