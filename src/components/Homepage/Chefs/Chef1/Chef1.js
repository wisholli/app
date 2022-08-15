import style from'./Chef1.module.css'

const Chef1 = () => {
    return (
        <div>
          <h1 className={style.title}>Our chefs</h1>
          <figure>
            <img className={style.img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Funiversal-championship-wrestling-league%2Fimages%2F6%2F6f%2FGordon_Ramsay.jpg%2Frevision%2Flatest%3Fcb%3D20180923094909&f=1&nofb=1'/>
            <figcaption className={style.figcaption}>
              Gordon Ramsay
            </figcaption>
          </figure>
          <p className={style.description}> Gordon Ramsay is the most popular chef in the world. He is a British chef, restaurateur, television personality and writer.</p>
        </div>
    );
}

export default Chef1