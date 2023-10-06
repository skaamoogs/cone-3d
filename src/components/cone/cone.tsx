import { useMemo, useRef } from "react";
import * as THREE from "three";
import { MeshProps, useFrame } from "@react-three/fiber";
import { getGeometry } from "./utils";

export interface IConeProps extends MeshProps {
  vertices: number[];
}

export const Cone = ({ vertices, ...rest }: IConeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  //useFrame((_, delta) => (meshRef.current!.rotation.x += delta));

  const geometry = useMemo(() => {
    return getGeometry(vertices);
  }, [vertices]);

  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: 0x54aeff,
      side: THREE.DoubleSide,
    });
  }, []);

  return (
    <mesh {...rest} geometry={geometry} material={material} ref={meshRef} />
  );
};
