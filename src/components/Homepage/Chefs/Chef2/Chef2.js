import style from'./Chef2.module.css'

const Chef2 = () => {
    return (
        <div>
          <figure>
            <img className={style.img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnuvomagazine.scdn2.secure.raxcdn.com%2Fwp-content%2Fuploads%2F2017%2F08%2Fnuvo_jamie_oliver_0168.jpg&f=1&nofb=1'/>
            <figcaption className={style.figcaption}>
              Jamie Oliver
            </figcaption>
          </figure>
          <p className={style.description}>Jamie Oliver is a British chef, restaurateur, and cookbook author. He is known for his casual approach to cuisine, which has led him to front numerous television shows and open many restaurants. </p>
        </div>
    );
}

export default Chef2