function Suggestion(props) {
    return (        
            <div class="usuario">
                <img src={props.src} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.alt}</div>
                </div>
            </div>        
    );
  }

export default function Sugestoes () {
    const items = [{
        src: "assets/img/bad.vibes.memes.svg",
        name: "bad.vibes.memes",
        alt: "Segue você",
    },
    {
        src: "assets/img/chibirdart.svg",
        name: "chibirdart",
        alt: "Segue você",
    },
    {
        src: "assets/img/razoesparaacreditar.svg",
        name: "razoesparaacreditar",
        alt: "Novo no Instagram",
    },
    {
        src: "assets/img/adorable_animals.svg",
        name: "adorable_animals",
        alt: "Segue você",
    },
    {
        src: "assets/img/smallcutecats.svg",
        name: "smallcutecats",
        alt: "Segue você",
    },
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {items.map((item) => (
                <div class="sugestao">
                    <Suggestion 
                    src={item.src}
                    name={item.name}
                    alt={item.alt}                
                    />
                    <div class="seguir">Seguir</div>
                </div>
            ))}

        </div>
    )
}