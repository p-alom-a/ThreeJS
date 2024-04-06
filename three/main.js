import * as THREE from 'three';

//canvas

const canvas = document.querySelector('canvas.webgl')

// scene

const scene = new THREE.Scene();

// object

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color :0xff0000});
const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh )

// size

 const size = {
  width: 800,
  height: 600,
 }


 //camera

 const camera = new THREE.PerspectiveCamera(75, size.width/size.height)
 camera.position.z= 3;
 scene.add(camera)

 


 //renderer

 const renderer = new THREE.WebGLRenderer({
  canvas:canvas
 })

 renderer.setSize(size.width,size.height)
 renderer.render(scene,camera)

 