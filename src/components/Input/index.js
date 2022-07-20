function Input(props) {
  return (
    <input
      className={`${props.width || "w-72"} bg-slate-100 border-b-4 p-1 outline-none focus:border-blue-400 text-sm`}
      type={props.type || "text"}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  )
}
export default Input