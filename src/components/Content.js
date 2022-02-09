import Display from "./Display";
import LeftMenu from "./LeftMenu";

export default function Content({ recipes }) {
    return (
    <div style={{ display: "flex" }}>
      <LeftMenu recipes={recipes}/>
      <Display />
    </div>
  );
}
