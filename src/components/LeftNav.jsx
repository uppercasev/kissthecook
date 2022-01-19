import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function LeftNav() {
  return (
    <div style={{borderColor: "red"}}>
      <List sx={{ width: "200%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText primary="SAVOURY" secondary="32 recipes" />
        </ListItem>
        <ListItem>
          <ListItemText primary="SWEET" secondary="16 recipes" />
        </ListItem>
        <ListItem>
          <ListItemText primary="PET" secondary="5 recipes" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Shopping List" secondary="3 items" />
        </ListItem>
      </List>
    </div>
  );
}
