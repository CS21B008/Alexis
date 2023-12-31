/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 heart.glb 
Author: neshallads (https://sketchfab.com/neshallads)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/realistic-human-heart-3f8072336ce94d18b3d0d055a1ece089
Title: Realistic Human Heart
*/

import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

export function Heart(props) {
  const { nodes, materials } = useGLTF('/models/heart.glb')
  return (
    <>
    <OrbitControls />
    <hemisphereLight intensity={1} />
    <pointLight position={[2, -2, 1]} />
    <group {...props} dispose={null} scale={2.75} position={[0,0.5,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.174}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.hartZBrush_defualt_group_Heart_Tex_0.geometry} material={materials.Heart_Tex} scale={286.365} />
        </group>
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/models/heart.glb')
