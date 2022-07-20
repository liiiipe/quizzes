import { useState } from "react";
import { Link } from "react-router-dom";
import perguntas from "../../utils/perguntas";
import Alert from "../Alert";
import Button from "../Button";
import Input from "../Input";
import SmallList from "../SmallListt";

function QuizProfessor(props) {
  const [perguntasSelecionadas, setPerguntasSelecionadas] = useState([]);
  const [viewAlert, setViewAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [nome, setNome] = useState(props.quiz?.titulo);
  const [descricao, setDescricao] = useState(props.quiz?.descricao);

  function criarQuiz() {
    if (nome && descricao) {
      setTypeAlert("success");
      setNome("");
      setDescricao("");
    }
    else {
      setTypeAlert("error");
    }
    setViewAlert(true);
  }

  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px] relative">
      <h1 className="text-3xl font-bold">{props.action === 'visualizar' ? "Visualizar" : "Criar"} Quiz</h1>
      <div className="w-96">
        <div className="flex flex-col gap-2">
          <label>Nome:</label>
          <Input width="w-full" value={nome} setValue={setNome} disabled={props.action === 'visualizar'} />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label>Descrição:</label>
          <Input width="w-full" value={descricao} setValue={setDescricao} disabled={props.action === 'visualizar'} />
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <h1>{props.action === 'visualizar' ? "" : "Adicionar "}Perguntas:</h1>
        <SmallList type="perguntas" data={perguntas} action={props.action === "visualizar" ? "visualizar" : "add-remove"} />
      </div>

      {
        props.action !== 'visualizar' &&
        <div className="flex gap-12 mt-5">
          <Link to="/professor/home"><Button button_style="secondary" label="Voltar" /></Link>
          <Button button_style="primary" label="Criar" onClick={() => criarQuiz()} />
        </div>
      }

      {
        viewAlert &&
        <Alert
          descricao={typeAlert === "success" ? "Um novo Quiz acaba de ser criado!" : "O Quiz não pôde de ser criado, preencha todos os campos!"}
          onClick={() => setViewAlert(false)}
          typeAlert={typeAlert}
        />
      }
    </div>
  )
}

export default QuizProfessor;