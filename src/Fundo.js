import React from 'react';

export default function Fundo(props) {
  
  const [liked, setLiked] = React.useState("");
  const [name, setName] = React.useState("heart-outline");
    function isLiked() {
        !liked ? setLiked("liked") : setLiked("");
        !liked ? setName("heart") : setName("heart-outline");
        console.log('cliquei')
    }
    function isLikedMain() {
      setLiked("liked");
      setName("heart");
  }    

    return (
      <div>
        <div class="conteudo">
          <img src={props.src} onClick={() => isLikedMain()}/>
        </div>
        <div class="fundo">
          <div class="acoes">
              <div>
                <span class={liked}>
                  <ion-icon name={name} onClick={() => isLiked()}></ion-icon>
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
        </div>
    )
  }