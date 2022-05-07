export default function Stories () {
    const items = [{
        src: "assets/img/9gag.svg",
        user: "9gag"
    }, {
        src: "assets/img/meowed.svg",
        user: "meowed"
    }, {
        src: "assets/img/barked.svg",
        user: "barked"
    }, {
        src: "assets/img/nathanwpylestrangeplanet.svg",
        user: "nathanwpylestrangeplanet"
    }, {
        src: "assets/img/wawawicomics.svg",
        user: "wawawicomics"
    }, {
        src: "assets/img/respondeai.svg",
        user: "respondeai"
    }, {
        src: "assets/img/filomoderna.svg",
        user: "filomoderna"
    }, {
        src: "assets/img/memeriagourmet.svg",
        user: "memeriagourmet"
    }
    ]   

    return ( 
        <div class="stories">
            {items.map((item) => (
                <div class="story">
                    <div class="imagem">
                        <img src={item.src} />
                    </div>
                    <div class="usuario">
                        {item.user}
                    </div>
                </div>
            ))}        
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}