import Button from "../../../../../components/Button";
import SmallList from "../../../../../components/SmallListt";
import quizzes from "../../../../../utils/quizzes";

function AdicionarQuizTurma() {
  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[80px] relative">
      <h1 className="text-3xl font-bold">Banco de Quizzes</h1>
      <SmallList type="quizzes" data={quizzes} action="add-remove" />
      <div className="flex mt-1 justify-center">
        <Button button_style="primary" label="Adicionar Quizzes" />
      </div>
    </div>
  )
}

export default AdicionarQuizTurma;