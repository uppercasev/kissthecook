import Title from "./Title";
import SearchBox from './Search';

function TitleBar() {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Title />
            <SearchBox />
        </div>
    )
}

export default TitleBar;