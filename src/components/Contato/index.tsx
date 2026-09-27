import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contato'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const [nomeEditado, setNomeEditado] = useState('')
  const [emailEditado, setEmailEditado] = useState('')
  const [telefoneEditado, setTelefoneEditado] = useState('')

  useEffect(() => {
    if (nome.length > 0) {
      setNomeEditado(nome)
      setEmailEditado(email)
      setTelefoneEditado(telefone)
    }
  }, [nome, email, telefone])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeEditado(nome)
    setEmailEditado(email)
    setTelefoneEditado(telefone)
  }

  return (
    <S.Card>
      {/* Campos de texto dinâmicos para a edição */}
      <S.Descricao
        disabled={!estaEditando}
        value={nomeEditado}
        onChange={(e) => setNomeEditado(e.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={emailEditado}
        onChange={(e) => setEmailEditado(e.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={telefoneEditado}
        onChange={(e) => setTelefoneEditado(e.target.value)}
      />

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome: nomeEditado,
                    email: emailEditado,
                    telefone: telefoneEditado
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
