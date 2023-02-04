import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Avatar from "../../components/avatar";
import ButtonSecondary from "../../components/buttons/button-secondary";

const HomeAluno: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Quizzes - Home Aluno</title>
        <meta name="description" content="Responda quizzes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!sessionData ? (
        <div>Carregando</div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-5 pt-[80px]">
          <div className="box flex gap-6 rounded-2xl">
            <Avatar src={sessionData.user?.image} />
            <div>
              <h1 className="text-4xl font-bold">{sessionData.user?.name}</h1>
              <h2 className="mt-2 text-xl font-semibold">
                Identificador: {sessionData.user?.id}
              </h2>
              <div className="mt-5 flex gap-12">
                <Link href="aluno/perfil">
                  <ButtonSecondary>Visualizar Perfil</ButtonSecondary>
                </Link>
                <Link href="aluno/visualizar-turmas">
                  <ButtonSecondary>Visualizar Turmas</ButtonSecondary>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-24 flex">
            <div>
              <h2 className="mt-2 text-xl font-semibold">
                Quizzes Para Responder
              </h2>
              {/* <SmallList type="quizzes" data={quizzes} page="aluno" /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeAluno;
