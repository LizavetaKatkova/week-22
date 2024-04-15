import './HeroesList.css';
import Hero from '../hero/Hero.jsx';
import data from './data.jsx';

function HeroesList() {
    return <div className="heroesList">
        {
          data.map((item, index) => <Hero key={index} hero = {item.hero} universe={item.universe} alterego={item.alterego} occupation={item.occupation} friends={item.friends} superpowers={item.superpowers} img={item.img}/>)
        }
        
    </div> 
    }

export default HeroesList;