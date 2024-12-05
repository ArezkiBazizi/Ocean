// src/components/OceanScene.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Water } from "three/examples/jsm/objects/Water";
import { Sky } from "three/examples/jsm/objects/Sky";

const OceanScene = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let camera, scene, renderer, water, sun;

        const init = () => {
            const container = containerRef.current;

            // Scène
            scene = new THREE.Scene();

            // Caméra
            camera = new THREE.PerspectiveCamera(
                55,
                window.innerWidth / window.innerHeight,
                1,
                20000
            );
            camera.position.set(30, 30, 100);

            // Renderer
            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 0.5;

            // Ajout du rendu dans le conteneur
            container.appendChild(renderer.domElement);

            // Soleil
            sun = new THREE.Vector3();

            // Water
            const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
            water = new Water(waterGeometry, {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: new THREE.TextureLoader().load(
                    "https://threejs.org/examples/textures/waternormals.jpg",
                    (texture) => {
                        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    }
                ),
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: 0x001e0f,
                distortionScale: 3.7,
                fog: scene.fog !== undefined,
            });

            water.rotation.x = -Math.PI / 2;
            scene.add(water);

            // Skybox
            const sky = new Sky();
            sky.scale.setScalar(10000);
            scene.add(sky);

            const skyUniforms = sky.material.uniforms;
            skyUniforms["turbidity"].value = 10;
            skyUniforms["rayleigh"].value = 2;
            skyUniforms["mieCoefficient"].value = 0.005;
            skyUniforms["mieDirectionalG"].value = 0.8;

            const parameters = {
                elevation: 2,
                azimuth: 180,
            };

            const updateSun = () => {
                const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
                const theta = THREE.MathUtils.degToRad(parameters.azimuth);

                sun.setFromSphericalCoords(1, phi, theta);

                sky.material.uniforms["sunPosition"].value.copy(sun);
                water.material.uniforms["sunDirection"].value.copy(sun).normalize();
            };

            updateSun();

            // Orbit Controls
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.maxPolarAngle = Math.PI * 0.495;
            controls.target.set(0, 10, 0);
            controls.minDistance = 40.0;
            controls.maxDistance = 200.0;
            controls.update();

            // Redimensionnement
            window.addEventListener("resize", onWindowResize);

            const animate = () => {
                water.material.uniforms["time"].value += 1.0 / 60.0;
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };

            animate();
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        init();

        return () => {
            window.removeEventListener("resize", onWindowResize);
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1, // Assurez-vous que ceci est derrière les autres éléments
                pointerEvents: "none", // Évite de capturer les clics
            }}
        />
    );
};

export default OceanScene;
