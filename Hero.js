import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Impulsa tu pasión. Vive el deporte.
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className={styles.cta}
      >
        Ver Catálogo
      </motion.button>
    </div>
  );
}
