import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
//新建一个场景，一个3d空间
const scene = new THREE.Scene();
scene.up.set(0,0,1)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
//渲染器
const renderer = new THREE.WebGLRenderer();
//设置渲染大小，宽，高，是否提高渲染分辨率
renderer.setSize( window.innerWidth - 1, window.innerHeight-1,true);
//将dom放到body里 
document.body.appendChild( renderer.domElement );

//文字对象
const text = new TextGeometry( '字体20', {font:new THREE.Font()} );
//材质对象，设置立方体的样子
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
//一个网格对象，可以看作一张网，将立方体和材质结合起来，可以在场景里移动，实现动画效果
const cube = new THREE.Mesh( text, material );
//将网格放到场景里，默认放在(0,0,0)的位置
// scene.add( cube );
//为了不让网格和摄像机重合 将摄像机移动一下
camera.position.z = 5;
//场景渲染包括：渲染循环和动画循环，就是每次屏幕刷新时重新绘制
//requestAnimationFrame是动画渲染，和setInterval相比，它的优点是当页面不是激活状态时，停止循环
function animate() {
	renderer.render( scene, camera );
}
animate();
