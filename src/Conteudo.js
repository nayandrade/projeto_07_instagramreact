export default function Conteudo(props) {
    return (
      <div class="conteudo">
        <img src={props.src} onClick={props.data}/>
      </div>
    )
  }