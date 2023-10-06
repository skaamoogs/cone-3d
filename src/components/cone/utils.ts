import * as THREE from "three";

export const getGeometry = (vertices: number[]) => {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(vertices), 3)
  );

  return geometry;
};
