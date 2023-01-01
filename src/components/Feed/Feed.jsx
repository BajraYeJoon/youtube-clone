import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Videos from "../Videos/Videos";

import { youtubeAPI } from "../../utils/youtubeAPI";




const Feed = () => {
  const [activeCategory, setActiveCategory] = useState(
    'New'
  )
  const [videos, setVideos] = useState([])


  useEffect(() => {
    youtubeAPI(`search?part=snippet&q=${activeCategory}`)
      .then((data) =>
        setVideos(data.items))
  }, [activeCategory])


  return (
    <Stack sx={{
      flexDirection: { sx: 'column', md: 'row' }
    }}>
      <Box sx={{ height: { sx: 'auto', md: '90vh' }, borderRight: '1px solid white', px: { sx: 0, md: 2 } }}>
        <Sidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Typography className="copyright" variant="body2"
          sx={{

            color: ' white'
          }}
        >
          Copyright Youtube
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{
          color: 'white'
        }}>
          {activeCategory} <span style={{ color: 'red' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}


export default Feed;
