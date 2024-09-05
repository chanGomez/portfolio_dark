import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import Container from "@mui/material/Container";
import poster1 from "../assets/Images/poster1.png";
import poster2 from "../assets/Images/poster2.png";
import poster3 from "../assets/Images/poster3.png";
import poster4 from "../assets/Images/poster4.png";
import poster5 from "../assets/Images/poster5.png";
import poster6 from "../assets/Images/poster6.png";
import poster7 from "../assets/Images/poster7.jpg";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const cardData = [
  {
    img: `${poster1}`,
  },
  {
    img: `${poster2}`,
  },
  {
    img: `${poster3}`,
  },
  {
    img: `${poster4}`,
  },
  {
    img: `${poster5}`,
  },
  {
    img: `${poster6}`,
  },
  {
    img: `${poster7}`,
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export function Search() {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "25ch" } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const [num, setNum] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleModal = (index) => {
    setNum(index);
    handleOpen()
  };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100%",
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  m: 4,
  mb: 4,
  backdropFilter: "blur(10px)",
};
const style2 = {
  height: "100vh",
  backdropFilter: "blur(50px)",
};

  console.log(num);

  return (
    <Container
      id="pricing"
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2} onClick={handleClose}>
          <Box sx={style} component="img" src={cardData[num]?.img} />
        </Box>
      </Modal>

      <Box
        sx={{
          gap: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h3" gutterBottom>
            Designs
          </Typography>
        </div>
        <Grid container spacing={2} columns={12}>
          <Grid xs={12} md={6}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(0)}
              onClick={() => handleModal(0)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 0 ? "Mui-focused" : ""}
              sx={{ maxHeight: 400 }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={cardData[0].img}
                aspect-ratio="16 / 9"
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              />
            </SyledCard>
          </Grid>
          <Grid xs={12} md={6}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(1)}
              onClick={() => handleModal(1)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 1 ? "Mui-focused" : ""}
              sx={{ maxHeight: 400 }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={cardData[1].img}
                aspect-ratio="16 / 9"
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              />
            </SyledCard>
          </Grid>
          <Grid xs={12} md={4}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(2)}
              onClick={() => handleModal(2)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 2 ? "Mui-focused" : ""}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={cardData[2].img}
                sx={{
                  height: { sm: "auto", md: "100%" },
                  aspectRatio: { sm: "16 / 9", md: "" },
                }}
              />
            </SyledCard>
          </Grid>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: "100%",
              }}
            >
              <SyledCard
                variant="outlined"
                onFocus={() => handleFocus(4)}
                onClick={() => handleModal(4)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 3 ? "Mui-focused" : ""}
                sx={{ minHeight: 400 }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={cardData[4].img}
                  aspect-ratio="16 / 9"
                  sx={{
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                />
              </SyledCard>
              <SyledCard
                variant="outlined"
                onFocus={() => handleFocus(3)}
                onClick={() => handleModal(3)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 4 ? "Mui-focused" : ""}
                sx={{ maxHeight: 400, objectFit: "cover" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={cardData[3].img}
                  aspect-ratio="16 / 9"
                  sx={{
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    objectFit: "cover",
                  }}
                />
              </SyledCard>
            </Box>
          </Grid>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: "100%",
              }}
            >
              <SyledCard
                variant="outlined"
                onFocus={() => handleFocus(5)}
                onClick={() => handleModal(5)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 5 ? "Mui-focused" : ""}
                sx={{ minHeight: 500 }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={cardData[5].img}
                  sx={{
                    height: { sm: "auto", md: "100%" },
                    aspectRatio: { sm: "16 / 9", md: "" },
                  }}
                />
              </SyledCard>

              <SyledCard
                variant="outlined"
                onFocus={() => handleFocus(6)}
                onClick={() => handleModal(6)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 6 ? "Mui-focused" : ""}
                sx={{ maxHeight: 300 }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={cardData[6].img}
                  sx={{
                    height: { sm: "auto", md: "100%" },
                    aspectRatio: { sm: "16 / 9", md: "" },
                  }}
                />
              </SyledCard>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
