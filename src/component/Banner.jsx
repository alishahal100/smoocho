import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";

const Model = () => {
  const { scene } = useGLTF("/Banner.glb");
  return <primitive object={scene} scale={2} />;
};

const Banner = () => {
  const contentRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    // GSAP animation for initial load
    gsap.fromTo(
      modelRef.current,
      { x: "100vw", opacity: 0 },
      { x: "0", opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      contentRef.current,
      { x: "-100vw", opacity: 0 },
      { x: "0", opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    // GSAP scroll effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      gsap.to(modelRef.current, {
        x: scrollPosition * 0.5, // Adjust multiplier as needed
        ease: "none"
      });
      gsap.to(contentRef.current, {
        x: -scrollPosition * 0.5, // Adjust multiplier as needed
        ease: "none"
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div
        ref={modelRef}
        className="w-full h-[600px] flex justify-center items-center"
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div
        ref={contentRef}
        className="w-full flex flex-col justify-center items-center text-center  px-5"
      >
        <h1 className="text-xl mb-5 font-sans lg:text-3xl font-bold">
          Indulge in Pure Chocolate Bliss at Smoo-Cho
        </h1>
        <p className="text-sm italic text-gray-600">
          "Every bite at Smoo-Cho is pure chocolate bliss, guaranteed."
        </p>
        <p className="text-sm italic text-gray-600">
          "Every bite at Smoo-Cho is pure chocolate bliss, guaranteed."
        </p>
        <p className="text-sm italic text-gray-600">
          "Every bite at Smoo-Cho is pure chocolate bliss, guaranteed."
        </p>
      </div>
    </div>
  );
};

export default Banner;
