import TitleBar from "./TitleBar";
import LeftNav from "./LeftNav";
import RecipePage from "./RecipePage";

function App() {
  return (
    <div>
      <div style={{ padding: "10px"}}>
        <TitleBar />
      </div>
      <div style={{ display: "flex", padding: "10px" }}>
        <LeftNav />
        <RecipePage />
      </div>
    </div>
  );
}

export default App;
