import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FaHeart } from "react-icons/fa";

const ProposalButtons = ({ setAccepted }) => {
  const containerRef = useRef(null);

  const [noPos, setNoPos] = useState({
    x: 220,
    y: 0,
  });

  const moveButton = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const maxX = container.offsetWidth - 120;
    const maxY = container.offsetHeight - 60;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    setNoPos({ x, y });
  };

  useEffect(() => {
    moveButton();
  }, []);

  const handleYes = () => {
    setAccepted(true);

    confetti({
      particleCount: 250,
      spread: 180,
      origin: {
        y: 0.6,
      },
    });

    // Extra Burst
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 120,
      });
    }, 400);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-36 mt-8"
    >
      {/* YES BUTTON */}

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={handleYes}
        className="btn btn-primary absolute left-0 top-0 px-8 rounded-full shadow-xl text-white"
      >
        <FaHeart />
        YES
      </motion.button>

      {/* NO BUTTON */}

      <motion.button
        animate={{
          x: noPos.x,
          y: noPos.y,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 18,
        }}
        onMouseEnter={moveButton}
        onMouseMove={moveButton}
        onTouchStart={moveButton}
        className="btn btn-outline btn-error absolute rounded-full px-8"
      >
        NO 😅
      </motion.button>
    </div>
  );
};

export default ProposalButtons;