import { useEffect } from "react";
import { IconX } from "@tabler/icons";

interface ModalProps {
  children: React.ReactNode;
  setShowModal: (showModal: boolean) => void;
  title: string;
}

function Modal({ children, setShowModal, title }: ModalProps) {
  const handleClickCloseModal = () => {
    setShowModal(false);
  };

  const handleClickOutsideModal = (clickedOutside: boolean) => {
    if (clickedOutside) {
      handleClickCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        handleClickCloseModal();
      }
    });

    return () => {
      window.removeEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          handleClickCloseModal();
        }
      });
    };
  }, []);

  return (
    <div
      className="bg-slate-400/70 fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center overflow-auto"
      onClick={(e) => handleClickOutsideModal(e.target === e.currentTarget)}
    >
      <div className="relative m-auto box">
        <header>
          <h1 className="text-center text-2xl text-black font-bold">{title}</h1>
          <div onClick={() => handleClickCloseModal()} title="Fechar modal">
            <IconX
              className="absolute top-6 right-6 cursor-pointer"
              size={28}
              color="red"
              stroke={3}
            />
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}

export default Modal;
