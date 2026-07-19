import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import ProposalButtons from "./ProposalButtons";

const LoveCard = ({ accepted, setAccepted }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-2xl"
    >
      {/* Shine Effect */}
      <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/30 blur-xl animate-pulse" />
      {/* https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800 */}
      {/* Header Image */}
      <div className="relative">
        <img
          src="https://i.ibb.co.com/bgvk5J39/494641588-1468740387447099-6316346961955838060-n.jpg"
          alt="Love"
          className="h-72 w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-pink-400 text-4xl"
        >
          <FaHeart />
        </motion.div>
      </div>

      {/* Body */}
      <div className="space-y-5 p-6 text-center">
        <motion.h1
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-3xl font-extrabold text-pink-600"
        >
          Will You Be Mine? 💖
        </motion.h1>

        <p className="text-gray-700 leading-relaxed">
          Every heartbeat whispers your name. <br />
          Every dream begins with you. 🌹
        </p>

        <ProposalButtons
          accepted={accepted}
          setAccepted={setAccepted}
        />
      </div>
    </motion.div>
  );
};

export default LoveCard;