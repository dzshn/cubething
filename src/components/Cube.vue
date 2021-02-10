<template>
    <div>
        <h2>😳 cube with da stroke 😳</h2>
        <div id="renderWindow"></div>
        <div id="controls">
            <div v-for="(obj, index) in controls" :key="'control-'+index">
                <label
                    v-if="obj.type !== 'button'"
                    :for="'input-'+index"
                >
                    {{ obj.title }}
                </label>
                <input
                    v-if="obj.type !== 'button'"
                    v-model="obj.value"
                    :type="obj.type"
                    :id="'input-'+index"
                >
                <button
                    v-if="obj.type === 'button'"
                    @click="obj.func"
                >
                    {{ obj.title }}
                </button>
            </div>
        </div>
        <p>bottom text</p>
    </div>
</template>

<script>
import * as THREE from "three"

export default {
    data() {
        return {
            controls: {
                speed: {
                    value: 50,
                    title: "Speed: ",
                    type: "number"
                },
                add: {
                    func: this.addCube,
                    title: "Add cube",
                    type: "button"
                },
                remove: {
                    func: this.removeCube,
                    title: "Remove cube",
                    type: "button"
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
        this.scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()

        renderer.setSize(windowWidth, windowHeight)
        renderWindow.appendChild(renderer.domElement)

        this.scene.add(new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshNormalMaterial()))

        camera.position.z = 4

        let anim = () => {
            requestAnimationFrame(anim)

            this.scene.children.forEach(cube => {
                cube.scale.x    += (Math.random() * 0.2 + -0.1) * (this.controls.speed.value / 100)
                cube.scale.y    += (Math.random() * 0.2 + -0.1) * (this.controls.speed.value / 100)
                cube.scale.z    += (Math.random() * 0.2 + -0.1) * (this.controls.speed.value / 100)
                cube.rotation.x += (Math.random() * 0.2 + -0.1) * (this.controls.speed.value / 100)
                cube.rotation.y += (Math.random() * 0.2 + -0.1) * (this.controls.speed.value / 100)
                cube.rotation.z += (Math.random() * 0.2 + -0.1) * (this.controls.speed.value / 100)
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
    grid-auto-flow: column;
    width: fit-content;
    margin: auto;
    gap: 5px;
}

#controls div {
    background: #fed3ea;
    border-radius: 10px;
    padding: 4px;
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