import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";

function Registrar() {
  return (
    <div>
      <div className="flex items-center justify-between flex-col gap-5 pt-[200px] text-sm">
        <h1 className="text-4xl font-bold">Crie sua conta</h1>
        <div className="flex flex-col gap-2">
          <label>Nome:</label>
          <Input />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email:</label>
          <Input type="email"/>
        </div>
        <div className="flex flex-col gap-2">
          <label>Matrícula (Aluno) / Instituição (Professor):</label>
          <Input />
        </div>
        <div className="flex flex-col gap-2">
          <label>Senha:</label>
          <Input type="password" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Confirmar senha:</label>
          <Input type="password" />
        </div>
        <Button label="Registrar" type="submit" button_style="primary" width="200px"/>
      </div>
    </div>
  );
}

export default Registrar;