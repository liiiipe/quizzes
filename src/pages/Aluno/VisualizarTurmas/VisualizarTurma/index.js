import { useState } from "react";
import { useParams } from "react-router-dom";
import Turma from "../../../../components/Turma";
import turmas from "../../../../utils/turmas";

function VisualizarTurma() {
  let { id } = useParams();
  const [turma] = useState(turmas[parseInt(id - 1)]);

  return (
    <Turma turma={turma} type="aluno" id={id}/>
  )
}

export default VisualizarTurma;