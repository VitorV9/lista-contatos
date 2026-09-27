import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined && termo.length > 0) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }
    return contatosFiltrados
  }

  const contatos = filtraContatos()
  const mensagem =
    termo !== undefined && termo.length > 0
      ? `${contatos.length} contato(s) encontrado(s) como: "${termo}"`
      : `${contatos.length} contato(s) na agenda`

  return (
    <MainContainer>
      <Titulo as={'p'}>{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
