import * as THREE from 'three';
//新建一个场景，一个3d空间
const scene = new THREE.Scene();
scene.up.set(0,0,1)
//摄像机，PerspectiveCamera是透视摄像机，参数分别为：视角，宽高比，近截面，远截面，只能展示距离摄像机[近截面,远截面]之间的场景
//摄像机有几个基础属性:
//camera.position摆放位置，默认(0,0,0),
//lookAt(x,y,z)设置摄像机看向哪里,
//up.set设置坐标轴的位置：x,y,z哪个轴是竖直的设为1
//近截面，远截面的设置根据position和lookAt(x,y,z)设置
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
//渲染器
const renderer = new THREE.WebGLRenderer();
//设置渲染大小，宽，高，是否提高渲染分辨率
renderer.setSize( window.innerWidth - 1, window.innerHeight-1,true);
//将dom放到body里 
document.body.appendChild( renderer.domElement );
//BoxGeometry立方体对象
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//材质对象，设置立方体的样子
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
//一个网格对象，可以看作一张网，将立方体和材质结合起来，可以在场景里移动，实现动画效果
const cube = new THREE.Mesh( geometry, material );
//将网格放到场景里，默认放在(0,0,0)的位置
scene.add( cube );
//为了不让网格和摄像机重合 将摄像机移动一下
camera.position.z = 5;

const material2 = new THREE.LineBasicMaterial( { color: 0x0000ff ,linewidth:2} );
const points = [];
points.push( new THREE.Vector3( - 10, 0, -10 ) );
points.push( new THREE.Vector3( 0, 10, -10 ) );
points.push( new THREE.Vector3( 10, 0, -10 ) );
const geometry2 = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry2, material2 );
scene.add( line );

const material3 = new THREE.LineDashedMaterial( { color: 0xff00ff} );
const points2 = [];
points2.push(new THREE.Vector3(5,0,-20));
points2.push(new THREE.Vector3(8,3,-20));
points2.push(new THREE.Vector3(11,0,-20));
points2.push(new THREE.Vector3(8,-3,-20));
points2.push(new THREE.Vector3(5,0,-20));
const geometry3 = new THREE.BufferGeometry().setFromPoints(points2);
const line2 = new THREE.Line(geometry3,material3);
scene.add(line2)
//场景渲染包括：渲染循环和动画循环，就是每次屏幕刷新时重新绘制
//requestAnimationFrame是动画渲染，和setInterval相比，它的优点是当页面不是激活状态时，停止循环
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cube.position.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();