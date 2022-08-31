import React from 'react'
import { useEffect } from 'react';
import * as THREE from 'three';


function GroupComp() {
    useEffect(() => {
        // scene 
    const scene = new THREE.Scene();
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        
        const cubeA = new THREE.Mesh( geometry, material );
        cubeA.position.set( 1, 1, 1 );
        
        const cubeB = new THREE.Mesh( geometry, material );
        cubeB.position.set( -1, 1, 1 );
        
        //create a group and add the two cubes
        //These cubes can now be rotated / scaled etc as a group
        const group = new THREE.Group();
        group.add( cubeA );
        group.add( cubeB );
        // rotation
        // group.rotation.set(0,Math.PI,0);


        scene.add( group );
        const axesHelper = new THREE.AxesHelper();
        scene.add(axesHelper);

        // size
    const sizes = {
        width:800,
        height:600
      }
      // camera
      const camera = new THREE.PerspectiveCamera(75, sizes.height / sizes.height);
      camera.position.z = 6;
      camera.position.y = 2;
      scene.add(camera);
  
      // change camera position
      // camera.lookAt(new THREE.Vector3(1, 1, 2))
    //   camera.lookAt(mesh.position);
      // renderer
      const canvas = document.getElementById('webgl');
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias:true,
      })
      renderer.setSize(sizes.width, sizes.height);
  
        // renderer.render(scene, camera);
        // create a intanse of the class Clock in three js
const clock=new THREE.Clock();

//Animation
  const tick = () => {
          const elapsedTime=clock.getElapsedTime();
            
            requestAnimationFrame(tick);
        //    to get time period of one second
           group.rotation.y=elapsedTime* Math.PI*2;
      group.position.y = Math.sin(elapsedTime * 2) * 2;
    //   camera.lookAt(group.position);
            renderer.render(scene, camera);
        }

        tick();
    }, [])
    
  return (
      <div>
           <h2 className='text-blue-500 text-center font-bold text-3xl my-2'>Welcome to three js</h2>
           <canvas id='webgl' className='mx-auto'></canvas>
    </div>
  )
}

export default GroupComp