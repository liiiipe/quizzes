import Head from "next/head";
import { useRouter } from "next/router";
import Avatar from "../../../../components/avatar";
import ButtonSecondary from "../../../../components/buttons/button-secondary";

function EditarPerfil() {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Quizzes - Editar Perfil Aluno</title>
        <meta name="description" content="Edite seu perfil." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-between gap-5 pt-[200px] text-sm box">
        <Avatar upload />
        <div className="flex flex-col gap-2">
          <label>Nome:</label>
          <input />
        </div>
        <div className="flex flex-col gap-2">
          <label>Instituição:</label>
          <input />
        </div>
        <div className="flex flex-col gap-2">
          <label>Descrição:</label>
          <input />
        </div>
        <div className="flex gap-12 pt-10">
          <ButtonSecondary onClick={() => router.back()}>Voltar</ButtonSecondary>

          <ButtonSecondary>Salvar</ButtonSecondary>
        </div>
      </div>
    </>
  );
}

export default EditarPerfil;
