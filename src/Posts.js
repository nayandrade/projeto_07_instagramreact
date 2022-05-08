import React from 'react';


export default function Posts () {

  const [liked, setLiked] = React.useState("");
  const [name, setName] = React.useState("heart-outline");
    function isLiked() {
        !liked ? setLiked("liked") : setLiked("");
        !liked ? setName("heart") : setName("heart-outline");

    }
    function isLikedMain() {
        setLiked("liked");
        setName("heart");
    }

    const items = [{
        userImg: "assets/img/meowed.svg",
        user: "meowed",
        src: "assets/img/gato-telefone.svg",
        likedImg: "assets/img/respondeai.svg",
        liked: "respondeai",
        likes: 101.523,
    }, {
        userImg: "assets/img/barked.svg",
        user: "barked",
        src: "assets/img/dog.svg",
        likedImg: "assets/img/adorable_animals.svg",
        liked: "adorable_animals",
        likes: 99.159,
    }
    ]
    return (
        <div class="posts"> 
        {items.map((item) => (
            <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={item.userImg}/>
                {item.user}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={item.src} onClick={() => isLikedMain()}/>
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
                <img src={item.likedImg} />
                <div class="texto">
                  Curtido por <strong>{item.liked}</strong> e <strong>outras {item.likes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>        
    )
}