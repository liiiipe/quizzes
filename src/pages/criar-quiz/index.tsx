import Head from "next/head";
import { useState } from "react";
import ButtonSecondary from "../../components/buttons/button-secondary";
import InputPrimary from "../../components/inputs/input-primary";
import TablePerguntas from "../../components/table-perguntas";
import Image from "next/image";
import OnlineTest from "../../../public/imgs/undraw_online_test_re_kyfx.svg";
import type { Question } from "../../domain/question";


function CriarQuiz() {
  const [questions, setQuestions] = useState<Question[]>([{
    id: "1",
    title: "O que significa HTML?",
    alternatives: [
      {
        content: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representaçãoestruturada de hipermídia e conteúdo baseado em tempo",
        id: "2",
        isAnswer: true  
      }
    ]
  },
  {
    id: "2",
    title: "Pra que server a tag div?",
    alternatives: [
      {
        content: "A tag div serve para alterar o estilo em partes específicas da página e posicionar objetos.",
        id: "2",
        isAnswer: true  
      }
    ]
  }]);

  return (
    <>
      <Head>
        <title>Quizzes - Criar Quiz</title>
        <meta name="description" content="Crie seus quizzes, e compartilhe." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-between w-[1100px] ">
        <div className="w-128 flex flex-col box">
          <h1 className="text-dark text-3xl font-bold text-center mb-6">Criar Quiz</h1>

          <InputPrimary label="Nome:" placeholder="Quiz HTML" />
          <InputPrimary label="Descrição:" placeholder="Um Quiz para testar seus conhecimentos em HTML" />
        </div>
        <Image src={OnlineTest} alt="OnlineTest" width={350} />
      </main>
      <div className="text-dark relative flex flex-col items-center justify-between gap-5 box">
        <div className="mt-2 flex flex-col gap-6 text-center">
          <h1 className="text-2xl font-bold">Perguntas:</h1>
          {questions.length === 0 ? (
            <p className="text-sm italic">
              Nenhuma pergunta adicionada
            </p>
          ) : (
            <TablePerguntas questions={questions} setQuestions={setQuestions}/>
          )}
        </div>

        <div>Tempo de conclusão: 20 min</div>

        <div className="mt-5 flex gap-12">
          <ButtonSecondary onClick={() => console.log("Criar quiz")}>
            Pre-visualizar
          </ButtonSecondary>
          <ButtonSecondary onClick={() => console.log("Criar quiz")}>
            Criar
          </ButtonSecondary>
        </div>

        {/* {viewAlert && (
          <Alert
            descricao={
              typeAlert === "success"
                ? "Um novo Quiz acaba de ser criado!"
                : "O Quiz não pôde de ser criado, preencha todos os campos!"
            }
            onClick={() => setViewAlert(false)}
            typeAlert={typeAlert}
          />
        )} */}
      </div>
    </>
  );
}

export default CriarQuiz;
