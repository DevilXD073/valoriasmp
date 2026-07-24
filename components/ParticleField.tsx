"use client";

export default function ParticleField() {

  const particles = Array.from({ length: 35 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {particles.map((_, i) => (

        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            transform: `scale(${0.5 + Math.random()})`
          }}
        />

      ))}

    </div>
  );
}
