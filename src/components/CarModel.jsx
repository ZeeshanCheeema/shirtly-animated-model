"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CarModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/models/2010_lamborghini_reventon_roadster.glb"
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[0.8754469, 1.34018, 0.317455]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bone_caliper_BL_rims_Material005_0.geometry}
              material={materials["Material.005"]}
              position={[-0.0244, -0.1513681, -0.022419]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.WheelBL_tires_Material010_0.geometry}
              material={materials["Material.010"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.WheelBL_rims_Material005_0.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <group position={[-0.874943, 1.34018, 0.317455]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bone_caliper_BR_rims_Material005_0.geometry}
              material={materials["Material.005"]}
              position={[0.024401, -0.1513681, -0.022419]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.WheelBR_tires_Material010_0.geometry}
              material={materials["Material.010"]}
              position={[-0.000503, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.WheelBR_rims_Material005_0.geometry}
              material={materials["Material.005"]}
              position={[-0.000503, 0, 0]}
            />
          </group>
          <group position={[0.811356, -1.33938, 0.317463]}>
            <group position={[1e-7, -1e-7, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bone_caliper_FL_rims_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-0.0243999, 0.151876, 0.024194]}
              />
            </group>
            <group position={[1e-7, -1e-7, 0]}>
              <group position={[1e-7, -1e-7, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.wheelFL_tires_Material010_0.geometry}
                  material={materials["Material.010"]}
                  position={[1e-7, -1e-7, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.wheelFL_rims_Material005_0.geometry}
                  material={materials["Material.005"]}
                  position={[1e-7, -1e-7, 0]}
                />
              </group>
            </group>
          </group>
          <group position={[-0.811356, -1.33938, 0.317463]}>
            <group position={[-1e-7, -1e-7, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bone_caliper_FR_rims_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[0.0244009, 0.151876, 0.024194]}
              />
            </group>
            <group position={[-1e-7, -1e-7, 0]}>
              <group position={[-1e-7, -1e-7, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.WheelFR_tires_Material010_0.geometry}
                  material={materials["Material.010"]}
                  position={[-1e-7, -1e-7, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.WheelFR_rims_Material005_0.geometry}
                  material={materials["Material.005"]}
                  position={[-1e-7, -1e-7, 0]}
                />
              </group>
            </group>
          </group>
          <group position={[0, -0.066475, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_plastic_Material002_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.00249, 0.582311]}
              scale={4.69558}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_details_Material005_0.geometry}
              material={materials["Material.005"]}
              position={[0, -0.00249, 0.582311]}
              scale={4.69558}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_licenseplate_Material007_0.geometry}
              material={materials["Material.007"]}
              position={[0, -0.00249, 0.582311]}
              scale={4.69558}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_salon_Material005_0.geometry}
              material={materials["Material.005"]}
              position={[0, -0.00249, 0.582311]}
              scale={4.69558}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_carpaint_Material002_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.00249, 0.582311]}
              scale={4.69558}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_grid_Material002_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.00249, 0.582311]}
              scale={4.69558}
            />
          </group>
          <group
            position={[0.776437, -1.1523401, 0.75764]}
            rotation={[-Math.PI, 0.8164817, -Math.PI]}
          >
            <group
              position={[0.0891629, 0.17298, 0.198403]}
              rotation={[-Math.PI, -0.8186998, 3.1394686]}
              scale={[0.9999999, 0.9999999, 1]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.detach_door_L_50_pivot_salon__0.geometry}
                material={materials.detach_door_L_50_pivot_salon__0}
                position={[-0.000389, 0.53615, 0.0819881]}
                scale={[1.4265591, 1.4265591, 1.4265592]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.detach_door_L_50_pivot_details__0.geometry}
                material={materials.detach_door_L_50_pivot_salon__0}
                position={[-0.000389, 0.53615, 0.0819881]}
                scale={[1.4265591, 1.4265591, 1.4265592]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.detach_door_L_50_pivot_carpaint_Material002_0.geometry
                }
                material={materials["Material.002"]}
                position={[-0.000389, 0.53615, 0.0819881]}
                scale={[1.4265591, 1.4265591, 1.4265592]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.detach_door_L_50_pivot_plastic_Material002_0.geometry
                }
                material={materials["Material.002"]}
                position={[-0.000389, 0.53615, 0.0819881]}
                scale={[1.4265591, 1.4265591, 1.4265592]}
              />
            </group>
          </group>
          <group
            position={[-0.776, -1.152, 0.758]}
            rotation={[0.0381752, 1.4105633, -0.6574943]}
            scale={[0.9999999, 0.9999999, 1]}
          >
            <group
              position={[0.0511791, 0.2477661, -0.11391]}
              rotation={[1.2956004, -0.9337517, 1.3516451]}
              scale={[1.0000001, 0.9999999, 1]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.detach_door_R_50_pivot_salon__0.geometry}
                material={materials.detach_door_L_50_pivot_salon__0}
                position={[-0.0019971, 0.5361499, 0.081988]}
                scale={[1.426559, 1.4265589, 1.426559]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.detach_door_R_50_pivot_details__0.geometry}
                material={materials.detach_door_L_50_pivot_salon__0}
                position={[-0.0019971, 0.5361499, 0.081988]}
                scale={[1.426559, 1.4265589, 1.426559]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.detach_door_R_50_pivot_carpaint_Material002_0.geometry
                }
                material={materials["Material.002"]}
                position={[-0.0019971, 0.5361499, 0.081988]}
                scale={[1.426559, 1.4265589, 1.426559]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.detach_door_R_50_pivot_plastic_Material002_0.geometry
                }
                material={materials["Material.002"]}
                position={[-0.0019971, 0.5361499, 0.081988]}
                scale={[1.426559, 1.4265589, 1.426559]}
              />
            </group>
          </group>
          <group position={[0, -0.066475, 0]}>
            <group position={[0.001193, -0.003945, 0.002106]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glasses_pivot_glass_Material006_0.geometry}
                material={materials["Material.006"]}
                position={[-0.001194, 0.100685, 0.759311]}
                scale={4.2814102}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.glasses_pivot_glass_light_Material008_0.geometry
                }
                material={materials["Material.008"]}
                position={[-0.001194, 0.100685, 0.759311]}
                scale={4.2814102}
              />
            </group>
          </group>
          <group
            position={[0.342267, -0.508804, 0.649881]}
            rotation={[0.2838953, 0, 0]}
          >
            <group
              position={[0.003632, 0.008802, 0.049124]}
              rotation={[-0.2838953, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.steer_wheel_salon_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[1e-7, 0.001789, -0.000414]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/2010_lamborghini_reventon_roadster.glb");
