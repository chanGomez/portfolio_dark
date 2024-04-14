import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import CakeIcon from '@mui/icons-material/Cake';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import "./Testimonials.css"

const userTestimonials = [
  {
    avatar: <CakeIcon/>,
    name: 'Giftune',
    testimonial:
      "Giftune is an app designed to keep you on top of your loved ones upcoming birthdays, where you can effortlessly select the perfect gift. A full stack PERN web application. ",
    github:"https://github.com/chanGomez/Giftune-Frontend",
    link:"https://giftune.netlify.app/"
  },
  {
    avatar: <SportsEsportsIcon/>,
    name: 'Tetris',
    testimonial:
      "Tetris web application designed with a retro aesthetic and intuitive gameplay mechanics. The site also offers an interactive environment replicating the classic Windows 98 home screen.",
      github:"https://github.com/chanGomez/tetris",
      link:"https://tttetris.netlify.app/"
  },
  {
    avatar: <FormatColorFillIcon/>,
    name: 'Contrast Checker',
    testimonial:
      `In this project I had a desire to gain a deeper understanding of how contrast ratios work. The site inculdes a ratio checker, UX compoents and a mock land page for reference and immediate application.`,
      github:"https://github.com/chanGomez/kawaii-color-checker",
      link:"https://cute-color-contrast-checker.netlify.app/"
  },
  {
    avatar: <ColorLensIcon/>,
    name: 'Excalidraw',
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
      github:"https://github.com/chanGomez/Giftune-Frontend",
      link:"https://giftune.netlify.app/"
  },
  {
    avatar: <YouTubeIcon/>,
    name: 'Youtube Clone',
    testimonial:
      "I've tried to recreat youtube's most important features, the search and video play of it's uploads. Using youtube's own API I learned video and audio play.",
      github:"https://github.com/daleskiii/youtube_clone_project",
      link:"https://chantal-daleskii-youtube-clone.netlify.app/"
  },
  {
    avatar: <VolunteerActivismIcon/>,
    name: 'Love Letters',
    testimonial:
      "I created a fun, sharable and costumizable digital love letter. You are able to download and then share your image anywhere. Inspired by grouptogether's digital cards.",
      github:"https://github.com/chanGomez/Giftune-Frontend",
      link:"https://giftune.netlify.app/"
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  // opacity: 0.3,
};

export default function Testimonials() {

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {/* See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support. */}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                backgroundColor: "black"
              }}
              className='testimonials_cards'
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 1,
                }}
              >
                {/* <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                /> */}
                <div style={{display: "flex", alignItems: "center"}}> 
                  <div style={{padding: 12}}>{testimonial.avatar}</div>
                  <p style={{fontSize: 20}}>{testimonial.name}</p>
                </div>
                <div style={{alignContent: "center"}}>
                <a href={testimonial.link}  target="_blank"><LinkIcon style={logoStyle}/></a>
                  <a href={testimonial.github}  target="_blank"><GitHubIcon style={logoStyle}/></a>
                </div>
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}