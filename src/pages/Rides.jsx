import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import style from './Styling/Rides.module.scss';

// Imgs
import eclipse from '../assets/rides/eclipse.jpg'
import kvasten from '../assets/rides/kvasten.jpeg'
import monster from '../assets/rides/monster.jpg'

function Rides() {
    const aboutRideOne = "At 121 meters, the Death Swing is one of the world's tallest swings. With a magical force of attraction, it lifts up all those afraid of heights and swings them around at 70 km per hour high in the air. 910 tons of steel and concrete, 80,000 bolts, 8 meter long chains and a breathtaking view of Stockholm make the Death Swing a sky-rocketing adventure."
    const aboutRideTwo = "Your legs dangle freely in the air as the Red cleaning tool darts past the House of Nightmares and angers the evil troll. Join us and plunge towards the ground to soar above the treetops in the second. Riding a Red cleaning tool is magical!"
    const aboutRideThree = "King of Roller Coasters. During the ride, you fly forward at a speed of 90 km/h, are 34 meters up in the air and are exposed to a whopping 4.5 G-forces - all while hanging below the track with your legs free in the air! You will be thrown up above the ground and, among other things, find yourself upside down four times during the ride and end up in a weightless state several times. You simply do not want to miss this ride!"

    return (
        <>        
            <Header />
            <h2>Our fun rides </h2>
            <main>
                <InfoCard 
                    title="Death Swing"
                    infoText={aboutRideOne}
                    url={<img className={style.image} src={eclipse}></img>}
                />
                <InfoCard 
                    title="Red cleaning tool"
                    infoText={aboutRideTwo}
                    url={<img className={style.image} src={kvasten}></img>}
                    isReversed={true}
                />
                <InfoCard 
                    title="Scary spinner winner"
                    infoText={aboutRideThree}
                    url={<img className={style.image} src={monster}></img>}
                />
            </main>
        </>
    )
}

export default Rides;