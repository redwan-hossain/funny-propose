import { useEffect, useRef, useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const startMusic = () => {
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {});

      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("keydown", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
      />

      <motion.button
        whileHover={{
          scale: 1.12,
          rotate: 10,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 btn btn-circle btn-primary shadow-2xl"
      >
        {playing ? (
          <FaMusic className="text-xl animate-pulse" />
        ) : (
          <FaVolumeMute className="text-xl" />
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;