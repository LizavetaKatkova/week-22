import './Hero.css';

function Hero(props) {
    const {heroName, universe, alterego, occupation, friends, superpowers, info, img} = props;
    return <div className="hero">
        <div className="card_top">
        <h2 className='hero__name'>{heroName}</h2>
        <div className='hero__info'>
            <p className="hero__info_universe"><span>Вселенная: </span>{universe}</p>
            <p className="hero__info_alterego"><span>Альтер эго: </span>{alterego}</p>
            <p className="hero__info_occupation"><span>Род деятельности: </span>{occupation}</p>
            <p className="hero__info_friends"><span>Друзья: </span>{friends}</p>
            <p className="hero__info_superpowers"><span>Суперсилы: </span>{superpowers}</p>
        </div>
        </div>
        <div className="card_bottom">
        <img src={img} alt="" className='hero__img'/>
        </div>
    </div>
}

export default Hero;