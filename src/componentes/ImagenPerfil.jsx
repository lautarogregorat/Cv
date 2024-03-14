import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const AnimatedImage = ({ src, alt }) => {
  // Definir la animación
  const animation = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "easeInOut",
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animation}
      style={{
        left: "40%",
      
        position: "relative",
        transform: "translate(-100%, -50%)",
      }}
    >
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            width: "20%",
            height: "auto",
            borderRadius: "50%",
            boxShadow: '3px 4px 4px 0 rgba(200, 200, 200, 0.5), 0 0 10px rgba(128, 0, 128, 0.5)',
            border: "2px solid",
            borderColor: 'rgba(200, 200, 200, 0.5)',
            overflow: "hidden",
          }}
        />
    </motion.div>
  );
};

export default AnimatedImage;
