import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnglesRight from "../../utils/icons/AnglesRight";
import quizzesList from "../../utils/quizzes";
import Button from "../Button";
import Modal from "../Modal";

function Turma(props) {
  const [opcao, setOpcao] = useState(0);
  const [quizzes, setQuizzes] = useState([...quizzesList.map(item => ({
    ...item,
    checked: false
  }))]);
  const [participantes, setParticipantes] = useState([...props.turma.participantes]);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  function removerParticipante(index) {
    let newParticipantes = [...participantes]
    newParticipantes.splice(index, 1);
    setParticipantes(newParticipantes);
  }

  function addParticipante() {
    setParticipantes([...participantes, {
      nome: "Teste",
      matricula: "00000",
      email
    }]);
    setModalOpen(false);
    setEmail("");
  }

  function removerQuiz(index) {
    let newQuizzes = [...quizzes]
    newQuizzes.splice(index, 1);
    setQuizzes(newQuizzes);
  }

  function checkQuiz(index) {
    let newQuizzesChecked = [...quizzes];
    newQuizzesChecked[index].checked = !newQuizzesChecked[index].checked;
    setQuizzes([...newQuizzesChecked]);
  }

  function aplicarQuizzes() {
    let newQuizzesChecked = quizzes.map(item => ({
      ...item,
      aplicado: item.aplicado ? item.aplicado : item.checked
    }))
    setQuizzes([...newQuizzesChecked]);
  }

  const rowClass =
    "flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300"
  const leftClass = "w-full sm:w-1/3 font-medium text-center sm:text-left"
  const rightClass = "flex-1 text-center sm:text-left"

  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px] relative">
      <h1 className="text-3xl font-bold">{props.turma.codigo} - {props.turma.turma}</h1>

      <div
        className="w-[1250px] flex sm:border-b sm:border-gray-300 relative flex-col sm:flex-row mt-6 bg-indigo-50 p-1"
      >
        <div
          className="flex-1 sm:text-center font-medium pb-2 cursor-pointer hover:text-blue-400"
          onClick={() => setOpcao(0)}
        >
          Participantes
        </div>
        <div
          className="flex-1 sm:text-center font-medium pb-2 cursor-pointer hover:text-blue-400"
          onClick={() => setOpcao(1)}
        >
          Quizzes
        </div>
        <div
          className="flex-1 sm:text-center font-medium pb-2 cursor-pointer hover:text-blue-400"
          onClick={() => setOpcao(2)}
        >
          Link de Convite
        </div>
        <div
          className="flex-1 sm:text-center font-medium pb-2 cursor-pointer hover:text-blue-400"
          onClick={() => setOpcao(3)}
        >
          Sobre
        </div>
        {
          opcao === 0 ?
            <div className={`sm:block absolute bottom-0 left-0 h-1 bg-blue-400 w-1/4`}></div>
            : opcao === 1 ?
              <div className={`sm:block absolute bottom-0 left-[312.5px] h-1 bg-blue-400 w-1/4`}></div>
              : opcao === 2 ?
                <div className={`sm:block absolute bottom-0 left-[625px] h-1 bg-blue-400 w-1/4`}></div>
                :
                <div className={`sm:block absolute bottom-0 left-[937.5px] h-1 bg-blue-400 w-1/4`}></div>
        }
      </div>
      {
        opcao === 0 ?
          <div>
            <div className="mt-2 w-[1150px] border-gray-300 flex gap-5 flex-wrap">
              {participantes.length === 0 && <p className="flex justify-center w-full">Sem participantes</p>}
              {
                participantes.map((item, index) =>
                  <div
                    key={item.id}
                    className="px-4 py-6 flex flex-col sm:flex-row items-center justify-between  border-b border-t bg-indigo-50 rounded-lg border-gray-300 w-[363px]"
                  >
                    <div className="relative rounded-full w-16 h-16">
                      <img
                        src="https://gustui.s3.amazonaws.com/avatar.png"
                        className="absolute left-0 top-0 w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="mt-2 mr-5 text-center sm:text-left sm:mt-0 sm:ml-4 flex-1">
                      <p className="font-medium">{item.nome}</p>
                      <p>Matrícula: {item.matricula}</p>
                      <p>Email: {item.email}</p>
                    </div>
                    {
                      props.type === "professor" &&
                      <div className="cursor-pointer transition-colors duration-300 ease hover:bg-gray-200 no-underline p-2 rounded-full"
                        title={props.type === "professor" && "Excluir participante"}
                        onClick={() => {
                          if (props.type === "professor") {
                            removerParticipante(index);
                          }
                        }}
                      >
                        <svg className="w-5 h-5" fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" /></svg>
                      </div>
                    }
                  </div>
                )
              }
            </div>
            {
              props.type === "professor" &&
              <div className="flex mt-20 justify-center">
                <Button button_style="primary" label="Adicionar participante" onClick={() => setModalOpen(true)} />
              </div>
            }
          </div>
          : opcao === 1 ?
            <div className="mt-2 border-t border-gray-300 w-[1150px]">
              {quizzes.length === 0 && <p className="flex justify-center w-full">Sem quizzes</p>}
              {
                quizzes.map((item, index) =>
                  <div
                    key={item.id}
                    className="px-4 py-4 flex flex-col sm:flex-row items-center justify-between border-b border-gray-30 bg-indigo-50 "
                  >
                    <div className="mt-2 sm:text-left sm:mt-0 sm:ml-4 flex-1">
                      {
                        !item.aplicado && props.type !== "aluno" ?
                          <div className="flex items-center">
                            <input id={`default-checkbox-${item.id}`} type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor={`default-checkbox-${item.id}`} className="ml-2 font-medium text-gray-900" onClick={() => checkQuiz(index)}>{item.titulo}</label>
                          </div> :
                          <label className="ml-7 font-medium text-gray-900 ">{item.titulo}</label>
                      }
                    </div>
                    {
                      props.type !== "aluno" &&
                      <div className="mt-2 sm:text-left sm:mt-0 sm:ml-4 flex-1">
                        <p className="font-medium text-center">
                          {item.aplicado ? <p className="text-green-400 mr-16">Aplicado</p> : <p className="text-red-700 mr-3">Não Aplicado</p>}
                        </p>
                      </div>
                    }
                    {
                      !item.aplicado && props.type !== "aluno" ?
                        <div className="cursor-pointer transition-colors duration-300 ease hover:bg-gray-200 no-underline p-3 rounded-full mr-3" title="Excluir Quiz" onClick={() => removerQuiz(index)}>
                          <svg className="w-5 h-5 " fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" /></svg>
                        </div> : ''
                    }
                    <Link className="cursor-pointer transition-colors duration-300 ease hover:bg-gray-200 no-underline p-2 rounded-full" to={`${props.type === "aluno" ? `/aluno` : `/professor`}/visualizar-quiz/${item.id}`} title="Visualizar Quiz">
                      <AnglesRight />
                    </Link>

                  </div>
                )
              }
              {
                props.type !== "aluno" &&
                <div className="flex gap-12 mt-16 justify-center">
                  <Button button_style="secondary" label="Aplicar Quizzes" onClick={() => aplicarQuizzes()} />
                  <Link to={`/professor/visualizar-turma/${props.id}/adicionar-quiz-a-turma`}><Button button_style="primary" label="Adicionar Quiz" /></Link>
                </div>
              }
            </div>
            : opcao === 2 ?
              <a target="_blank" href="https://www.figma.com/file/eniarKCUc576rMoRM0ZRMl/Quizzes?node-id=0%3A1</a>
              :"  className="text-sm underline text-blue-800 p-9 bg-indigo-50 rounded-lg">https://www.figma.com/file/eniarKCUc576rMoRM0ZRMl/Quizzes?node-id=0%3A1</a>
              :
              <div className="w-[1150px] bg-indigo-50 p-4">
                <h3 className="text-2xl font-medium">Detalhes da Turma</h3>
                <div className="mt-4">
                  <div className={rowClass}>
                    <span className={leftClass}>Nome:</span>
                    <span className={rightClass}>{props.turma.turma}</span>
                  </div>
                  <div className={rowClass}>
                    <span className={leftClass}>Código:</span>
                    <span className={rightClass}>{props.turma.codigo}</span>
                  </div>
                  <div className={rowClass}>
                    <span className={leftClass}>Horário:</span>
                    <span className={rightClass}>{props.turma.horario}</span>
                  </div>
                  <div className={rowClass}>
                    <span className={leftClass}>Número de participantes:</span>
                    <span className={rightClass}>{participantes.length}</span>
                  </div>
                </div>
              </div>
      }

      {
        modalOpen &&
        <Modal
          titulo="Adicionar participante"
          state={{
            value: email,
            setValue: setEmail
          }}
          confirmarFunc={addParticipante}
          setModalOpen={setModalOpen}
          placeholder="fulano@email.com"
        />
      }
    </div>
  )
}

export default Turma;