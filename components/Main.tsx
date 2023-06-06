import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import Room from "./SimpleRoom";
const Main: React.FC = () => {
  return (
    <div className="h-[100vh] w-[100wh]">
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <color attach={"background"} args={["#e6e2e2"]} />
        <Room />
      </Canvas>
    </div>
  );
};

export default Main;
