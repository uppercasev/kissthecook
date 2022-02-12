function ListItem({ item }) {
  return (
      <div style={{display: "flex", height: "220px", alignItems: "center", borderBottomStyle: "solid", borderWidth: "1px", borderColor: "silver"}}>
        <div>
          <img
            src={item.image_url}
            style={{ width: "200px", height: "150px", objectFit: "cover", margin: "10px" }}
          />
        </div>
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      </div>

  );
}

export default ListItem;
