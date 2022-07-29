import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame } from "@react-three/fiber";

extend({ OrbitControls });

const CameraController = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={false}
      enableZoom={true}
    />
  );
};

export { CameraController };
