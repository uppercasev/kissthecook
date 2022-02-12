function HeroImgLarge() {
    return (
        <div>
          <div className="heroLarge">
            <div
              style={{
                background: "black",
                width: "100%",
                height: "100px",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: "white",
                  opacity: "1",
                  fontSize: "40px"
                }}
              >
                A place for all the recipes you love to cook.
              </div>
            </div>
          </div>
        </div>
      );
}

export default HeroImgLarge;