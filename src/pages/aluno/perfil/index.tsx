import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Avatar from "../../../components/avatar";
import ButtonSecondary from "../../../components/buttons/button-secondary";

function Perfil() {
  const { data: sessionData } = useSession();
  if (!sessionData) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <Head>
        <title>Quizzes - Perfil Aluno</title>
        <meta name="description" content="Visualize o perfil do aluno." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="box flex flex-col items-center justify-between gap-5 text-sm ">
        <Avatar src={sessionData.user?.image} />
        <h1 className="text-4xl font-bold">{sessionData.user?.name}</h1>
        <h2 className="pt-6 font-medium">
          Identificador: {sessionData.user?.id}
        </h2>
        <p className="italic">
          “Ensinar não é transferir conhecimento, mas criar as possibilidades
          para a sua própria produção ou a sua construção.”
        </p>
        <div className="flex gap-12 pt-10">
          <Link href="perfil/editar">
            <ButtonSecondary>Editar Perfil</ButtonSecondary>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Perfil;
