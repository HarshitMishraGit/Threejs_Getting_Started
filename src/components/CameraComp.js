import React from 'react'
import { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function CameraComp() {
    useEffect(() => {
        // scene 
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({
            color: 'wheat',
            wireframe:true
            
        
        });
    const cubeA = new THREE.Mesh(geometry, material);
        cubeA.position.set( 0, 0, 0 );
        

        scene.add(cubeA);
        const axesHelper = new THREE.AxesHelper();
        scene.add(axesHelper);

        // size
    const sizes = {
        width:window.innerWidth,
        height:window.innerHeight
        }
        // update size on resize
        window.addEventListener('resize', () => { 
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            // updating rendered size
            renderer.setSize(sizes.width, sizes.height);
            // updating camera 
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
        });
      const canvas = document.getElementById('webgl');
      // camera
        const camera = new THREE.PerspectiveCamera(75, sizes.height / sizes.height, 1, 100);
        
        camera.position.z = 4;
        camera.lookAt(cubeA.position);
      scene.add(camera);
  
// controls
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
      // renderer
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias:true,
      })
      renderer.setSize(sizes.width, sizes.height);
        // const clock = new THREE.Clock();
// W A S D controls
        const keydown = (e) => {
            if (e.keyCode === 87) {
                cubeA.position.z -= 0.1;
            } else if (e.keyCode === 65) {
                cubeA.position.x -= 0.1;
            } else if (e.keyCode === 83) {
                cubeA.position.z += 0.1;
            } else if (e.keyCode === 68) {
                cubeA.position.x += 0.1;
            }
        }

        window.addEventListener('keydown', keydown);
//Animation
  const tick = () => {
    //   let elapsedTime = clock.getElapsedTime();
    //   cubeA.position.y = Math.sin(elapsedTime) * 3;
    //   cubeA.position.x = Math.cos(elapsedTime);
    //   cubeA.rotation.x += Math.random()/100;
    //   cubeA.rotation.y += Math.random()/100;
            requestAnimationFrame(tick);
    controls.update();
            renderer.render(scene, camera);
        }

        tick();
    }, [])
    
  return (
      <div>
           
           <canvas id='webgl' className='mx-auto fixed top-0 right-0'></canvas>
    </div>
  )
}

export default CameraComp