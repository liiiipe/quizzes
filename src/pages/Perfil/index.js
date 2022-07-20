import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";

function Perfil() {
  return (
    <div className="flex items-center justify-between flex-col gap-5 pt-[200px] text-sm">
      <Avatar />
      <h1 className="text-4xl font-bold">Usuário da Silva</h1>
      <h2 className="pt-6 font-medium">Universidade Federal do Ceará</h2>
      <p className="italic">“Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção.”</p>
      <div className="flex gap-12 pt-10">
        <Link to="editar"><Button button_style="primary" label="Editar Perfil" /></Link>
      </div>
    </div>
  );
}

export default Perfil;