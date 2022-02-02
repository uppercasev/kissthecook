import Title from "./Title";
import SearchBox from '../SearchBox';
import NavBar from "../NavBar";

function TitleBar() {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", background: "grey", overflow: "hidden", width: "100%" }}>
            <Title />
            <SearchBox />
        </div>
    )
}

export default TitleBar;