import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { Cone } from "./components/cone/cone";

const vertices = [
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
  -1.0, -1.0, 1.0, 1.0, 1.0, 0.0,
];

function App() {
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
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <spotLight position={[30, 30, 30]} angle={0.15} penumbra={2} />
        <pointLight position={[-30, -30, -30]} />

        <Cone vertices={vertices} position={[-1, 0, 0]} />
      </Canvas>
    </main>
  );
}

export default App;
