import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import heroImage from "../assets/images/CHANTALGOMEZ.png"


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        height: "100vh",
        // backgroundImage:
          // theme.palette.mode === 'light'
          //   ? 'linear-gradient(180deg, #edd, #FFF)'
          //   : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          // `radial-gradient(18% 28% at 24% 50%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #FFFFFF59 6%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(42% 53% at 46% 80%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #FFFFFFFF 24%, #073AFF00 100%),radial-gradient(35% 56% at 98% 93%, #FB3F3FF5 9%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #415C00F5 24%, #073AFF00 100%),linear-gradient(125deg, #FF0000FF 1%, #29134AFF 100%)`,
        // backgroundSize: '100% 20%',
        backgroundColor: "black",
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' } }}>
          {/* <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Our latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              products
            </Typography>
          </Typography> */}
                  <Box
          // id="image"
          sx={{
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            // backgroundImage:`url(/src/assets/images/CHANTALGOMEZ.png);`
          }}>
                <img
        src={heroImage}
        style={{ width: '100%', filter: "invert()"}}
      />
        </Box>
          <Typography
            textAlign="center"
            color="white"
            variant="h4"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            A fullstack Web Developer.
          </Typography>

          <Typography
            textAlign="center"
            color="white"
            variant="h6"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            I love to create.
          </Typography>
          {/* <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your email address',
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
        {/* <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        /> */}
      </Container>
    </Box>
  );
}