import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import quizzes from "../../../utils/quizzes";
import perguntasList from "../../../utils/perguntas";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function ResponderQuiz() {
  let { id } = useParams();
  const [quiz] = useState(quizzes[parseInt(id - 1)]);
  const [perguntas] = useState(perguntasList);
  const [progresso, setProgresso] = useState(0);
  const [tempo, setTempo] = useState({
    minutos: perguntas.reduce((previousValue, currentValue) => previousValue + currentValue.tempo, 0),
    segundos: 0
  });

  const [opcaoChecked, setOpcaoChecked] = useState(perguntas[0].resposta);
  const [emEspera, setEmEspera] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  function iniciar() {
    setEmEspera(true);
    let countDownDate = new Date().getTime() + tempo.minutos * 60 * 1000;
    let x = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTempo({
        minutos: minutes,
        segundos: seconds
      })

      if (distance < 0) {
        setTempo({
          minutos: 0,
          segundos: 0
        })
        setEmEspera(false);
        setFinalizado(true);
        clearInterval(x);
      }
    }, 1000);
  }

  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px] relative">
      <p className="absolute right-96 font-bold text-3xl bg-emerald-100 p-3 rounded-2xl">{finalizado ? "00:00" : `${tempo.minutos < 10 ? "0" : "" }${tempo.minutos}:${tempo.segundos}${tempo.segundos < 10 ? "0" : "" }` } </p>
      <h1 className="text-3xl font-bold">{quiz.titulo}</h1>
      <h2 className="text-base ">{quiz.descricao}</h2>
      <div className="text-sm font-bold bg-[#B8B8B8] w-fit py-1 px-3 rounded-full">{perguntas[progresso].categoria}</div>
      <div className="w-[1150px]">
        <div className="flex flex-col gap-2 ">
          <label>Pergunta:</label>
          <Input width="w-full" value={perguntas[progresso].titulo} disabled />
        </div>
        <div class="flex items-center mt-7 mb-4 gap-3">
          <input checked={opcaoChecked === 1} id="default-radio-1" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setOpcaoChecked(1)} />
          <label htmlFor="default-radio-1">{perguntas[progresso].opcoes[0]}</label>
        </div>
        <div class="flex items-center gap-3">
          <input checked={opcaoChecked === 2} id="default-radio-2" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setOpcaoChecked(2)} />
          <label htmlFor="default-radio-2">{perguntas[progresso].opcoes[1]}</label>
        </div>
        <div class="flex items-center mt-4 mb-4 gap-3">
          <input checked={opcaoChecked === 3} id="default-radio-3" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setOpcaoChecked(3)} />
          <label htmlFor="default-radio-3">{perguntas[progresso].opcoes[2]}</label>
        </div>
        <div class="flex items-center gap-3">
          <input checked={opcaoChecked === 4} id="default-radio-4" type="radio" value="" name="default-radio" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setOpcaoChecked(4)} />
          <label htmlFor="default-radio-4">{perguntas[progresso].opcoes[3]}</label>
        </div>
      </div>
      <div className="font-bold mt-12">
        {progresso + 1} / {perguntas.length}
      </div>
      {
        !finalizado ?
          emEspera ?
            <div className="flex gap-12 mt-5">
              <Button button_style="secondary" label="Voltar" onClick={() => {
                if (progresso - 1 >= 0) {
                  setProgresso(progresso - 1)
                }
              }} />
              <Button button_style="primary" label="Próximo" onClick={() => {
                if (progresso + 1 < perguntas.length) {
                  setProgresso(progresso + 1)
                }
                if (progresso + 1 === perguntas.length) {
                  setFinalizado(true);
                }
              }} />
            </div> :
            <div className="flex gap-12 mt-5">
              <Button button_style="primary" label="Começar" onClick={() => iniciar()} />
            </div>
            : 
            <div className="flex gap-12 mt-5 flex-col justify-center">
              <p className="text-center font-bold">Quiz finalizado!</p>
              <p className="text-center font-bold">Você acertou 0 perguntas de {perguntas.length}.</p>
              <Link to="/aluno/home"><Button button_style="primary" label="Ir para Home" /></Link>
            </div>
      }
    </div>
  )
}

export default ResponderQuiz;