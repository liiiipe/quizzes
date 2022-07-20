import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";

function Login() {
  return (
    <div>
      <div className="flex items-center justify-between flex-col gap-5 pt-[250px] text-sm">
        <h1 className="text-4xl font-bold">Login</h1>
        <div className="flex flex-col gap-2">
          <label>Email:</label>
          <Input type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Senha:</label>
          <Input type="password" />
        </div>
        <Link to="/registrar" className="text-sm underline text-blue-800">Ainda não tem uma conta? Registre-se</Link>
        <Link to="/professor/home"><Button label="Entrar" type="submit" button_style="primary" width="200px"/></Link>
      </div>
    </div>
  );
}

export default Login;