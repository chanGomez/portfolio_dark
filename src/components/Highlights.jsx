
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';


export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "black",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            About Me
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            <p>
              In my journey to becoming the best designer I could be while
              freelancing, creating logos, and designing social media
              advertisements, I discovered the intersection between design and
              technology. I was fascinated by how design can influence behavior,
              shape user experiences, and improve website functionality through
              my knowledge of design principles and color theory. This
              realization led me to pursue a career in web development.
            </p>
            <p>
              When I first encountered coding, I immediately saw it as a blank
              canvas, one I could fill with algorithms and programming
              languages. This new path presented an exciting challenge, merging
              artistic expression with technical innovation. I can't wait to see
              what I'll create next.
            </p>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
