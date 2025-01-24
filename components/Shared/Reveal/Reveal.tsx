"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { RevealProps } from "./Reveal.types";
import { useEffect, useRef } from "react";

export const fadeIn = (position: string, delay?: number) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7, // Reducir duración de 1.4 a 0.7
        delay: delay ? delay : 0, // Reducir delay predeterminado a 0
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      y: position === "bottom" ? -40 : 0, // Hacer el movimiento más sutil
      x: position === "right" ? 40 : 0, // Reducir el desplazamiento horizontal
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.4, // Animación de salida más rápida
        delay: 0, // Eliminar delay
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export function Reveal(props: RevealProps) {
  const { children, position, className, delay } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Solo animar una vez
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        className={className}
        variants={fadeIn(position, delay)}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}
