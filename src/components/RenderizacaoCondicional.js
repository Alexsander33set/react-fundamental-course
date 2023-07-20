// dá para pegar como (props) e chamar como props.x, mas...
// Da forma que está sendo chamada, ela está desistruturada, só chamar x
const RenderizacaoCondicional = ({x}) => {
  return(
    <> Caso verdadeiro ele mostra:
      {x >= 5 && 
    
        <>
          <p>isso...</p>
        </>
      }
      Mas com If de uma linha dá para mostrar:
      <p>{!x ? 'Isso caso seja false' : 'isso caso seja true'}</p> 
    </>
  )
}

export default RenderizacaoCondicional