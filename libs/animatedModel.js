import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module';

export function loadGLTFAnimatedModel(
  scene,
  glbPath,
  options = { reiceiveShadow: true, castShadow: true }
) {
  const { reiceiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const dracoLoader = new DRACOLoader();
    //dracoLoader.setDecoderPath('js/libs/draco/gltf/');
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    dracoLoader.setDecoderConfig({ type: 'js' });
    const loader = new GLTFLoader();

    loader.setDRACOLoader(dracoLoader);
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene;
        obj.name = 'tokyo';
        obj.position.y = 3;
        obj.position.x = 1;
        obj.rotateY(0.5);
        obj.scale.set(0.013, 0.013, 0.013);
        obj.receiveShadow = reiceiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = reiceiveShadow;
          }
        });

        resolve(gltf);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
