import { Stack } from "@mui/material";
import React from "react";

import { categories } from "../../utils/constants";

const Sidebar = ({ activeCategory, setActiveCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setActiveCategory(category.name)}
          style={{
            backgroundColor: category.name === activeCategory && "red",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === activeCategory ? "white" : "red",
              marginRight: "12px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === activeCategory ? "1" : "0.7" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
