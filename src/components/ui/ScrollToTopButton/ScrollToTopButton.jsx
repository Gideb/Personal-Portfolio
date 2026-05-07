import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowButton(scrolled > 400);

      // Calculate progress (0 to 1)
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrolled / totalScroll;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="button"
          style={{
            background: `conic-gradient(white ${scrollProgress * 360}deg, #fdc731 ${scrollProgress * 360}deg)`,
          }}
        >
          <div class="arrow">
            <FaArrowUp size={16} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
