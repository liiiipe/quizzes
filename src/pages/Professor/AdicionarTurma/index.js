import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../../components/Alert";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

function AdicionarTurma() {
  const [viewAlert, setViewAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [turma, setTurma] = useState("");
  const [codigo, setCodigo] = useState("");
  const [horarios, setHorarios] = useState("");
  const [descricao, setDescricao] = useState("");

  function criarTurma() {
    if (turma && codigo && horarios && descricao) {
      setTypeAlert("success");
      setTurma("");
      setCodigo("");
      setHorarios("");
      setDescricao("");
    }
    else {
      setTypeAlert("error");
    }
    setViewAlert(true);
  }

  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px]">
      <h1 className="text-3xl font-bold">Cadastrar Turma</h1>

      <div className="flex flex-col gap-2">
        <label>Turma:</label>
        <Input value={turma} setValue={setTurma} />
      </div>
      <div className="flex flex-col gap-2">
        <label>Código:</label>
        <Input value={codigo} setValue={setCodigo} />
      </div>
      <div className="flex flex-col gap-2">
        <label>Horários:</label>
        <Input value={horarios} setValue={setHorarios} />
      </div><div className="flex flex-col gap-2">
        <label>Descrição:</label>
        <Input value={descricao} setValue={setDescricao} />
      </div>
      <div className="flex gap-12 pt-10">
        <Link to="/professor/visualizar-turmas"><Button button_style="secondary" label="Voltar" /></Link>
        <Button button_style="primary" label="Criar" onClick={() => criarTurma()} />
      </div>

      {
        viewAlert &&
        <Alert
          descricao={typeAlert === "success" ? "Uma nova Turma acaba de ser criada!" : "A Turma não pôde de ser criada, preencha todos os campos!"}
          onClick={() => setViewAlert(false)}
          typeAlert={typeAlert}
        />
      }
    </div>
  )
}

export default AdicionarTurma;