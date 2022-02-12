function HeroImg({ size }) {
  if (size === "large") {
    return (
      <div>
        <div className="heroImg" style={{ height: "600px" }}>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "40px",
              }}
            >
              A place for all the recipes you love to cook.
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="heroImg" style={{ height: "300px" }}></div>;
  }
}

export default HeroImg;
