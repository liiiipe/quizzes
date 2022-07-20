import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Perfil from './pages/Perfil';
import EditarPerfil from './pages/Perfil/EditarPerfil';
import HomeProfessor from './pages/Professor/Home';
import AdicionarPergunta from './pages/Professor/AdicionarPergunta';
import AdicionarQuiz from './pages/Professor/AdicionarQuiz';
import VisualizarTurmasProfessor from './pages/Professor/VisualizarTurmas';
import AdicionarTurma from './pages/Professor/AdicionarTurma';
import VisualizarTurmaProfessor from './pages/Professor/VisualizarTurmas/VisualizarTurma';
import AdicionarQuizTurma from './pages/Professor/VisualizarTurmas/VisualizarTurma/AdicionarQuizTurma';
import VisualizarQuizProfessor from './pages/Professor/VisualizarQuiz';

import HomeAluno from './pages/Aluno/Home';
import VisualizarTurmasAluno from './pages/Aluno/VisualizarTurmas';
import VisualizarTurmaAluno from './pages/Aluno/VisualizarTurmas/VisualizarTurma';
import VisualizarQuizAluno from './pages/Aluno/VisualizarTurmas/VisualizarTurma/VisualizarQuiz';
import ResponderQuiz from './pages/Aluno/ResponderQuiz';

function App() {
  return (
    <div className="bg-image-initial">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfil/editar" element={<EditarPerfil />} />
          <Route path="/professor/home" element={<HomeProfessor />} />
          <Route path="/professor/adicionar-pergunta" element={<AdicionarPergunta />} />
          <Route path="/professor/adicionar-pergunta/:idDuplicar" element={<AdicionarPergunta />} />
          <Route path="/professor/adicionar-quiz" element={<AdicionarQuiz />} />
          <Route path="/professor/visualizar-turmas" element={<VisualizarTurmasProfessor />} />
          <Route path="/professor/adicionar-turma" element={<AdicionarTurma />} />
          <Route path="/professor/visualizar-turma/:id" element={<VisualizarTurmaProfessor />} />
          <Route path="/professor/visualizar-turma/:id/adicionar-quiz-a-turma" element={<AdicionarQuizTurma />} />
          <Route path="/professor/visualizar-quiz/:id" element={<VisualizarQuizProfessor />} />

          <Route path="/aluno/home" element={<HomeAluno />} />
          <Route path="/aluno/visualizar-turmas" element={<VisualizarTurmasAluno />} />
          <Route path="/aluno/visualizar-turma/:id" element={<VisualizarTurmaAluno />} />
          <Route path="/aluno/visualizar-quiz/:id" element={<VisualizarQuizAluno />} />
          <Route path="/aluno/responder-quiz/:id" element={<ResponderQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
