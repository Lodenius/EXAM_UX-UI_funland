import Header from "../Components/Header";
import LargeCategory from "../Components/LargeCategory";
import style from './Styling/StartPage.module.scss';

function StartPage() {

    return (
        <>        
            <Header />
            <h2>Welcome to funland!</h2>
            <LargeCategory />
        </>
    )
}

export default StartPage;