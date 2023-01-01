import { Paper, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => { }}
      sx={{
        borderRadius: 20,
        border: "1px solid gray",
        pl: 2,
        mr: { sm: 5 },
        boxShadow: "none",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value=""
        onChange={() => { }
        }

      />
      <IconButton type="submit"
        sx={{
          p: '10px',
          color: 'red'

        }}>
        <SearchIcon />
      </IconButton>

    </Paper>
  );
};

export default Search;
