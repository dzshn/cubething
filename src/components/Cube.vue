<template>
    <div>
        <p>😳 cube with da stroke 😳</p>
        <div id="renderWindow"></div>
        <p>bottom text</p>
    </div>
</template>

<script>
import * as THREE from "three"

export default {
    mounted () {
        const renderWindow = document.getElementById('renderWindow')
        const windowWidth = renderWindow.clientWidth
        const windowHeight = renderWindow.clientHeight
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()

        renderer.setSize(windowWidth, windowHeight)
        renderWindow.appendChild(renderer.domElement)

        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshNormalMaterial()
        const cubes = []
        for (let i = 0; i < 10; i++) {
            cubes[i] = new THREE.Mesh(geometry, material)
        }
        cubes.forEach(cube => {scene.add(cube)})

        camera.position.z = 4

        renderWindow.addEventListener("resize", () => {renderer})

        function anim () {
            requestAnimationFrame(anim)

            cubes.forEach(cube => {
                cube.scale.x    += Math.random() * 0.2 + -0.1
                cube.scale.y    += Math.random() * 0.2 + -0.1
                cube.scale.z    += Math.random() * 0.2 + -0.1
                cube.rotation.x += Math.random() * 0.2 + -0.1
                cube.rotation.y += Math.random() * 0.2 + -0.1
                cube.rotation.z += Math.random() * 0.2 + -0.1
            })

            renderer.render(scene, camera)
        }

        anim()
    }
}
</script>

<style scoped>
#renderWindow {
    width: 1000px;
    height: 400px;
    margin: 20px auto;
}
</style>