const BubbleAnimation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`absolute bottom-0 text-red-500 animate-floatUp`}
          style={{
            left: `${Math.random() * 100}vw`, // Random horizontal position
            animationDelay: `${Math.random() * 3}s`, // Staggered animation
            fontSize: `${Math.random() * 3 + 1}rem`, // Random heart sizes
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default BubbleAnimation;
