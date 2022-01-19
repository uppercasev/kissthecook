import { TextField } from '@mui/material';

function SearchBox() {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search recipes"
        variant="outlined"
      />
    </div>
  );
}

export default SearchBox;
