import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
const Main = () => {
    return (
        <div className="h-[100vh] w-[100wh]">

            <Canvas>
                <ambientLight />
                <OrbitControls />
                <color attach={"background"} args={["black"]} />
                <Box>
                    <meshStandardMaterial attach={"material"} color="hotpink" />
                </Box>
            </Canvas>
        </div>
    )
}

export default Main
