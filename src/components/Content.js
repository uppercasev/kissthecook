import Display from "./Display";
import LeftMenu from "./LeftMenu";

export default function Content() {
    return (
    <div style={{ display: "flex" }}>
      <LeftMenu />
      <Display />
    </div>
  );
}
