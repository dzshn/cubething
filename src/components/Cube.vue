<template>
    <div>
        <h2>😳 cube with da stroke 😳</h2>
        <div id="renderWindow"></div>
        <div id="controls">
            <div v-for="(obj, index) in controls" :key="'control-'+index">
                <label :for="obj">{{ obj.title }}</label>
                <input v-model="obj.value" type="number" :id="obj">
            </div>
            <div>
                <button @click="addCube">Add cube</button> /
                <button @click="removeCube">Eat cube</button>
            </div>
        </div>
        <p>{{scene? scene.children.length : 'no'}}</p>
        <h3>bottom text</h3>
    </div>
</template>

<script>
import * as THREE from "three"

export default {
    data() {
        return {
            showAdvanced: false,
            controls: {
                main: {
                    title: "Major speed: ",
                    value: 10
                },
                rotate: {
                    title: "Rotation: ",
                    value: 1
                },
                move: {
                    title: "Movement: ",
                    value: 1
                },
                scale: {
                    title: "Scaling: ",
                    value: 1
                }
            }
        }
    },
    methods: {
        addCube() {
            this.scene.add(new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshNormalMaterial()))
        },
        removeCube() {
            if (this.scene.children.length == 0) { return }
            const cube = this.scene.children[this.scene.children.length - 1]
            this.scene.remove(cube)
            cube.material.dispose()
            cube.geometry.dispose()
        }
    },
    mounted() {
        const renderWindow = document.getElementById('renderWindow')
        const windowWidth = renderWindow.clientWidth
        const windowHeight = renderWindow.clientHeight
        const camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()
        this.scene = new THREE.Scene()

        renderer.setSize(windowWidth, windowHeight)
        renderWindow.appendChild(renderer.domElement)

        this.scene.add(new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshNormalMaterial()))

        camera.position.z = 4

        let anim = () => {
            requestAnimationFrame(anim)

            this.scene.children.forEach(cube => {
                cube.rotation.x += (Math.random() * 0.2 + -0.1) * this.controls.main.value * this.controls.rotate.value / 60
                cube.rotation.y += (Math.random() * 0.2 + -0.1) * this.controls.main.value * this.controls.rotate.value / 60
                cube.rotation.z += (Math.random() * 0.2 + -0.1) * this.controls.main.value * this.controls.rotate.value / 60
                cube.position.x += (Math.random() * 0.2 + -0.1) * this.controls.main.value * this.controls.move.value   / 60
                cube.position.y += (Math.random() * 0.2 + -0.1) * this.controls.main.value * this.controls.move.value   / 60
                cube.position.z += (Math.random() * 0.2 + -0.1) * this.controls.main.value * this.controls.move.value   / 60
                cube.scale.x    += (Math.random() * 0.2 + -0.1) * this.controls.main.value * this.controls.scale.value  / 60
                cube.scale.y    += (Math.random() * 0.2 + -0.1) * this.controls.main.value * this.controls.scale.value  / 60
                cube.scale.z    += (Math.random() * 0.2 + -0.1) * this.controls.main.value * this.controls.scale.value  / 60
            })

            renderer.render(this.scene, camera)
        }

        anim()
    }
}
</script>

<style scoped>
#renderWindow {
    width: 90%;
    height: 400px;
    margin: 20px auto;
    border: solid 10px #fed3ea;
    border-radius: 10px;
}

#controls {
    display: grid;
    grid-auto-flow: column dense;
    width: fit-content;
    margin: auto;
    gap: 5px;
}

#controls div {
    background: #fed3ea;
    border-radius: 10px;
    padding: 4px;
    width: fit-content;
}

#controls label {
    padding: 10px;
}

#controls button {
    height: 100%;
}

#controls input {
    width: 50px;
}
</style>