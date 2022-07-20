import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alert from "../../../components/Alert";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import perguntas from "../../../utils/perguntas";

function AdicionarPergunta() {
  let { idDuplicar } = useParams();
  const [perguntaDuplicar] = useState(perguntas[parseInt(idDuplicar - 1)]);

  const [viewAlert, setViewAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [pergunta, setPergunta] = useState(perguntaDuplicar?.titulo);
  const [categoria, setCategotia] = useState(perguntaDuplicar?.categoria);
  const [tempo, setTempo] = useState(perguntaDuplicar?.tempo);

  const [opcao1, setOpcao1] = useState(perguntaDuplicar?.opcoes[0]);
  const [opcao2, setOpcao2] = useState(perguntaDuplicar?.opcoes[1]);
  const [opcao3, setOpcao3] = useState(perguntaDuplicar?.opcoes[2]);
  const [opcao4, setOpcao4] = useState(perguntaDuplicar?.opcoes[3]);
  const [opcaoChecked, setOpcaoChecked] = useState(perguntaDuplicar?.resposta !== undefined ? perguntaDuplicar.resposta : 1);

  function criarPergunta() {
    if (pergunta && categoria && tempo && opcao1 && opcao2 && opcao3 && opcao4) {
      setTypeAlert("success");
      setPergunta("");
      setCategotia("");
      setTempo("");
      setOpcao1("");
      setOpcao2("");
      setOpcao3("");
      setOpcao4("");
    }
    else {
      setTypeAlert("error");
    }
    setViewAlert(true);
  }

  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px]">
      <h1 className="text-3xl font-bold">Criar Pergunta</h1>
      <div className="w-96">
        <div className="flex flex-col gap-2">
          <label>Pergunta:</label>
          <Input width="w-full" value={pergunta} setValue={setPergunta} />
        </div>
        <div class="flex items-center mt-7 mb-4 gap-3">
          <input checked={opcaoChecked === 1} id="default-radio-1" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setOpcaoChecked(1)}/>
          <input className="bg-slate-100 p-1" type="text" placeholder="Adicionar opção 1" value={opcao1} onChange={(e) => setOpcao1(e.target.value)}/>
        </div>
        <div class="flex items-center gap-3">
          <input checked={opcaoChecked === 2} id="default-radio-2" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setOpcaoChecked(2)}/>
          <input className="bg-slate-100 p-1" type="text" placeholder="Adicionar opção 2" value={opcao2} onChange={(e) => setOpcao2(e.target.value)}/>
        </div>
        <div class="flex items-center mt-4 mb-4 gap-3">
          <input checked={opcaoChecked === 3} id="default-radio-3" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setOpcaoChecked(3)}/>
          <input className="bg-slate-100 p-1" type="text" placeholder="Adicionar opção 3" value={opcao3} onChange={(e) => setOpcao3(e.target.value)}/>
        </div>
        <div class="flex items-center gap-3">
          <input checked={opcaoChecked === 4} id="default-radio-4" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setOpcaoChecked(4)}/>
          <input className="bg-slate-100 p-1" type="text" placeholder="Adicionar opção 4" value={opcao4}onChange={(e) => setOpcao4(e.target.value)}/>
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <label>Categoria:</label>
          <Input width="w-full"  value={categoria} setValue={setCategotia} />
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <label>Tempo para Resposta (minutos):</label>
          <Input width="w-full" value={tempo} setValue={setTempo} type="number" />
        </div>
      </div>
      <div className="flex gap-12 mt-5">
        <Link to="/professor/home"><Button button_style="secondary" label="Voltar" /></Link>
        <Button button_style="primary" label="Criar" onClick={() => criarPergunta()} />
      </div>
      {
        viewAlert &&
        <Alert
          descricao={typeAlert === "success" ? "Uma nova pergunta acaba de ser criada!" : "A pergunta não pôde de ser criada, preencha todos os campos!"}
          onClick={() => setViewAlert(false)}
          typeAlert={typeAlert}
        />
      }
    </div>
  )
}

export default AdicionarPergunta;