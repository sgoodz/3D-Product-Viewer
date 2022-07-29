import "./App.css";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Cabin from "./Components/Cabin";
import { CameraController } from "./Components/CameraController";
useGLTF.preload("/severn.glb");

function App() {
  const [mainColor, setMainColor] = useState("Spruce Timber 2m x 2m");
  const [roofColor, setRoofColor] = useState("Felt 2017");
  const [trimColor, setTrimColor] = useState();

  return (
    <div style={{ height: "100vh", background: "#0a192f" }}>
      <Canvas>
        <ambientLight intensity={0.4} />
        <spotLight
          intensity={1}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow={true}
        />
        <Suspense fallback={null}>
          <Cabin roofColor={roofColor} treatmentOption={mainColor} />
        </Suspense>
        <CameraController />
      </Canvas>
      <div style={{ position: "absolute", top: "0" }} className="sidebar-bg">
        <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
          <img
            src="/LOGO.svg"
            alt="Dunster House Logo"
            style={{ height: 100 }}
          />
        </div>
        <h1>Configure your Log Cabin</h1>
        <h2>Current selection:</h2>
        <ul>
          <li>
            Main treatment color:{" "}
            <span className="currentSelection">
              <b>{mainColor}</b>
            </span>
          </li>
          <li>
            Roof color:{" "}
            <span className="currentSelection">
              <b>{roofColor}</b>
            </span>
          </li>
          <li>
            Trim color:{" "}
            <span className="currentSelection">
              <span className="currentSelection">
                <b>{trimColor}</b>
              </span>
            </span>
          </li>
        </ul>
        <div>
          <h1>Main Treatment Option</h1>
          <select
            id="treatments"
            value={mainColor}
            onChange={(e) => setMainColor(e.target.value)}
            defaultValue="Select mainColor"
          >
            <option value="Spruce Timber 2m x 2m">Spruce Timber 2m x 2m</option>
            <option value="Eggshell Blue | Spruce 2020 (2.05m x 5m)">
              Eggshell Blue | Spruce 2020 (2.05m x 5m)
            </option>
            <option value="Black Matte">Black Matte</option>
            <option value="Brown Plastic 2">Brown Plastic 2</option>
            <option value="Weathered Wood | Spruce 2020 (2.05m x 5m)">
              Weathered Wood | Spruce 2020 (2.05m x 5m)
            </option>
          </select>
          <p>Main Color Selected: {mainColor}</p>
        </div>
        <div>
          <h1>Roof Color</h1>
          <select
            id="treatments"
            value={roofColor}
            onChange={(e) => setRoofColor(e.target.value)}
            defaultValue="Select RoofColor"
          >
            <option value="Spruce Timber 2m x 2m">Spruce Timber 2m x 2m</option>
            <option value="Eggshell Blue | Spruce 2020 (2.05m x 5m)">
              Eggshell Blue | Spruce 2020 (2.05m x 5m)
            </option>
            <option value="Black Matte">Black Matte</option>
            <option value="Brown Plastic 2">Brown Plastic 2</option>
            <option value="Weathered Wood | Spruce 2020 (2.05m x 5m)">
              Weathered Wood | Spruce 2020 (2.05m x 5m)
            </option>
          </select>
          <p>Selected Option: </p>
        </div>
        <div>
          <h1>Trim Color</h1>
          <select>
            <option>Spruce Timber 2m x 2m</option>
            <option>Eggshell Blue | Spruce 2020 (2.05m x 5m)</option>
            <option>Black Matte</option>
            <option>Brown Plastic 2</option>
            <option>Weathered Wood | Spruce 2020 (2.05m x 5m)</option>
          </select>
        </div>
        {/* <p>Left click and drag to move the product</p> */}
      </div>
    </div>
  );
}

export default App;
