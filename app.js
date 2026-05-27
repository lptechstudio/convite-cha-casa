const canvas = document.getElementById('hero-canvas');

if(canvas && window.THREE){

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true
  });

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 5;

  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.TorusGeometry(2, 0.5, 16, 100);

  const material = new THREE.MeshBasicMaterial({
    color: 0x00f5ff,
    wireframe: true
  });

  const torus = new THREE.Mesh(geometry, material);

  scene.add(torus);

  function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.002;
    torus.rotation.y += 0.003;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
  });
}