import style from './Homepage.module.css'
import Chief from './Chief/Chief';

const Homepage = (props) => {
    let info = props.items.map(info => <Chief item={info}/>)
    return (
        <div>
          <img className={style.img} src='https://assets.epicurious.com/photos/55f726b33c346243461d4928/2:1/w_3769,h_1884,c_limit/09112015_15minute_pastasauce_garlicoilandachovie.jpg'/>  
          <div className='About'>
            <h1 className={style.title}>About restaurant</h1>
            <p className={style.description}>Text</p>
          </div>
          {info}
        </div>
    );
}

export default Homepage