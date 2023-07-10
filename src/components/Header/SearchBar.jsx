import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import lupa from "./img/searchIcon.svg"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
      <TextField
        id="header-search"
        type="search"
        label="Pesquisar produto..."
        style={{backgroundColor: "#F8F8F8"}}
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 500}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{paddingRight:'3px'}}>
              <img src={lupa}/>
            </InputAdornment>
          ),
        }}
      />
  );
}
