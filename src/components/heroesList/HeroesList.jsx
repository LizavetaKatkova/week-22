import './HeroesList.css';
import Hero from '../hero/Hero.jsx';
import bat from '../../images/bat.jpeg';
import sup from '../../images/sup.jpeg';
import iron from '../../images/iron.jpeg';
import spi from '../../images/spi.jpeg';
import cap from '../../images/cap.jpeg';
import hulk from '../../images/hulk.jpeg';
import pool from '../../images/pool.jpeg';
import tor from '../../images/tor.jpeg';
import ww from '../../images/ww.jpeg';
import wid from '../../images/wid.jpeg';

function HeroesList() {
    return <div className="heroesList">
        <Hero
        heroName="Бэтмен"
        universe="DC Comics"
        alterego="Брюс Уэйн"
        occupation="борец с преступностью, филантроп, миллиардер"
        friends="Робин, Бэтгерл"
        superpowers="интеллект, обширные познания, знания боевых искусств, ловкость"
        img={bat}
        //info="По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
        />
         <Hero
        heroName="Супермен"
        universe="DC Comics"
        alterego="Кларк Кент"
        occupation="борец за справедливость"
        friends="собака Крипто"
        superpowers="непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм"
        img={sup}
        />
        <Hero
        heroName="Железный человек"
        universe="Marvel Comics"
        alterego="Тони Старк"
        occupation="гений, миллиардер, плейбой, филантроп"
        friends="Мстители"
        superpowers="высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
        img={iron}
        />
         <Hero
        heroName="Спайдер-мен/Человек-паук"
        universe="Marvel Comics"
        alterego="Питер Паркер"
        occupation="борец за справедливость, студент, фотограф"
        friends="Мстители, Фантастическая четверка, Люди Икс"
        superpowers="сверхчеловеческие рефлексы, «паучье чутьё», способность прилепляться к твердым поверхностям, производство паутины"
        img={spi}
        />
          <Hero
        heroName="Капитан Америка"
        universe="Marvel Comics"
        alterego="Стивен Роджерс"
        occupation="супер-солдат"
        friends="Мстители"
        superpowers="сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
        img={cap}
        />
         <Hero
        heroName="Тор"
        universe="Marvel Comics"
        alterego="нет; полное имя — Тор Одинсон"
        occupation="сборец за справедливость, скандинавский бог"
        friends="Мстители"
        superpowers="всё, что может бог, плюс молот Мьелнир"
        img={tor}
        />
         <Hero
        heroName="Халк"
        universe="Marvel Comics"
        alterego="Брюс Беннер"
        occupation="супергерой, борец за справедливость, ученый-биохимик"
        friends="Мстители"
        superpowers="сверхчеловеческая сила и скорость, выносливость, полёт"
        img={hulk}
        />
         <Hero
        heroName="Чудо-женщина"
        universe="DC Comics"
        alterego="Диана Принс"
        occupation="супергероиня, секретарь-референт"
        friends="Лига Справедливости, Бэтмен, Супермен"
        superpowers="сверхчеловеческая сила искорость, выносливость, полёт"
        img={ww}
        />
        <Hero
        heroName="Черная вдова"
        universe="Marvel Comics"
        alterego="Наташа Романофф"
        occupation="супергероиня, шпионка"
        friends="Мстители"
        superpowers="пик человеческого физического потенциала, замедленное старение, знание многих языков"
        img={wid}
        />
         <Hero
        heroName="Дэдпул"
        universe="Marvel Comics"
        alterego="Уэйд Уинстон Уилсон"
        occupation="антигерой, наёмник"
        friends="частично Мстители, Человек-паук, Росомаха"
        superpowers="высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
        img={pool}
        />
    </div>
}

export default HeroesList;