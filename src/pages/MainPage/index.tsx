import Header from "@/components/Header";
import Preview from "src/modules/Preview";
import Description from "@/modules/Description";
import FirstDay from "@/modules/FirstDay";
import SecondDay from "@/modules/SecondDay";
import Waiting from "@/modules/Waitings";
import ThirdDay from "@/modules/ThirdDay";

const Main = () => {
    return (
        <div>
            <Header/>
            <Preview/>
            <Description/>
            <FirstDay/>
            <SecondDay/>
            <Waiting/>
            <ThirdDay/>
        </div>

    )
}

export default Main;