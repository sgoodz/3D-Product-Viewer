import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
  current: null,
  items: {
    laces: "#ff3",
    mesh: "#3f3",
    caps: "#3f3",
    inner: "#3f3",
    sole: "#3f3",
    stripes: "#3f3",
    band: "#3f3",
    patch: "#3f3",
  },
});

const Cabin = ({ ...props }) => {
  const group = useRef();

  const { nodes, materials } = useGLTF("/severn.glb");
  const snap = useSnapshot(state);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerDown={(e) => {
        e.stopPropagation();
        state.current = e.object.geometry.name;
      }}
      onPointerMissed={(e) => {
        state.current = null;
      }}
    >
      <group position={[0, 0, -1]}>
        <mesh
          geometry={nodes.georgian_bars.geometry}
          material={materials["Spruce Timber 2m x 2m"]}
          position={[1.22, 0.04, 1.67]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.timber_base.geometry}
          material={materials[`${props.treatmentOption}`]}
          position={[-0.25, -0.11, 2.41]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.timber_trim.geometry}
          material={materials["Spruce Timber 2m x 2m"]}
          position={[-1.78, 1.14, 0]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.door_handles.geometry}
          material={materials["Black Matte"]}
          position={[1.23, -0.24, -0.04]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.glass.geometry}
          material={materials["New Glass"]}
          position={[1.21, 0.04, 1.67]}
          scale={[0.17, 1, 1]}
        />
        <mesh
          geometry={nodes.window_seals.geometry}
          material={materials["Black Matte"]}
          position={[1.2, 0.04, 1.67]}
          scale={[1, 1, 0.99]}
        />
        <mesh
          geometry={nodes.timber_bearers.geometry}
          material={materials["pressure treated timber 2m x 2m"]}
          position={[0.58, -1.21, 0]}
        />
        <mesh
          geometry={nodes.roof_felt.geometry}
          //   material={materials["Felt 2017"]}
          material={materials[`${props.roofColor}`]}
          position={[0.01, 1.02, 0]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.vents.geometry}
          material={materials["Brown Plastic 2"]}
          position={[1.18, 0.96, 0.38]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.metal.geometry}
          material={materials["Metal - Steel"]}
          position={[-1.65, -1.07, 2.22]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </group>
      <group position={[-2.12, 0, 0.03]}>
        <mesh
          geometry={nodes.Weathered_Wood.geometry}
          material={materials["Weathered Wood | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, 0.13]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Stone_Grey.geometry}
          material={materials["Stone Grey | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, 0.09]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Slate_Grey.geometry}
          material={materials["Slate Grey | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, -0.09]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Silver_Grey.geometry}
          material={materials["Silver Grey | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, 0.04]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sage_Leaf.geometry}
          material={materials["Sage Leaf | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, -0.13]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Light_Brown.geometry}
          material={materials["Light Brown | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, 0.27]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mendip_Mist.geometry}
          material={materials["Mendip Mist | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, -0.27]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Heritage_Blue.geometry}
          material={materials["Heritage Blue | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, -0.22]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Hazelnut.geometry}
          material={materials["Hazelnut | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, 0.22]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Hadspen_Blue.geometry}
          material={materials["Hadspen Blue | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, -0.04]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Eggshell_Blue.geometry}
          material={materials["Eggshell Blue | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, -0.18]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Dark_Brown.geometry}
          material={materials["Dark Brown | Spruce 2020 (2.05m x 5m)"]}
          position={[0, 0, 0.17]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Cornish_Cream.geometry}
          material={materials["Cornish Cream | Spruce 2020 (2.05m x 5m)"]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
    </group>
  );
};

export default Cabin;
