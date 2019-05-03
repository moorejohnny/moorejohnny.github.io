// Function to remove preload class
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
});

// Create the Three.js scene
var scene = new THREE.Scene();

// Create a new Perspective Camera
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 1.0, 1000);
camera.position.z = 180;

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
controls.enablePan = false;

// Code for responsiveness and resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})

// Light sources
var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(196, 36%, 86%)'), 0.7); //'hsl(42, 53%, 79%)'
keyLight.position.set(-50, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 89%, 81%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight('hsl(46, 100%, 92%)', 0.7); //'hsl(240, 89%, 81%)'
backLight.position.set(100, 0, -100).normalize();

var ambLight = new THREE.AmbientLight( 0x404040 ); // soft white light

var pointLight = new THREE.PointLight('hsl(271, 100%, 50%)', 0.9, 100 ); //0x4722b0
pointLight.position.set( -100, 0, 50 );

scene.add(keyLight);
//scene.add(fillLight);
scene.add(backLight);
scene.add(ambLight);
scene.add(pointLight);

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
    object.position.z += 0;
    object.position.y -= 100;
    object.rotateX(-Math.PI/2);
    scene.add(object);

  });

});


var animate = function() {

  requestAnimationFrame(animate);

  // Rotate the objects indefinitely
  //geometry.rotation.z -= .01;
  controls.update();

  renderer.render(scene, camera);
}

// Call to render entire scene
animate();
