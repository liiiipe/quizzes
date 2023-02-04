interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

function Checkbox({ id, ...rest }: CheckboxProps) {
  return <input id={id} type="checkbox" className="h-4 w-4" {...rest} />;
}

export default Checkbox;
