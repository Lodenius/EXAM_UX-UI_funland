import { motion } from "framer-motion";
import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import style from './Games.module.scss';

function Games() {
    const aboutGameOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const aboutGameTwo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const aboutGameThree = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    return (
        <>        
            <Header />
            <main>
                <InfoCard 
                title="Game One"
                infoText={aboutGameOne}/>

                <InfoCard 
                title="Game Two"
                infoText={aboutGameTwo}
                isReversed={true}/>
                
                <InfoCard 
                title="Game Three"
                infoText={aboutGameThree}/>
            </main>
        </>
    )
}

export default Games;