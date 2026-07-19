import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const HeartCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
  
    if (window.innerWidth < 768) return;

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);
    };

    const hideCursor = () => setVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  if (window.innerWidth < 768) return null;

  return (
    <>
      {/* Default Cursor Hide */}
      <style>{`
        *{
          cursor:none;
        }

        button,
        a,
        input,
        textarea{
          cursor:none;
        }
      `}</style>

      <motion.div
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
      >
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 animate-ping rounded-full bg-pink-400 opacity-40 blur-md" />

          {/* Heart */}
          <FaHeart
            className="relative text-pink-500 drop-shadow-[0_0_12px_rgba(255,0,120,.9)]"
            size={24}
          />
        </div>
      </motion.div>
    </>
  );
};

export default HeartCursor;