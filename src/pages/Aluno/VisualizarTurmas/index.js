import { useState } from "react";
import Button from "../../../components/Button";
import Turmas from "../../../components/Turmas";
import Modal from "../../../components/Modal";
import turmasList from "../../../utils/turmas";

function VisualizarTurmas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [link, setLink] = useState("");
  const [turmas, setTurmas] = useState([...turmasList]);

  function entrarNaTurma() {
    setTurmas([...turmas, {
      id: turmas.length + 1,
      turma: "Estrutura de Dados",
      codigo: "CK243",
      horario: "TER 10:00-12:00 QUI 10:00-12:00",
      participantes: [
        {
          nome: "Fulano",
          matricula: "85461",
          email: "fulano@email.com",
        },
        {
          nome: "Fabio",
          matricula: "8967",
          email: "fabio@email.com",
        },
        {
          nome: "Gabriel",
          matricula: "48978",
          email: "gabriel@email.com",
        },
        {
          nome: "Rafael",
          matricula: "767",
          email: "rafael@email.com",
        },
      ]
    }])
    setModalOpen(false);
  }

  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px]">
      <h1 className="text-3xl font-bold">Turmas</h1>

      <div className="w-[750px] mt-6">
        <div className="flex justify-around font-bold">
          <h5>Turma</h5>
          <h5>Código</h5>
          <h5>Horário</h5>
        </div>
        <Turmas turmas={turmas} page="aluno" />
      </div>

      <div className="flex gap-12 pt-7">
        <Button button_style="primary" label="Entrar em uma Turma" onClick={() => setModalOpen(true)} />
      </div>

      {
        modalOpen &&
        <Modal
          titulo="Inserir Link de Convite"
          state={{
            value: link,
            setValue: setLink
          }}
          confirmarFunc={entrarNaTurma}
          setModalOpen={setModalOpen}
          placeholder="www.link.com.br"
        />
      }
    </div>
  )
}

export default VisualizarTurmas;