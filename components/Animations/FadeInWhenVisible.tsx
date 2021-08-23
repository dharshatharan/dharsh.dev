import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactElement, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function FadeInWhenVisible({ children }: Props): ReactElement {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
