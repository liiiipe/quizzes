interface InputPrimaryProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  width?: string; 
}

function InputPrimary({ label, width = "full", ...rest }: InputPrimaryProps) {
  const inputId = label?.toLowerCase().replaceAll(" ", "_");

  return (
    <div>
      <label
        htmlFor={inputId}
        className="text-dark mb-2 block text-sm text-start font-bold"
      >
        {label}
      </label>
      <input
        type="text"
        id={inputId}
        className={`text-dark block rounded-lg p-2.5 text-sm shadow-xl border border-slate-300 w-${width} "`}
        required
        {...rest}
      />
    </div>
  );
}

export default InputPrimary;
