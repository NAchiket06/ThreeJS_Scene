import * as THREE from 'three'
import Experience from './Experience.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.instance = this;
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setRoom()
            }
        })
    }
    
    setRoom()
    {
        this.room = {}
        this.room.model = this.resources.items.roomModel.scene
        this.scene.add(this.room.model)

        const directionalLight = new THREE.DirectionalLight('#ffffff',2)
        directionalLight.position.set(5,20,10)
        this.scene.add(directionalLight)

        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(geometry,material);

        this.scene.add(mesh);  
    }   
    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}