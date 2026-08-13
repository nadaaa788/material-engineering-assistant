// ===== 3D Animated Background (Three.js) =====
// Instead of random geometric shapes, this creates small
// "molecule" clusters — a central atom connected to a few
// surrounding atoms by bonds — evoking crystal lattice /
// molecular structures, which fits the Materials Engineering theme.

// 1. Scene
const scene = new THREE.Scene();

// 2. Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("bg3d").appendChild(renderer.domElement);

// 4. Lighting (needed so the solid atom spheres look 3D, not flat black)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Shared materials, reused by every atom/bond so we don't
// recreate the same material dozens of times
const atomMaterial = new THREE.MeshStandardMaterial({
  color: 0x2563eb,
  metalness: 0.3,
  roughness: 0.4,
  transparent: true,
  opacity: 0.55
});

const bondMaterial = new THREE.LineBasicMaterial({
  color: 0x93c5fd,
  transparent: true,
  opacity: 0.4
});

// This function builds ONE molecule cluster: one central atom
// surrounded by a few smaller atoms, connected by bond lines.
function createMoleculeCluster() {
  const cluster = new THREE.Group(); // a container that holds all atoms+bonds as a single unit

  // Central atom
  const centerGeometry = new THREE.SphereGeometry(0.25, 12, 12);
  const centerAtom = new THREE.Mesh(centerGeometry, atomMaterial);
  cluster.add(centerAtom);

  // A handful of surrounding atoms, placed at random positions
  // around the center, each connected back to it by a line (bond)
  const satelliteCount = 3 + Math.floor(Math.random() * 3); // 3 to 5 satellites

  for (let i = 0; i < satelliteCount; i++) {
    const satelliteGeometry = new THREE.SphereGeometry(0.12, 10, 10);
    const satelliteAtom = new THREE.Mesh(satelliteGeometry, atomMaterial);

    // Random position around the center atom
    const offsetX = (Math.random() - 0.5) * 1.6;
    const offsetY = (Math.random() - 0.5) * 1.6;
    const offsetZ = (Math.random() - 0.5) * 1.6;
    satelliteAtom.position.set(offsetX, offsetY, offsetZ);
    cluster.add(satelliteAtom);

    // Draw a line (bond) from the center atom to this satellite atom
    const bondPoints = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(offsetX, offsetY, offsetZ)
    ];
    const bondGeometry = new THREE.BufferGeometry().setFromPoints(bondPoints);
    const bond = new THREE.Line(bondGeometry, bondMaterial);
    cluster.add(bond);
  }

  return cluster;
}

// 5. Scatter several molecule clusters across the scene
const clusters = []; // store every cluster so we can rotate them in the animation loop
const clusterCount = 18;

for (let i = 0; i < clusterCount; i++) {
  const cluster = createMoleculeCluster();

  // Random position across a wide area, pushed back behind the content
  cluster.position.x = (Math.random() - 0.5) * 40;
  cluster.position.y = (Math.random() - 0.5) * 25;
  cluster.position.z = (Math.random() - 0.5) * 15 - 15;

  // Random overall size for the cluster
  const scale = 0.7 + Math.random() * 1.3;
  cluster.scale.set(scale, scale, scale);

  // Random slow rotation speed for each cluster
  cluster.userData.rotationSpeedX = (Math.random() - 0.5) * 0.006;
  cluster.userData.rotationSpeedY = (Math.random() - 0.5) * 0.006;

  scene.add(cluster);
  clusters.push(cluster);
}

// 6. Animation loop
function animate() {
  requestAnimationFrame(animate);

  clusters.forEach(function(cluster) {
    cluster.rotation.x += cluster.userData.rotationSpeedX;
    cluster.rotation.y += cluster.userData.rotationSpeedY;
  });

  renderer.render(scene, camera);
}
animate();
// 7. Keep everything correctly sized on window resize
window.addEventListener("resize", function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});