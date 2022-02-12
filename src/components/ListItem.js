function ListItem() {
  return (
    <div>
      <a href={`/recipes/${item.id}`}>
        <li key={item.id} style={{ display: "flex" }}>
          <img src={item.image_url} style={{ width: "100px" }}></img>
          <h2>{item.name}</h2>
          {/* <p>{item.description}</p> */}
        </li>
      </a>
    </div>
  );
}

export default ListItem;
