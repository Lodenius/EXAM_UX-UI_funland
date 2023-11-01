import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";

function Rides() {
    const aboutRideOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const aboutRideTwo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const aboutRideThree = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    return (
        <>        
            <Header />
            <main>
                <InfoCard 
                title="Ride One"
                infoText={aboutRideOne}/>

                <InfoCard 
                title="Ride Two"
                infoText={aboutRideTwo}
                isReversed={true}/>
                
                <InfoCard 
                title="Ride Three"
                infoText={aboutRideThree}/>
            </main>
        </>
    )
}

export default Rides;