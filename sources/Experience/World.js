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

        const box = new THREE.BoxHelper( this.sphere, 0xffff00 );
        this.scene.add( box );

        const directionalLight = new THREE.DirectionalLight('#ffffff',2)
        directionalLight.position.set(10,10,10)

        this.scene.add(directionalLight)
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