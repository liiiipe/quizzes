import { useState } from "react";
import type { Question } from "../domain/question";
import ButtonSecondary from "./buttons/button-secondary";
import Checkbox from "./checkbox";
import ModalPerguntas from "./modal-perguntas";

interface TablePerguntasProps {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
}

function TablePerguntas({ questions, setQuestions }: TablePerguntasProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
        <table className="w-full text-left text-sm ">
          <thead className="bg-gradient-to-r from-indigo-400 to-indigo-300  text-xs uppercase">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <Checkbox id="checkbox-all-search" />
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Pergunta
              </th>
              <th scope="col" className="py-3 px-6">
                Resposta(s)
              </th>
              <th scope="col" className="py-3 px-6">
                Número de alternativas
              </th>
              <th scope="col" className="py-3 px-6">
                Acão
              </th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr
                key={question.id}
                className="border-b border-slate-300 bg-white text-black"
              >
                <td className="w-4 p-4">
                  <Checkbox id="checkbox-table-search-1" />
                </td>
                <td className="py-4 px-6">{question.title}</td>
                <td className="py-4 px-6">
                  {question.alternatives
                    .filter((alternative) => alternative.isAnswer)
                    .map((alternative) => (
                      <div key={alternative.id}>{alternative.content}</div>
                    ))}
                </td>
                <td className="py-4 px-6">{question.alternatives.length}</td>
                <td className="text py-4 px-6">
                  <button className="font-medium hover:underline">
                    Editar
                  </button>
                  <button className="font-medium text-red-500 hover:underline">
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonSecondary onClick={() => setShowModal(true)}>
        Adicionar
      </ButtonSecondary>

      {showModal && <ModalPerguntas setShowModal={setShowModal} />}
    </div>
  );
}

export default TablePerguntas;
