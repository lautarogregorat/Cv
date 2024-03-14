import Container from "@mui/material/Container";
import Nombre from "./componentes/Nombre";
import Grid from "@mui/material/Grid";
import StarParticle from "./componentes/StarParticle";
import AnimatedImage from "./componentes/ImagenPerfil";
import imagenPerfil from "./assets/perfil.jpg";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";


function App() {
  const numberOfStars = 150;

  return (
    <>
    <Container maxWidth='xl' disableGutters='true' fixed >
      <div className="stars-container">
        {Array.from({ length: numberOfStars }).map((_, index) => (
          <StarParticle key={index} />
        ))}
      </div>
      <Grid
        container
        flexDirection={"row"}
        alignContent={"flex-start"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "100vh", minWidth:"100%", paddingTop: '70px'}}

      >
        <Grid item xs={12} sm={12}>
        </Grid>
        <Grid item xs={12} sm={12} marginTop={5}>
        <Nombre />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default App;
