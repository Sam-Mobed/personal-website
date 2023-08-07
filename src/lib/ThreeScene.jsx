import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

function Box() {
  const mesh = useRef();

  useFrame(() => {
    // Move the cube up and down over time to simulate floating
    mesh.current.position.y = Math.sin(0.5 * mesh.current.rotation.x) * 0.5;

    // Rotate the cube
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  const vertexShader = `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vPosition;
    void main() {
      float highlight = step(0.98, length(vPosition)); // Highlight vertices within a certain range
      gl_FragColor = vec4(vec3(0.0), highlight);
    }
  `;

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <Box />
    </Canvas>
  );
}

export default ThreeScene;

