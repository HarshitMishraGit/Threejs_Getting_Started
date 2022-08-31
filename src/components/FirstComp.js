import React from 'react'
// import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';
import * as THREE from 'three';

function FirstComp(props) {

  //   const editor = new EditorJS( {
  //     holder: 'myEditor',
  // });
  useEffect(() => {
    // scene 
    const scene = new THREE.Scene();
    // red cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 'red' });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    mesh.position.set(1, 1, 1);
    //Axes helper
    const axesHelper = new THREE.AxesHelper();
    scene.add(axesHelper);

    // scale
    // mesh.scale.x=2;
    // mesh.scale.y=2;
    // mesh.scale.z=2;
    mesh.scale.set(2, 0.5, 0.5);

    // rotation
    // mesh.rotation.reorder("YZX");
    mesh.rotation.y = Math.PI / 2;
    // change the axis order
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
    camera.lookAt(mesh.position);
    // renderer
    const canvas = document.getElementById('webgl');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias:true,
    })
    renderer.setSize(sizes.width, sizes.height);

    renderer.render(scene, camera);
  }, []);

  function addEvent(element, eventName, callback) {
  if (element.addEventListener) {
      element.addEventListener(eventName, callback, false);
  } else if (element.attachEvent) {
      element.attachEvent("on" + eventName, callback);
  } else {
      element["on" + eventName] = callback;
  }
  }
  addEvent(document, "keypress", function (e) {
    e = e || window.event;
    // use e.keyCode
    console.log(e.key);
  });

  return (
      <div>
          <h2 className='text-blue-500 text-center font-bold text-3xl my-2'>Welcome to three js</h2>
          <div className='container'>
          {/* <div id='myEditor'></div> */}
          <canvas id='webgl' className='mx-auto'></canvas>
          </div>
              
    </div>
  )
}

export default FirstComp