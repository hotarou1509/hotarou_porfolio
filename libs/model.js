import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module';

export function loadGLTFModel(
  scene,
  glbPath_1,
  glbPath_2,
  options = { reiceiveShadow: true, castShadow: true }
) {
  const { reiceiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(
      glbPath_1,
      gltf => {
        const obj = gltf.scene;
        obj.name = 'kitsune';
        obj.position.y = 4;
        obj.position.x = -2;
        obj.receiveShadow = reiceiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = reiceiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
    loader.load(
      glbPath_2,
      gltf => {
        const obj = gltf.scene;
        obj.name = 'sakura';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = reiceiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = reiceiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
