import { useState } from "react";
import { Link } from "react-router-dom";
import AnglesRight from "../../utils/icons/AnglesRight";

function Pergunta({ pergunta, action }) {
  const [adicionada, setAdicionada] = useState(false);

  return (
    <div
      className="px-4 py-4 flex sm:flex-row items-center justify-between border-b border-gray-30 gap-2"
    >
      <div className="flex flex-col">
        <p className="text-sm mb-2">{pergunta.titulo}</p>
        <div className="text-sm font-bold bg-[#B8B8B8] w-fit py-1 px-3 rounded-full">{pergunta.categoria}</div>
      </div>
      <div className="cursor-pointer transition-colors duration-300 ease hover:bg-gray-200 no-underline p-3 rounded-full">
        {
          action === "duplicar" ?
            <Link to={`/professor/adicionar-pergunta/${pergunta.id}`} title="Duplicar Pergunta">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z" /></svg>
            </Link> :
            action === "add-remove" ?
              adicionada ?
                <svg onClick={() => setAdicionada(false)} className="w-6 h-6 " fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" /></svg>
                :
                <svg onClick={() => setAdicionada(true)} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" fill="green" /></svg> : ''
        }
      </div>
    </div>
  )
}

function Quiz({ quiz, action, page }) {
  const [adicionada, setAdicionada] = useState(false);

  return (
    <div
      className="px-4 py-4 flex sm:flex-row items-center justify-between border-b border-gray-30 gap-2"
    >
      <div className="flex flex-col">
        <p className="text-base font-bold mb-2">{quiz.titulo}</p>
        <div className="text-sm">{quiz.descricao}</div>
      </div>
      <Link className="cursor-pointer transition-colors duration-300 ease hover:bg-gray-200 no-underline p-2 rounded-full" to={page === "aluno" ? `/aluno/responder-quiz/${quiz.id}` : `/professor/visualizar-quiz/${quiz.id}`} title="Visualizar Quiz">
        <AnglesRight />
      </Link>

      {
        action === "add-remove" ?
          adicionada ?
            <div className="cursor-pointer transition-colors duration-300 ease hover:bg-gray-200 no-underline p-3 rounded-full">
              <svg onClick={() => setAdicionada(false)} className="w-6 h-6 " fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" /></svg>
            </div>
            :
            <div className="cursor-pointer transition-colors duration-300 ease hover:bg-gray-200 no-underline p-3 rounded-full">
              <svg onClick={() => setAdicionada(true)} className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" fill="green" /></svg>
            </div> : ''
      }

    </div>
  )
}

function SmallList(props) {
  return (
    <div className="max-h-96 min-h-96 overflow-scroll mt-2 mb-6 bg-indigo-50 rounded-lg">
      {
        props.data.map(item =>
          props.type === "perguntas" ? <Pergunta pergunta={item} action={props.action} /> : <Quiz quiz={item} action={props.action} page={props.page} />
        )
      }
    </div>
  )
}

export default SmallList;