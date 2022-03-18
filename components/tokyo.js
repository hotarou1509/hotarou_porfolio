import { useState, useEffect, useRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFAnimatedModel } from '../libs/animatedModel';
import Stats from 'three/examples/jsm/libs/stats.module';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const Tokyo = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      60 * Math.sin(0.3 * Math.PI),
      10,
      20 * Math.cos(0.3 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [clock] = useState(new THREE.Clock());
  const [stats] = useState(new Stats());
  const [_controls, setControls] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const pmremGenerator = new THREE.PMREMGenerator(renderer);

      scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04
      ).texture;

      // 640 -> 240
      // 8 -> 6
      const scale = scH * 0.005 + 2.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        30000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0x101010, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = false;
      controls.target = target;
      setControls(controls);

      loadGLTFAnimatedModel(scene, 'LittlestTokyo.glb', {
        reiceiveShadow: true,
        castShadow: true,
      }).then(gltf => {
        const mixer = new THREE.AnimationMixer(gltf.scene);
        mixer.clipAction(gltf.animations[0]).play();
        const animate = () => {
          requestAnimationFrame(animate);
          const delta = clock.getDelta();
          mixer.update(delta);
          controls.update();
          stats.update();
          renderer.render(scene, camera);
        };
        animate();
        setLoading(false);
      });

      let req = null;

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  return (
    <Box
      ref={refContainer}
      className="tokyo"
      m="auto"
      at={['-20px', '-60px', '-120px']}
      mb={['-20px', '-120px', '-180px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  );
};

export default Tokyo;
