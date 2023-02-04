import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
//import { signIn, signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import ButtonTertiary from "../components/buttons/button-tertiary";

// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Quizzes</title>
        <meta name="description" content="Crie seus quizzes, e compartilhe." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
        Crie, compartilhe e responda quizzes!
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="criar-quiz"
        >
          <h3 className="text-2xl font-bold">Criar Quiz →</h3>
          <div className="text-lg">
            Crie seu quiz, e compartilhe com quem quiser.
          </div>
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="responder-quiz"
        >
          <h3 className="text-2xl font-bold">Responder Quiz →</h3>
          <div className="text-lg">
            Responda a um quiz, inserindo o código de acesso.
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-1xl text-center text-white">
          {/* {hello.data ? hello.data.greeting : "Loading tRPC query..."} */}
          Faça login, ou crie uma conta para salvar, obter estatísticas e
          criar/participar de turmas.
        </p>
        <div className="mt-5 flex flex-col gap-5">
          <ButtonTertiary onClick={() => signIn()}>Login</ButtonTertiary>
          <ButtonTertiary>Cadastrar</ButtonTertiary>
        </div>
      </div>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
