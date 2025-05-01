import React, { useState } from "react";

function HeroSection() {
  const [state, setState] = useState<string>("");
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center bg-cover bg-center relative text-white"
      style={{ backgroundImage: "src/assets/heroimage.jpg" }}
    >
      {/* Capa oscuta encima del fondiux */}
      <div className="absolute inset-0 bg-black opacity-50" />
    </section>
  );
}
export default HeroSection;
