import { useState } from "react";
import { useParams } from "react-router-dom";
import QuizProfessor from "../../../components/QuizProfessor"
import quizzes from "../../../utils/quizzes";

function VisualizarQuiz() {
  let { id } = useParams();
  const [quiz] = useState(quizzes[parseInt(id - 1)]);
  return (
    <QuizProfessor action="visualizar" quiz={quiz}/>
  )
}

export default VisualizarQuiz