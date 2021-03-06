import React from "react";
import Carousel from "react-multi-carousel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import '../../Styles/Carousel.css';
import "react-multi-carousel/lib/styles.css";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Button
      onClick={() => onClick()}
      sx={{
        backgroundColor: "transparent",
        position: "absolute",
        right: "10%",
        borderRadius: "100%",
        border: "none",
        ":hover": { backgroundColor: 'rgb(220,220,220,0.1)' }
      }}
    >
      <img
        className="arrowImage"
        src="src/Images/RightArrow.png"
        height="50px"
        style={{ backgroundColor: "transparent" }}
      />
    </Button>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <Button
      onClick={() => onClick()}
      sx={{
        backgroundColor: "transparent",
        position: "absolute",
        left: "10%",
        borderRadius: "100%",
        border: "none",
        ":hover": { backgroundColor: 'rgb(220,220,220,0.1)' }
      }}
    >
      <img
        className="arrowImage"
        src="src/Images/LeftArrow.png"
        height="50px"
        style={{ backgroundColor: "transparent" }}
      />
    </Button>
  );
};

function HomeCarousel() {
  var items = [
    {
      title: "Bem vindo ao Escritório de Engenharia",
      description:
        "Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa",
      button: "Saber Mais...",
      ref: 'http://cesupa.br'
    },
    {
      title: "Sobre nós",
      description:
        "Nós somos o Escritório de Engenharia, fazemos projetos e criamos discussões relacionadas a área da tecnologia aliada a engenharia",
      button: "Veja Mais...",
      ref: '#Sobre'
    },
    {
      title: "Nossos projetos",
      description:
        "Fazemos projetos e pesquisas voltados a muitas áreas da tecnologia e engenharias, com o intuito de sempre estar colaborando com a sociedade usando de tudo que estiver ao nosso alcance",
      button: "Projetos",
      ref: '#Projetos'
    },
    {
      title: "Membros do Escritório",
      description:
        "Os membros do escritório de engenharia do Cesupa são altamente capacitados para resolver os problemas designados a eles.",
      button: "Nossos membros",
      ref: '#Membros'
    },
  ];

  return (
    <Carousel
      additionalTransfrom={0}
      autoPlaySpeed={8000}
      centerMode={false}
      containerClass="container"
      className="carousel-container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      removeArrowOnDeviceType={["mobile", "tablet"]}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable={true}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {items.map((item, i) => (
        <HomeCarouselContent key={i} item={item} />
      ))}
    </Carousel>
  );
}

function HomeCarouselContent(props) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="white"
          gutterBottom
        >
          {props.item.title}
        </Typography>
        <Typography variant="h6" align="center" color="white" paragraph sx={{
          fontFamily: 'Pluto Sans Cond ExLight'
        }}>
          {props.item.description}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button href={props.item.ref} variant="contained" sx={{
            backgroundColor: '#00B9E1',
            borderRadius: '20px 20px 20px 20px'
          }}>{props.item.button}</Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeCarousel;
