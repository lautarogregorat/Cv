import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";




function Nombre() {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer"],
    loop: { loop: Infinity, delay: 10000 },
    deleteSpeed: 100,
    typeSpeed: 80,
  });

  const animation = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "easeInOut",
        duration: 3,
      },
    },
  };

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={animation}
    style={{
      position: "relative",

      transform: "translate(-100%, -50%)",
    }}
  >
    <Grid container> 
    <Grid item xs={12}>
      <Typography
        variant="h3"
        component="h3"
        gutterBottom
        textAlign={'center'}
        sx={{ color: "white", fontFamily: 'Kode Mono',fontWeight: "bold", marginBottom: '5px'}}
      >
        Franco Lautaro Gregorat
      </Typography>
      </Grid>
      <Grid item xs={12} >
      <Typography
        variant="h5"
        component="h5"
        gutterBottom
        textAlign={'center'}
        sx={{ color: "white", fontFamily: "Kode Mono" }}
      >
        {text}
        <Cursor />
      </Typography>
      </Grid>
    </Grid>
    </motion.div>
  );
}

export default Nombre;
