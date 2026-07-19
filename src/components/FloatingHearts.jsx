import { FaHeart } from "react-icons/fa";

const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 24 + 12, // 12px - 36px
  duration: Math.random() * 8 + 6, // 6s - 14s
  delay: Math.random() * 8,
  opacity: Math.random() * 0.6 + 0.2,
}));

const FloatingHearts = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-floatingHeart text-pink-500"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          <FaHeart />
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;