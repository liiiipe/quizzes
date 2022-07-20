import { Link } from 'react-router-dom';
import AnglesRight from '../../utils/icons/AnglesRight'

function Turmas(props) {
  return (
    <div className="mt-2 border-t border-gray-300 bg-indigo-50 rounded-lg">
      {
        props.turmas.map(item =>
          <Link
            to={`${props.page === "aluno" ? `/aluno` : `/professor`}/visualizar-turma/${item.id}`}
            key={item.id}
            className="px-4 py-6 flex flex-col sm:flex-row items-center justify-between cursor-pointer transition-colors duration-300 ease border-b border-gray-300 hover:bg-gray-200 no-underline"
          >
            <div className="mt-2 sm:text-left sm:mt-0 sm:ml-4 flex-1">
              <p className="font-medium">{item.turma}</p>
            </div>
            <div className="mt-2 sm:text-left sm:mt-0 sm:ml-4 flex-1">
              <p className="font-medium text-center">{item.codigo}</p>
            </div>
            <div className="mt-2 sm:text-left sm:mt-0 sm:ml-4 flex-1">
              <p className="font-medium text-center">{item.horario}</p>
            </div>
            <AnglesRight />
          </Link>
        )
      }
    </div>
  )
}

export default Turmas;