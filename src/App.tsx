/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import "./App.scss";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      85,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      antialias: true,
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    const geometry = new THREE.ConeGeometry(5, 10, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xacacac,
    });
    const cone = new THREE.Mesh(geometry, material);
    scene.add(cone);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.set(1, 1, 10);

    controls.update();

    renderer.render(scene, camera);
  }, []);

  return (
    <main className="main">
      <div className="settings">
        <form className="settings__form">
          <h2> Enter input data:</h2>
          <label>
            Cone height:
            <input type="text" />
          </label>
          <label>
            Radius:
            <input type="text" />
          </label>
          <label>
            Number of segments:
            <input type="text" />
          </label>
        </form>
      </div>

      <canvas ref={canvasRef} className="canvas"></canvas>
    </main>
  );
}

export default App;
