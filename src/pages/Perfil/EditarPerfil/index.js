import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

function EditarPerfil() {
  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[200px] text-sm">
      <Avatar upload />
      <div className="flex flex-col gap-2">
        <label>Nome:</label>
        <Input />
      </div>
      <div className="flex flex-col gap-2">
        <label>Instituição:</label>
        <Input />
      </div>
      <div className="flex flex-col gap-2">
        <label>Descrição:</label>
        <Input />
      </div>
      <div className="flex gap-12 pt-10">
        <Link to="/perfil"><Button button_style="secondary" label="Voltar" /></Link>
        <Link to="/perfil"><Button button_style="primary" label="Salvar" /></Link>
      </div>
    </div>
  );
}

export default EditarPerfil;