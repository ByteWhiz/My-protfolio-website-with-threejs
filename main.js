import * as THREE from "./node_modules/three/build/three.module.js";

//handle the 3d module
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
var canvas = document.getElementById('canvas'); 

var renderer = new THREE.WebGLRenderer({canvas: canvas});
canvas.width  = canvas.clientWidth;
canvas.height = canvas.clientHeight;
renderer.setViewport(0, 0, canvas.clientWidth, canvas.clientHeight);

//getting the canvas and fit thr 3D scene
canvas.addEventListener('resize', function () {
canvas.width  = canvas.clientWidth;
canvas.height = canvas.clientHeight;
renderer.setViewport(0, 0, canvas.clientWidth, canvas.clientHeight);
camera.aspect = canvas.clientWidth / canvas.clientHeight;
camera.updateProjectionMatrix();
});
//setting transperent background color
renderer.setClearColor( 0xffffff, 0);


const geometry = new THREE.BoxGeometry( 1, 2, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x6b88e1 } );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
	};

animate();

