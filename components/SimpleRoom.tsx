import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
  };
};

export default function FinalRoom(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF("/models/simpleRoom.glb") as GLTFResult;
  const wallMap = useLoader(TextureLoader, "/image/textures/wall.jpg");

  return (
    <group
      {...props}
      dispose={null}
      castShadow
      receiveShadow
      position={[0, -3, 0]}
    >
      <group
        position={[0, 0, 0]}
        scale={[
          (props.width * 1.68) / 4000,
          (props.height * 1.1) / 4000,
          (props.length * 1.68) / 4000,
        ]}
      >
        {/* FLOOR */}
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials["Material.005"]}
          material-side={THREE.FrontSide}
          receiveShadow
          material-color={props.shiny ? "#707070" : "grey"}
          onPointerEnter={() => props.setShiny(true)}
          onPointerLeave={() => props.setShiny(false)}
        />
        {/* WALLS */}
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.006"]}
          material-side={THREE.FrontSide}
          castShadow
          material-color={"#81818b"}
          material-map={wallMap}
          material-repeat={[15, 15, 15]}
        ></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/simpleRoom.glb");
