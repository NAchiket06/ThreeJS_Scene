import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Vector3 } from 'three'

export default class Camera
{

    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.debug = this.experience.debug
        this.time = this.experience.time
        this.sizes = this.experience.sizes
        this.targetElement = this.experience.targetElement
        this.scene = this.experience.scene
        this.setInstance() 
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera( 60, this.config.width / this.config.height, 0.1, 1000);
        this.instance.rotation.reorder('YXZ');
        this.instance.position.set(0,15,30)
        // this.instance.orbitControls = new OrbitControls(this.instance, this.targetElement)
    }

    
    resize()
    {
        this.instance.aspect = this.config.width / this.config.height
        this.instance.updateProjectionMatrix()

        this.instance.aspect = this.config.width / this.config.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {

    }

    destroy()
    {
        this.modes.debug.orbitControls.destroy()
    }
}
