import React from 'react';
import { motion } from 'framer-motion';

const StarParticle = () => {
 return (
    <motion.div
      className="star"
      initial={{ y: -100, opacity: 0}}
      animate={{ y: 0, opacity: 1}}
      transition={{ duration: 2, delay: Math.random() * 2, repeat: Infinity}}
      style={{
        position: 'absolute',
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        width: Math.random() * 2 + 'px',
        height: Math.random() * 2 + 'px',
        backgroundColor: 'white',
        borderRadius: '50%',
      }}
    />
 );
};

export default StarParticle;
