function ListItem({ item }) {
  return (
      <div style={{display: "flex", height: "220px", alignItems: "center", borderBottomStyle: "solid", borderWidth: "1px", borderColor: "silver"}}>
        <a href={`/myrecipes/${item.id}`}>
        <div>
          <img
            src={item.image_url}
            style={{ width: "200px", height: "150px", objectFit: "cover", margin: "10px" }}
          />
        </div></a>
        <div>
        <a href={`/myrecipes/${item.id}`}><h2>{item.name}</h2></a>
          <p>{item.description}</p>
        </div>
      </div>
  );
}

export default ListItem;
