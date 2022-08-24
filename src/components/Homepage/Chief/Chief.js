import style from'./Chief.module.css'

const Chief  = (props) => {
    return (
        <div>
          <h1 className={style.title}>Our chefs</h1>
          <figure>
            <img className={style.img} src={ props.item.img }/>
            <figcaption className={style.figcaption}>
            { props.item.name }
            </figcaption>
          </figure>
          <p className={style.description}>{ props.item.description }</p>
        </div>
    );
}

export default Chief