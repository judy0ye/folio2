/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/cat_in_flowers.glb --types 
Author: anastasiaremezova (https://sketchfab.com/anastasiaremezova)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cat-in-flowers-3472121f05d14723951eb56ab8aee4d1
Title: Cat in flowers
Note: I've altered the size and position of the original author's model
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    polySurface130_lambert3_0: THREE.Mesh;
    polySurface240_lambert4_0: THREE.Mesh;
    polySurface241_lambert7_0: THREE.Mesh;
    pCylinder4_lambert3_0: THREE.Mesh;
    pCylinder4_lambert8_0: THREE.Mesh;
    pCylinder5_lambert3_0: THREE.Mesh;
    pCylinder5_lambert8_0: THREE.Mesh;
    polySurface190_lambert5_0: THREE.Mesh;
    polySurface190_lambert6_0: THREE.Mesh;
    pDisc1_lambert10_0: THREE.Mesh;
    polySurface244_lambert3_0: THREE.Mesh;
    polySurface245_lambert3_0: THREE.Mesh;
    pCone1_lambert9_0: THREE.Mesh;
    pCone2_lambert9_0: THREE.Mesh;
    pCone3_lambert9_0: THREE.Mesh;
  };
  materials: {
    lambert3: THREE.MeshBasicMaterial;
    lambert4: THREE.MeshBasicMaterial;
    lambert7: THREE.MeshBasicMaterial;
    lambert8: THREE.MeshBasicMaterial;
    lambert5: THREE.MeshBasicMaterial;
    lambert6: THREE.MeshBasicMaterial;
    lambert10: THREE.MeshBasicMaterial;
    lambert9: THREE.MeshBasicMaterial;
  };
};

export const Cat = () => {
  const { nodes, materials } = useGLTF(
    '/models/cat_in_flowers.glb'
  ) as GLTFResult;
  return (
    <group
      dispose={null}
      position={[-1.3, -0.1, 1.5]}
      rotation={[0, Math.PI / 4, 0]}>
      <group scale={0.7}>
        <group position={[-0.002, 0.528, 0.005]} scale={[0.853, 0.825, 0.853]}>
          <mesh
            geometry={nodes.polySurface240_lambert4_0.geometry}
            material={materials.lambert4}
            scale={[1, 1.067, 1]}
          />
          <mesh
            geometry={nodes.polySurface241_lambert7_0.geometry}
            material={materials.lambert7}
            position={[0, -0.029, 0]}
            scale={1.115}
          />
        </group>
        <group position={[-0.061, 0.013, -0.011]} rotation={[0.025, -0.017, 0]}>
          <mesh
            geometry={nodes.pCylinder4_lambert3_0.geometry}
            material={materials.lambert3}
          />
          <mesh
            geometry={nodes.pCylinder4_lambert8_0.geometry}
            material={materials.lambert8}
          />
        </group>
        <group
          position={[-0.041, 0.035, -0.117]}
          rotation={[-0.035, 0.277, 0.01]}>
          <mesh
            geometry={nodes.pCylinder5_lambert3_0.geometry}
            material={materials.lambert3}
          />
          <mesh
            geometry={nodes.pCylinder5_lambert8_0.geometry}
            material={materials.lambert8}
          />
        </group>
        <group position={[-2.887, 0, -0.032]}>
          <mesh
            geometry={nodes.polySurface190_lambert5_0.geometry}
            material={materials.lambert5}
          />
          <mesh
            geometry={nodes.polySurface190_lambert6_0.geometry}
            material={materials.lambert6}
          />
        </group>
        <mesh
          geometry={nodes.polySurface130_lambert3_0.geometry}
          material={materials.lambert3}
        />
        <mesh
          geometry={nodes.polySurface244_lambert3_0.geometry}
          material={materials.lambert3}
        />
        <mesh
          geometry={nodes.polySurface245_lambert3_0.geometry}
          material={materials.lambert3}
          position={[0.259, 0.212, 0.296]}
          rotation={[0.047, -0.374, 0.265]}
        />
        <mesh
          geometry={nodes.pCone1_lambert9_0.geometry}
          material={materials.lambert9}
          position={[-0.035, 0.611, 0.388]}
          rotation={[-2.133, 0, 0]}
          scale={[0.042, 0.031, 0.042]}
        />
        <mesh
          geometry={nodes.pCone2_lambert9_0.geometry}
          material={materials.lambert9}
          position={[-0.065, 1.734, -0.063]}
          rotation={[-1.306, 0, 0]}
          scale={[0.05, 0.037, 0.05]}
        />
        <mesh
          geometry={nodes.pCone3_lambert9_0.geometry}
          material={materials.lambert9}
          position={[-0.254, 1.29, 0.072]}
          rotation={[-1.306, 0, 0.006]}
          scale={[0.037, 0.027, 0.037]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/cat_in_flowers.glb');
