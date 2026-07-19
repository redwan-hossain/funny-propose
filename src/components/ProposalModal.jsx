import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { FaHeart } from "react-icons/fa";

const ProposalModal = ({ open, setOpen }) => {
  useEffect(() => {
    if (!open) return;

    // Confetti Rain
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: 0.5,
              opacity: 0,
              rotate: -10,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: 0,
            }}
            exit={{
              scale: 0.5,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
            className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-[0_0_60px_rgba(255,0,100,.35)]"
          >
            {/* Floating Heart */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mb-5 flex justify-center text-pink-500 text-6xl"
            >
              <FaHeart />
            </motion.div>

            <h2 className="text-4xl font-bold text-pink-600">
              Yaaay!! 💖
            </h2>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              You said <span className="font-bold text-pink-600">YES!</span>
              <br />
              Today became the most beautiful day of my life. 🌹
            </p>

            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-5 text-pink-500 italic"
            >
              "Forever starts with this moment ❤️"
            </motion.p>

            <button
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-8 rounded-full px-8"
            >
              Thank You 🤗💕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProposalModal;