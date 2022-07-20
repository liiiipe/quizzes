import { useEffect } from "react";
import Button from "../Button";
import Input from "../Input";

function Modal(props) {

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.id === "modal-container") {
        props.setModalOpen(false);
      }
    })

    window.addEventListener('keyup', (e) => {
      if (e.key === "Escape") {
        props.setModalOpen(false);
      }
    })

    return () => {
      window.removeEventListener('click', (e) => {
        if (e.id === "modal-container") {
          props.setModalOpen(false);
        }
      })

      window.removeEventListener('keyup', (e) => {
        if (e.key === "Escape") {
          props.setModalOpen(false);
        }
      })
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 bg-blue-800 bg-opacity-75 origin-center flex justify-center items-center appear-done enter-done"
      id="modal-container"
    >
      <div
        className="bg-white w-11/12 max-w-md text-center pt-10 rounded-sm shadow-lg appear-done enter-done"
      >
        <div className="px-4 mb-4">
          <h2 className="text-3xl font-medium mb-5">{props.titulo}</h2>
          <Input type="email" placeholder={props.placeholder} value={props.state.value} setValue={props.state.setValue} />
        </div>
        <div
          className="flex mt-10 justify-center py-4 px-4 border-t border-gray-300 false"
        >
          <Button button_style="primary" label="Confirmar" onClick={() => props.confirmarFunc()} />
        </div>
      </div>
    </div>
  )
}

export default Modal;