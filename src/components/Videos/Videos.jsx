import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from '../ChannelDetail/ChannelCard'


const Videos = ({ videos }) => {
    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent='start' gap={2}

        >{videos.map((items, idx) => (
            <Box key={idx}>
                {items.id.videoId && <VideoCard videocard={items} />}
                {items.id.channelId && <ChannelCard channelDetail={items} />}

            </Box>
        ))}

        </Stack >
    )
}

export default Videos