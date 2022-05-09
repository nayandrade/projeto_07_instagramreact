import React from 'react';
import Topo from './Topo';
import Fundo from './Fundo';

export default function Posts () {

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
            
              <Fundo
                src={item.src} 
                likedImg={item.likedImg}
                liked={item.liked}
                likes={item.likes}                  
              />            
          </div>
        ))}
        </div>
    )
}