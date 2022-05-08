import React from 'react';
import Topo from './Topo';
import Conteudo from './Conteudo';
import Fundo from './Fundo';

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
              <Topo
                userImg={item.userImg}
                user={item.user}
              />

              <Conteudo
              src={item.src}
              data={isLikedMain}              
              />
            
              <Fundo
                isLiked={liked}
                name={name}
                likedImg={item.likedImg}
                liked={item.liked}
                likes={item.likes}
                data={isLiked}   
              />            
          </div>
        ))}
        </div>
    )
}