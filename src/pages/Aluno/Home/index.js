import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import SmallList from "../../../components/SmallListt";
import quizzes from "../../../utils/quizzes";

function Home() {
  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px]">
      <div className="flex gap-6">
        <Avatar />
        <div>
          <h1 className="text-4xl font-bold">Usuário da Silva</h1>
          <h2 className="text-xl font-semibold mt-2">Matrícula : 999999</h2>
          <div className="flex gap-12 mt-5">
            <Link to="/perfil"><Button button_style="secondary" label="Visualizar Perfil" /></Link>
            <Link to="/aluno/visualizar-turmas"><Button button_style="secondary" label="Visualizar Turmas" /></Link>
          </div>
        </div>
      </div>
      <div className="flex mt-24">
        <div>
          <h2 className="text-xl font-semibold mt-2">Quizzes Para Responder</h2>
          <SmallList type="quizzes" data={quizzes} page="aluno" />
        </div>
      </div>
    </div>
  )
}

export default Home;