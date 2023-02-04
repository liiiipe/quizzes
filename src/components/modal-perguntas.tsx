import { useState } from "react";
import ButtonSecondary from "./buttons/button-secondary";
import InputPrimary from "./inputs/input-primary";
import Modal from "./modal";
import { IconPlus } from "@tabler/icons";
import type { Alternative as AlternativeType } from "../domain/question";
import Alternative from "./alternative";

interface ModalPerguntasProps {
  setShowModal: (showModal: boolean) => void;
}

function ModalPerguntas({ setShowModal }: ModalPerguntasProps) {
  const [alternatives, setAlternatives] = useState<AlternativeType[]>([]);

  const handleClickSaveQuestion = () => {
    console.log(alternatives);
    
    // setShowModal(false);
  };

  const handleClickAlternative = () => {
    setAlternatives([
      ...alternatives,
      {
        id: crypto.randomUUID(),
        content: "",
        isAnswer: false,
      },
    ]);
  };

  const updateAlternative = (index: number, alternative: AlternativeType) => {
    console.log(alternative);
    
    setAlternatives(value => {
      value[index] = {...alternative};
      return value;
    })
  }

  const removeAlternative = (index: number) => {
    setAlternatives(value => {
      const newValue = [...value];
      newValue.splice(index, 1);
      return newValue;
    })
  }

  return (
    <Modal setShowModal={setShowModal} title="Pergunta">
      <div className="flex flex-col items-center justify-center gap-5 text-black">
        <div className="w-128">
          <InputPrimary label="Nome:" placeholder="Quiz HTML" />
          <div className="mt-3">
            <InputPrimary
              label="Descrição:"
              placeholder="Um Quiz para testar seus conhecimentos em HTML"
            />
          </div>
        </div>
        <div className="mt-5 flex w-full items-center justify-between">
          <h2 className="text-xl font-bold">Alternativas:</h2>
          <button
            className="rounded-full bg-lime-500 p-1 hover:bg-lime-400 transition-all"
            title="Adicionar Alternativa"
            onClick={handleClickAlternative}
          >
            <IconPlus color="white" />
          </button>
        </div>
        {alternatives.length === 0 ? (
          <p className="text-sm italic">Nenhuma alternativa adicionada</p>
        ) : (
          alternatives.map((alternative, index) => (
            <Alternative
              editable
              key={alternative.id}
              index={index}
              alternative={alternative}
              updateAlternative={updateAlternative}
              removeAlternative={removeAlternative}
            />
          ))
        )}
        <ButtonSecondary onClick={handleClickSaveQuestion}>
          Salvar Pergunta
        </ButtonSecondary>
      </div>
    </Modal>
  );
}

export default ModalPerguntas;
