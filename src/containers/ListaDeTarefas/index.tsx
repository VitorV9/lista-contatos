import Tarefa from '../../components/Tarefa'

const ListaDeTarefas = () => (
  <main>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo; </p>
    <ul>
      <li>
        <Tarefa />
        <Tarefa />
        <Tarefa />
        <Tarefa />
        <Tarefa />
      </li>
    </ul>
  </main>
)

export default ListaDeTarefas
