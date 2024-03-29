/* eslint-disable */
import React, {
  useRef,
  Suspense,
  useEffect,
  MutableRefObject,
  memo,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, useAnimations, useGLTF, Html } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object078_Plastic_Soft_0: THREE.Mesh;
    leaf_normal_0: THREE.Mesh;
    hand2_normal_0: THREE.Mesh;
    hand1_normal_0: THREE.Mesh;
    foot2_normal_0: THREE.Mesh;
    foot1_normal_0: THREE.Mesh;
    body_normal_0: THREE.Mesh;
    Object608_metalmat_0: THREE.Mesh;
    Object608_paintmat_0: THREE.Mesh;
    wire7_normal_0: THREE.Mesh;
    Object680_metalmat_0: THREE.Mesh;
    Object681_metalmat_0: THREE.Mesh;
    Object675_metalmat_0: THREE.Mesh;
    Object675_paintmat_0: THREE.Mesh;
    Object675_glassmat_0: THREE.Mesh;
    Object675_outline_0: THREE.Mesh;
    Object532_normal_0: THREE.Mesh;
    Object689_metalmat_0: THREE.Mesh;
    Plane001_normal_0: THREE.Mesh;
    Plane003_normal_0: THREE.Mesh;
    Plane104_normal_0: THREE.Mesh;
    Plane103_normal_0: THREE.Mesh;
    Plane105_normal_0: THREE.Mesh;
    Plane106_normal_0: THREE.Mesh;
    Plane108_normal_0: THREE.Mesh;
    Plane107_normal_0: THREE.Mesh;
    Plane109_normal_0: THREE.Mesh;
    Plane110_normal_0: THREE.Mesh;
    Plane111_normal_0: THREE.Mesh;
    Plane112_normal_0: THREE.Mesh;
    Object704_Plastic_Soft_0: THREE.Mesh;
    Object704_metalmat_0: THREE.Mesh;
    wire1_Plastic_Soft_0: THREE.Mesh;
    Object081_normal_0: THREE.Mesh;
    Object332_normal_0: THREE.Mesh;
    Object682_normal_0: THREE.Mesh;
    wire2_Plastic_Soft_0: THREE.Mesh;
    wire3_normal_0: THREE.Mesh;
    wire4_normal_0: THREE.Mesh;
    wire5_normal_0: THREE.Mesh;
    ["Object706_Material_#5518_0"]: THREE.Mesh;
    ["Object707_Material_#5518_0"]: THREE.Mesh;
    ["Object708_Material_#5518_0"]: THREE.Mesh;
    ["Object709_Material_#5518_0"]: THREE.Mesh;
    Object649_normal_0: THREE.Mesh;
    Object649_paintmat_0: THREE.Mesh;
    Object649_metalmat_0: THREE.Mesh;
    Object649_Plastic_Soft_0: THREE.Mesh;
    Object649_alpha_glass_0: THREE.Mesh;
    Object649_glassmat_0: THREE.Mesh;
    ["Object649_Material_#5511_0"]: THREE.Mesh;
    ["Object649_Material_#5512_0"]: THREE.Mesh;
    Object649_glass_transp_0: THREE.Mesh;
    Object649_interiors_0: THREE.Mesh;
    Object649_alpha_0: THREE.Mesh;
    Object674_outline_0: THREE.Mesh;
    Object674_outline_0_1: THREE.Mesh;
    Object531_normal_0: THREE.Mesh;
    ["Object705_Material_#5516_0"]: THREE.Mesh;
    Object619_alpha_0: THREE.Mesh;
    Object620_alpha_0: THREE.Mesh;
    Object621_alpha_0: THREE.Mesh;
    Object622_alpha_0: THREE.Mesh;
    Object224_normal_0: THREE.SkinnedMesh;
    Object224_metalmat_0: THREE.SkinnedMesh;
    Object688_normal_0: THREE.SkinnedMesh;
    Object687_normal_0: THREE.SkinnedMesh;
    Object697_normal_0: THREE.SkinnedMesh;
    Object698_normal_0: THREE.SkinnedMesh;
    Object699_normal_0: THREE.SkinnedMesh;
    Object700_normal_0: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    Plastic_Soft: THREE.MeshStandardMaterial;
    normal: THREE.MeshStandardMaterial;
    metalmat: THREE.MeshStandardMaterial;
    paintmat: THREE.MeshStandardMaterial;
    glassmat: THREE.MeshStandardMaterial;
    outline: THREE.MeshStandardMaterial;
    Material_5518: THREE.MeshStandardMaterial;
    alpha_glass: THREE.MeshStandardMaterial;
    Material_5511: THREE.MeshStandardMaterial;
    Material_5512: THREE.MeshStandardMaterial;
    glass_transp: THREE.MeshStandardMaterial;
    interiors: THREE.MeshStandardMaterial;
    alpha: THREE.MeshStandardMaterial;
    Material_5516: THREE.MeshStandardMaterial;
    alpha_0: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Take 001";

function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>() as MutableRefObject<THREE.Group>;
  const { nodes, materials, animations } = useGLTF(
    "/LittlestTokyo.glb"
  ) as GLTFResult;
  // Extract animation actions
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="OSG_Scene">
        <group
          name="RootNode_(gltf_orientation_matrix)"
          rotation={[-Math.PI / 2, 0, Math.PI * 1.75]}
        >
          <group name="RootNode_(model_correction_matrix)">
            <group
              name="4cd116fc63ca40809810ca0842dc78edfbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group>
                <group name="RootNode">
                  <group>
                    <group
                      name="Object078"
                      position={[76.07, 163.94, 118.6]}
                      rotation={[-Math.PI / 3, 0, 0]}
                      scale={3.1}
                    >
                      <group position={[-97.41, -7.13, -96.27]}>
                        <mesh
                          name="Object078_Plastic_Soft_0"
                          geometry={nodes.Object078_Plastic_Soft_0.geometry}
                          material={materials.Plastic_Soft}
                        />
                      </group>
                    </group>
                    <group
                      name="body"
                      position={[41.05, -198.36, 208.68]}
                      rotation={[-Math.PI / 2, 0, 0.95]}
                    >
                      <group name="leaf" position={[-0.02, 1.31, 8.04]}>
                        <group position={[0.02, -1.56, -6.22]}>
                          <mesh
                            name="leaf_normal_0"
                            geometry={nodes.leaf_normal_0.geometry}
                            material={materials.normal}
                          />
                        </group>
                      </group>
                      <group
                        name="hand2"
                        position={[2.13, -0.73, 5.06]}
                        rotation={[0, Math.PI / 3, 0]}
                      >
                        <group position={[-2.13, 0.48, -3.25]}>
                          <mesh
                            name="hand2_normal_0"
                            geometry={nodes.hand2_normal_0.geometry}
                            material={materials.normal}
                          />
                        </group>
                      </group>
                      <group
                        name="hand1"
                        position={[-2.17, -0.73, 5.08]}
                        rotation={[0, -Math.PI / 3, 0]}
                      >
                        <group position={[2.17, 0.48, -3.27]}>
                          <mesh
                            name="hand1_normal_0"
                            geometry={nodes.hand1_normal_0.geometry}
                            material={materials.normal}
                          />
                        </group>
                      </group>
                      <group name="foot2" position={[2.43, -0.92, 2.02]}>
                        <group position={[-2.43, 0.67, -0.2]}>
                          <mesh
                            name="foot2_normal_0"
                            geometry={nodes.foot2_normal_0.geometry}
                            material={materials.normal}
                          />
                        </group>
                      </group>
                      <group name="foot1" position={[-2.49, -0.92, 1.98]}>
                        <group position={[2.49, 0.67, -0.16]}>
                          <mesh
                            name="foot1_normal_0"
                            geometry={nodes.foot1_normal_0.geometry}
                            material={materials.normal}
                          />
                        </group>
                      </group>
                      <group position={[0, -0.25, 1.82]}>
                        <mesh
                          name="body_normal_0"
                          geometry={nodes.body_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Object608"
                      position={[-54.38, 114.48, -87.57]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={3.1}
                    >
                      <group position={[-55.32, -73.65, -80.31]}>
                        <mesh
                          name="Object608_metalmat_0"
                          geometry={nodes.Object608_metalmat_0.geometry}
                          material={materials.metalmat}
                        />
                        <mesh
                          name="Object608_paintmat_0"
                          geometry={nodes.Object608_paintmat_0.geometry}
                          material={materials.paintmat}
                        />
                      </group>
                    </group>
                    <group
                      name="wire7"
                      position={[53.44, -91.07, 179.83]}
                      rotation={[-1.53, 0, 0]}
                    >
                      <group position={[-138.49, 205.27, 96.47]}>
                        <mesh
                          name="wire7_normal_0"
                          geometry={nodes.wire7_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Object675"
                      position={[85.46, -196.52, -246.39]}
                      rotation={[-Math.PI / 2, 0, 3.11]}
                    >
                      <group name="Object680" position={[-12.89, 0, 8.35]}>
                        <group position={[12.89, 0, 68.08]}>
                          <mesh
                            name="Object680_metalmat_0"
                            geometry={nodes.Object680_metalmat_0.geometry}
                            material={materials.metalmat}
                          />
                        </group>
                      </group>
                      <group name="Object681" position={[14.29, 0, 8.35]}>
                        <group position={[12.89, 0, 68.08]}>
                          <mesh
                            name="Object681_metalmat_0"
                            geometry={nodes.Object681_metalmat_0.geometry}
                            material={materials.metalmat}
                          />
                        </group>
                      </group>
                      <group position={[0, 0, 76.43]}>
                        <mesh
                          name="Object675_metalmat_0"
                          geometry={nodes.Object675_metalmat_0.geometry}
                          material={materials.metalmat}
                        />
                        <mesh
                          name="Object675_paintmat_0"
                          geometry={nodes.Object675_paintmat_0.geometry}
                          material={materials.paintmat}
                        />
                        <mesh
                          name="Object675_glassmat_0"
                          geometry={nodes.Object675_glassmat_0.geometry}
                          material={materials.glassmat}
                        />
                        <mesh
                          name="Object675_outline_0"
                          geometry={nodes.Object675_outline_0.geometry}
                          material={materials.outline}
                        />
                      </group>
                    </group>
                    <group
                      name="Object532"
                      position={[-29.26, -38.73, -7.81]}
                      rotation={[-Math.PI / 2, 0, -0.7]}
                      scale={3.1}
                    >
                      <group
                        position={[-17.71, -77.45, -30.88]}
                        rotation={[0, 0, 0.7]}
                      >
                        <mesh
                          name="Object532_normal_0"
                          geometry={nodes.Object532_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Object689"
                      position={[-245.52, -161.78, -259.31]}
                      rotation={[-1.63, -0.07, -0.7]}
                    >
                      <group rotation={[0, 0, 0.7]}>
                        <mesh
                          name="Object689_metalmat_0"
                          geometry={nodes.Object689_metalmat_0.geometry}
                          material={materials.metalmat}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane001"
                      position={[-101.44, 184.59, -141.83]}
                      rotation={[-Math.PI / 2, 0, -0.14]}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane001_normal_0"
                          geometry={nodes.Plane001_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane003"
                      position={[-95.31, 184.59, -140.96]}
                      rotation={[Math.PI / 2, 0, 0.14]}
                      scale={-1}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane003_normal_0"
                          geometry={nodes.Plane003_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane104"
                      position={[-83.17, 184.6, -140.38]}
                      rotation={[-Math.PI / 2, 0, 0.3]}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane104_normal_0"
                          geometry={nodes.Plane104_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane103"
                      position={[-77.26, 184.6, -142.21]}
                      rotation={[Math.PI / 2, 0, -0.3]}
                      scale={-1}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane103_normal_0"
                          geometry={nodes.Plane103_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane105"
                      position={[133.48, 48.27, -68.28]}
                      rotation={[-Math.PI / 2, 0, -1.89]}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane105_normal_0"
                          geometry={nodes.Plane105_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane106"
                      position={[131.53, 48.27, -62.4]}
                      rotation={[Math.PI / 2, 0, 1.89]}
                      scale={-1}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane106_normal_0"
                          geometry={nodes.Plane106_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane108"
                      position={[148.08, 111.71, 190.16]}
                      rotation={[-Math.PI / 2, 0, 2.97]}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane108_normal_0"
                          geometry={nodes.Plane108_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane107"
                      position={[141.99, 111.71, 189.1]}
                      rotation={[Math.PI / 2, 0, -2.97]}
                      scale={-1}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane107_normal_0"
                          geometry={nodes.Plane107_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane109"
                      position={[172.1, 108.4, 188.55]}
                      rotation={[-Math.PI / 2, 0, 2.07]}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane109_normal_0"
                          geometry={nodes.Plane109_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane110"
                      position={[169.15, 108.4, 183.11]}
                      rotation={[Math.PI / 2, 0, -2.07]}
                      scale={-1}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane110_normal_0"
                          geometry={nodes.Plane110_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane111"
                      position={[38.83, 198.6, 68.56]}
                      rotation={[1.57, 0, -0.13]}
                      scale={-1}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane111_normal_0"
                          geometry={nodes.Plane111_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane112"
                      position={[32.69, 198.6, 69.39]}
                      rotation={[-Math.PI / 2, 0, 0.13]}
                    >
                      <group position={[-0.96, -3.61, -2.09]}>
                        <mesh
                          name="Plane112_normal_0"
                          geometry={nodes.Plane112_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Object704"
                      position={[-134.88, -36.7, -123.58]}
                      rotation={[-1.58, 0.01, -0.02]}
                    >
                      <group position={[49.84, -98.15, 42.1]}>
                        <mesh
                          name="Object704_Plastic_Soft_0"
                          geometry={nodes.Object704_Plastic_Soft_0.geometry}
                          material={materials.Plastic_Soft}
                        />
                        <mesh
                          name="Object704_metalmat_0"
                          geometry={nodes.Object704_metalmat_0.geometry}
                          material={materials.metalmat}
                        />
                      </group>
                    </group>
                    <group
                      name="wire1"
                      position={[11.35, -53.56, -65.67]}
                      rotation={[-1.75, -0.09, 0.14]}
                    >
                      <group
                        position={[-101.14, -36.73, 53.01]}
                        rotation={[0.19, 0, -0.14]}
                      >
                        <mesh
                          name="wire1_Plastic_Soft_0"
                          geometry={nodes.wire1_Plastic_Soft_0.geometry}
                          material={materials.Plastic_Soft}
                        />
                      </group>
                    </group>
                    <group
                      name="wire2"
                      position={[51.83, -43.97, -45.54]}
                      rotation={[-1.61, -0.04, -0.8]}
                    >
                      <group
                        name="Object081"
                        position={[3.65, -65.2, -24.49]}
                        rotation={[0.04, 0.01, -2.87]}
                        scale={3.1}
                      >
                        <group
                          position={[-91.86, 2.87, -19.12]}
                          rotation={[0, 0, -0.52]}
                        >
                          <mesh
                            name="Object081_normal_0"
                            geometry={nodes.Object081_normal_0.geometry}
                            material={materials.normal}
                          />
                        </group>
                      </group>
                      <group
                        name="Object332"
                        position={[3.8, -102.16, -21.43]}
                        rotation={[0.05, -0.08, -2.35]}
                        scale={3.1}
                      >
                        <group position={[-78.67, -54.74, -19.12]}>
                          <mesh
                            name="Object332_normal_0"
                            geometry={nodes.Object332_normal_0.geometry}
                            material={materials.normal}
                          />
                        </group>
                      </group>
                      <group
                        name="Object682"
                        position={[0.54, -22.7, -18.8]}
                        rotation={[0.08, -0.03, -1.64]}
                        scale={3.1}
                      >
                        <group position={[-78.67, -54.74, -19.12]}>
                          <mesh
                            name="Object682_normal_0"
                            geometry={nodes.Object682_normal_0.geometry}
                            material={materials.normal}
                          />
                        </group>
                      </group>
                      <group
                        position={[-80.71, -112.36, 49.38]}
                        rotation={[0, 0, 0.8]}
                      >
                        <mesh
                          name="wire2_Plastic_Soft_0"
                          geometry={nodes.wire2_Plastic_Soft_0.geometry}
                          material={materials.Plastic_Soft}
                        />
                      </group>
                    </group>
                    <group
                      name="wire3"
                      position={[-3.77, -84.44, -56.37]}
                      rotation={[-Math.PI / 2, 0, 0.07]}
                    >
                      <group
                        position={[-83.21, -25.29, 89.85]}
                        rotation={[0, 0, -0.07]}
                      >
                        <mesh
                          name="wire3_normal_0"
                          geometry={nodes.wire3_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="wire4"
                      position={[50.92, -99.01, -52.27]}
                      rotation={[-1.56, 0.07, -0.17]}
                    >
                      <group
                        position={[-129.69, -48.86, 104.42]}
                        rotation={[0, 0, 0.17]}
                      >
                        <mesh
                          name="wire4_normal_0"
                          geometry={nodes.wire4_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="wire5"
                      position={[77.67, -109.81, -59.7]}
                      rotation={[-1.56, -0.05, 0.28]}
                    >
                      <group
                        position={[-165.8, 12.78, 115.22]}
                        rotation={[0, 0, -0.28]}
                      >
                        <mesh
                          name="wire5_normal_0"
                          geometry={nodes.wire5_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Object706"
                      position={[26.37, -164.47, 185.11]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <group position={[-111.42, 210.54, 169.88]}>
                        <mesh
                          name="Object706_Material_#5518_0"
                          geometry={
                            nodes["Object706_Material_#5518_0"].geometry
                          }
                          material={materials.Material_5518}
                        />
                      </group>
                    </group>
                    <group
                      name="Object707"
                      position={[26.37, -163.14, 185.11]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <group position={[-111.42, 210.54, 168.54]}>
                        <mesh
                          name="Object707_Material_#5518_0"
                          geometry={
                            nodes["Object707_Material_#5518_0"].geometry
                          }
                          material={materials.Material_5518}
                        />
                      </group>
                    </group>
                    <group
                      name="Object708"
                      position={[-121.51, 153.74, 54.21]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <group position={[-111.42, 210.54, 169.88]}>
                        <mesh
                          name="Object708_Material_#5518_0"
                          geometry={
                            nodes["Object708_Material_#5518_0"].geometry
                          }
                          material={materials.Material_5518}
                        />
                      </group>
                    </group>
                    <group
                      name="Object709"
                      position={[-121.51, 155.07, 54.21]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <group position={[-111.42, 210.54, 168.54]}>
                        <mesh
                          name="Object709_Material_#5518_0"
                          geometry={
                            nodes["Object709_Material_#5518_0"].geometry
                          }
                          material={materials.Material_5518}
                        />
                      </group>
                    </group>
                    <primitive object={nodes._rootJoint} />
                    <group
                      position={[70.3, -179.98, 221.37]}
                      rotation={[-Math.PI / 2, 0, -3.05]}
                      scale={0.32}
                    />
                    <group
                      position={[-91.87, 4.9, -24.34]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      position={[-111.33, 4.9, -24.34]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      position={[-111.33, 4.9, -24.34]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      position={[-91.87, 4.9, -24.34]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      position={[-91.87, 4.9, -24.34]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      position={[-111.33, 4.9, -24.34]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Object224"
                      position={[50.13, -163.16, 190.26]}
                      rotation={[-Math.PI / 2, 0, -3.05]}
                      scale={0.32}
                    />
                    <group
                      name="Object649"
                      position={[-85.05, 5.4, -25.43]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="Object649_normal_0"
                        geometry={nodes.Object649_normal_0.geometry}
                        material={materials.normal}
                      />
                      <mesh
                        name="Object649_paintmat_0"
                        geometry={nodes.Object649_paintmat_0.geometry}
                        material={materials.paintmat}
                      />
                      <mesh
                        name="Object649_metalmat_0"
                        geometry={nodes.Object649_metalmat_0.geometry}
                        material={materials.metalmat}
                      />
                      <mesh
                        name="Object649_Plastic_Soft_0"
                        geometry={nodes.Object649_Plastic_Soft_0.geometry}
                        material={materials.Plastic_Soft}
                      />
                      <mesh
                        name="Object649_alpha_glass_0"
                        geometry={nodes.Object649_alpha_glass_0.geometry}
                        material={materials.alpha_glass}
                      />
                      <mesh
                        name="Object649_glassmat_0"
                        geometry={nodes.Object649_glassmat_0.geometry}
                        material={materials.glassmat}
                      />
                      <mesh
                        name="Object649_Material_#5511_0"
                        geometry={nodes["Object649_Material_#5511_0"].geometry}
                        material={materials.Material_5511}
                      />
                      <mesh
                        name="Object649_Material_#5512_0"
                        geometry={nodes["Object649_Material_#5512_0"].geometry}
                        material={materials.Material_5512}
                      />
                      <mesh
                        name="Object649_glass_transp_0"
                        geometry={nodes.Object649_glass_transp_0.geometry}
                        material={materials.glass_transp}
                      />
                      <mesh
                        name="Object649_interiors_0"
                        geometry={nodes.Object649_interiors_0.geometry}
                        material={materials.interiors}
                      />
                      <mesh
                        name="Object649_alpha_0"
                        geometry={nodes.Object649_alpha_0.geometry}
                        material={materials.alpha}
                      />
                    </group>
                    <group
                      name="Object674"
                      position={[-85.05, 5.4, -25.43]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="Object674_outline_0"
                        geometry={nodes.Object674_outline_0.geometry}
                        material={materials.outline}
                      />
                      <mesh
                        name="Object674_outline_0_1"
                        geometry={nodes.Object674_outline_0_1.geometry}
                        material={materials.outline}
                      />
                    </group>
                    <group
                      name="Object531"
                      position={[-29.7, -38.73, -8.18]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={3.1}
                    >
                      <group position={[-63.35, -47.95, -30.88]}>
                        <mesh
                          name="Object531_normal_0"
                          geometry={nodes.Object531_normal_0.geometry}
                          material={materials.normal}
                        />
                      </group>
                    </group>
                    <group
                      name="Object688"
                      position={[170.33, 105.09, 196.56]}
                      rotation={[-Math.PI / 2, 0, 1.89]}
                    />
                    <group
                      name="Object687"
                      position={[126.55, 7.1, -162.45]}
                      rotation={[-Math.PI / 2, 0, -2.02]}
                    />
                    <group
                      name="Object697"
                      position={[112.71, -129.22, 159.7]}
                      rotation={[-Math.PI / 2, 0, 2.52]}
                    />
                    <group
                      name="Object698"
                      position={[75.75, 32.2, -225.25]}
                      rotation={[-Math.PI / 2, 0, -1.72]}
                    />
                    <group
                      name="Object699"
                      position={[452.97, 28.89, -125.94]}
                      rotation={[-Math.PI / 2, 0, -2.62]}
                    />
                    <group
                      name="Object700"
                      position={[246.56, 21.1, -12.25]}
                      rotation={[-Math.PI / 2, 0, -1.74]}
                    />
                    <group
                      name="Object705"
                      position={[-85.05, 5.4, -25.43]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="Object705_Material_#5516_0"
                        geometry={nodes["Object705_Material_#5516_0"].geometry}
                        material={materials.Material_5516}
                      />
                    </group>
                    <group
                      name="treezzzzz"
                      position={[-173.39, -142.47, 79.93]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <group
                        name="Object619"
                        position={[80.21, -105.99, -2.99]}
                        rotation={[-0.32, 0.86, -1.37]}
                        scale={0.79}
                      >
                        <group position={[0.67, 3.97, 17.99]}>
                          <mesh
                            name="Object619_alpha_0"
                            geometry={nodes.Object619_alpha_0.geometry}
                            material={materials.alpha_0}
                          />
                        </group>
                      </group>
                      <group
                        name="Object620"
                        position={[-62.03, -105.95, -1.43]}
                        rotation={[-0.32, 0.86, -1.37]}
                        scale={0.79}
                      >
                        <group position={[0.67, 3.97, 17.99]}>
                          <mesh
                            name="Object620_alpha_0"
                            geometry={nodes.Object620_alpha_0.geometry}
                            material={materials.alpha_0}
                          />
                        </group>
                      </group>
                      <group
                        name="Object621"
                        position={[-81.05, 105.39, -0.66]}
                        rotation={[-0.32, 0.86, -1.37]}
                        scale={0.79}
                      >
                        <group position={[0.67, 3.97, 17.99]}>
                          <mesh
                            name="Object621_alpha_0"
                            geometry={nodes.Object621_alpha_0.geometry}
                            material={materials.alpha_0}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Object622"
                      position={[-85.05, 5.4, -25.43]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="Object622_alpha_0"
                        geometry={nodes.Object622_alpha_0.geometry}
                        material={materials.alpha_0}
                      />
                    </group>
                    <skinnedMesh
                      name="Object224_normal_0"
                      geometry={nodes.Object224_normal_0.geometry}
                      material={materials.normal}
                      skeleton={nodes.Object224_normal_0.skeleton}
                    />
                    <skinnedMesh
                      name="Object224_metalmat_0"
                      geometry={nodes.Object224_metalmat_0.geometry}
                      material={materials.metalmat}
                      skeleton={nodes.Object224_metalmat_0.skeleton}
                    />
                    <skinnedMesh
                      name="Object688_normal_0"
                      geometry={nodes.Object688_normal_0.geometry}
                      material={materials.normal}
                      skeleton={nodes.Object688_normal_0.skeleton}
                    />
                    <skinnedMesh
                      name="Object687_normal_0"
                      geometry={nodes.Object687_normal_0.geometry}
                      material={materials.normal}
                      skeleton={nodes.Object687_normal_0.skeleton}
                    />
                    <skinnedMesh
                      name="Object697_normal_0"
                      geometry={nodes.Object697_normal_0.geometry}
                      material={materials.normal}
                      skeleton={nodes.Object697_normal_0.skeleton}
                    />
                    <skinnedMesh
                      name="Object698_normal_0"
                      geometry={nodes.Object698_normal_0.geometry}
                      material={materials.normal}
                      skeleton={nodes.Object698_normal_0.skeleton}
                    />
                    <skinnedMesh
                      name="Object699_normal_0"
                      geometry={nodes.Object699_normal_0.geometry}
                      material={materials.normal}
                      skeleton={nodes.Object699_normal_0.skeleton}
                    />
                    <skinnedMesh
                      name="Object700_normal_0"
                      geometry={nodes.Object700_normal_0.geometry}
                      material={materials.normal}
                      skeleton={nodes.Object700_normal_0.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/LittlestTokyo.glb");

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      1 + state.mouse.x / 4,
      0.075
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1.5 + state.mouse.y / 4,
      0.075
    );
  });
}

function Tokyo_() {
  return (
    <Canvas
      orthographic
      camera={{
        left: -20,
        right: 20,
        top: 20,
        bottom: -20,
        near: -250,
        far: 5000,
        zoom: 0.65,
      }}
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group position={[0, -1, 0]}>
        <Suspense fallback={<Html center></Html>}>
          <Model />
        </Suspense>
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <Rig />
    </Canvas>
  );
}

const Tokyo = memo(Tokyo_);
export default Tokyo;
