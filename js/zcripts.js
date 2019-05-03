// Function to remove preload class
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
});

// Create the Three.js scene
var scene = new THREE.Scene();

// Create a new Perspective Camera
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 1.0, 1000);
camera.position.z = 300;

// Create Full Screen WebGL renderer
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry( 1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Background Color
renderer.setClearColor(0x333333);

// Controls // TEMP
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.campingFactor = 0.25;
controls.enableZoom = false;

// Code for responsiveness and resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})

// Light sources
var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var myObj;

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('./zources/');
mtlLoader.setPath('./zources/');
mtlLoader.load('statue.mtl', function(materials) {
  materials.preload();

  // Define variable for my statue object
  var objLoader = new THREE.OBJLoader();
  //objLoader.setMaterials(materials);
  objLoader.setPath('./zources/');
  objLoader.load('statue.obj', function(object) {
    object.position.z -= 30;

    scene.add(object);

  });

});


var animate = function() {

  requestAnimationFrame(animate);

  // Rotate the objects indefinitely
  //myObj.rotation.z -= .01;
  //contols.update();

  renderer.render(scene, camera);
}

// Call to render entire scene
animate();
