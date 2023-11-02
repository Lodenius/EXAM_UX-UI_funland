import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import style from './Styling/Games.module.scss';

// Imgs
import skeeball from '../assets/games/skeeball.jpg'
import whack from '../assets/games/woody.jpg'
import canAlley from '../assets/games/can-alley.jpg'

function Games() {
    const aboutGameOne = "It might look simple - but it's definitely harder than you think. The different holes give different amounts of points and here you really need to have a sense of the ball to get high scores."
    const aboutGameTwo = "Hit on the rodents emerging from holes with a mallet. Watch out, it goes faster and faster. Excellent for those of you who have aggressions that you want to get rid of!!!! Be aggressive, be-e aggressive!"
    const aboutGameThree = "Scoop as many balls as possible into the trash cans. Time is running out, the lids are opened and closed at different rates. It's good if you're fast and fairly accurate. A plus if you have big hands!"

    return (
        <>        
            <Header />
            <h2> Our fun games </h2>
            <main>
                <InfoCard 
                    title="Kill-the-rodent"
                    infoText={aboutGameTwo}
                    url={<img className={style.image} src={whack}></img>}
                    />
                <InfoCard 
                    title="Be a cleaner"
                    infoText={aboutGameThree}
                    url={<img className={style.image} src={canAlley}></img>}
                    isReversed={true}
                />
                <InfoCard 
                    title="Old-ball-roll"
                    infoText={aboutGameOne}
                    url={<img className={style.image} src={skeeball}></img>}
                />
            </main>
        </>
    )
}

export default Games;