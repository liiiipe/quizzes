import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Turmas from "../../../components/Turmas";
import turmas from "../../../utils/turmas";

function VisualizarTurmas() {
  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px]">
      <h1 className="text-3xl font-bold">Turmas</h1>

      <div className="w-[750px] mt-6">
        <div className="flex justify-around font-bold">
          <h5>Turma</h5>
          <h5>Código</h5>
          <h5>Horário</h5>
        </div>
        <Turmas turmas={turmas} />
      </div>

      <div className="flex gap-12 pt-7">
        <Link to="/professor/adicionar-turma"><Button button_style="primary" label="Adicionar Turma" /></Link>
      </div>
    </div>
  )
}

export default VisualizarTurmas;