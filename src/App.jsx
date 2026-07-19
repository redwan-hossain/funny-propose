import './App.css'
import { useState } from "react";
import { motion } from "framer-motion";

import LoveCard from "./components/LoveCard";
import FloatingHearts from "./components/FloatingHearts";
import HeartCursor from "./components/HeartCursor";
import MusicPlayer from "./components/MusicPlayer";
import ProposalModal from "./components/ProposalModal";

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      <HeartCursor />
      <MusicPlayer />

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-200 to-fuchsia-200 flex items-center justify-center px-5">

        {/* Floating Hearts */}
        <FloatingHearts />

        {/* Blur Circle */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-400/30 blur-3xl"></div>

        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl"></div>

        {/* Main Card */}
        <motion.div
          initial={{
            opacity: 0,
            scale: .7,
            y: 80
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: .8
          }}
        >
          <LoveCard
            accepted={accepted}
            setAccepted={setAccepted}
          />
        </motion.div>

        {/* YES Modal */}
        <ProposalModal
          open={accepted}
          setOpen={setAccepted}
        />
      </div>
    </>
  );
}

export default App;