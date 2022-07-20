import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import SmallList from "../../../components/SmallListt";
import perguntas from "../../../utils/perguntas";
import quizzes from "../../../utils/quizzes";

function Home() {
  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px]">
      <div className="flex gap-6">
        <Avatar />
        <div>
          <h1 className="text-4xl font-bold">Usuário da Silva</h1>
          <h2 className="text-xl font-semibold mt-2">Professor - Universidade Federal do Ceará</h2>
          <div className="flex gap-12 mt-5">
            <Link to="/perfil"><Button button_style="secondary" label="Visualizar Perfil" /></Link>
            <Link to="/professor/visualizar-turmas"><Button button_style="secondary" label="Visualizar Turmas" /></Link>
          </div>
        </div>
      </div>
      <div className="flex gap-12 mt-24">
        <div>
          <h2 className="text-xl font-semibold mt-2">Banco de Perguntas</h2>
          <SmallList type="perguntas" data={perguntas} action="duplicar" />
          <div className="flex justify-center">
            <Link to="/professor/adicionar-pergunta">
              <Button label="Adicionar Pergunta" button_style="primary" />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-2">Banco de Quizzes</h2>
          <SmallList type="quizzes" data={quizzes} />
          <div className="flex justify-center">
            <Link to="/professor/adicionar-quiz">
              <Button label="Adicionar Quiz" button_style="primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;