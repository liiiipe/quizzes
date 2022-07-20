function Button(props) {
  return (
    <button type={props.type} onClick={props.onClick}
      className={`py-2 px-4 text-sm font-medium rounded-md text-white 
      ${props.button_style === "primary" ? "bg-lime-400 hover:bg-lime-500 focus:bg-lime-500" : props.button_style === "secondary" ? "bg-[#76D0E3] hover:bg-teal-500 focus:bg-teal-500" : "bg-rose-300 hover:bg-rose-400 focus:bg-rose-400"}
      focus:ring-2 focus:ring-offset-2 w-60`} >
      {props.label}
    </button>
  )
}

export default Button