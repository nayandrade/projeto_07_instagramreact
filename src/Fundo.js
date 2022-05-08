export default function Fundo(props) {
    return (
      <div class="fundo">
        <div class="acoes">
            <div>
              <span class={props.isLiked}>
                <ion-icon name={props.name} onClick={props.data}></ion-icon>
              </span>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
  
          <div class="curtidas">
            <img src={props.likedImg} />
            <div class="texto">
              Curtido por <strong>{props.liked}</strong> e <strong>outras {props.likes} pessoas</strong>
            </div>
          </div>
        </div>
    )
  }