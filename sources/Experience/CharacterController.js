import {
	MathUtils,
	Spherical,
	Vector3
} from 'three';
import Experience from './Experience';

const _lookDirection = new Vector3();
const _spherical = new Spherical();
const _target = new Vector3();

export default class CharacterController {

	moveForward = false
	moveBackward = false
	constructor(_options)
	{
		CharacterController.instance = this
		
		this.experience = new Experience();
		this.Camera = this.experience.camera
	
	
		this.onKeydown = function(event)
		{
			switch(event.code)
			{
				case 'ArrowUp':
				case 'KeyW': this.moveForward = true; break;

				case 'ArrowDown':
				case 'S': this.moveBackward = true; break;
			}
		}
	
		this.onKeyUp = function(event)
		{
			switch(event.code)
			{
				case 'ArrowUp':
				case 'KeyW': this.moveForward = false; break;

				case 'ArrowDown':
				case 'S': this.moveBackward = false; break;
			}
		}

		
        const _onKeyDown = this.onKeydown.bind(this);
        const _onKeyup = this.onKeyUp.bind(this);

        window.addEventListener("keydown",_onKeyDown);
        window.addEventListener("keyup",_onKeyup);

		this.update()   

	}

	update()
	{
		if(this.moveForward)
		{
			this.Camera.instance.position.z += 1;
		}

		if(this.moveBackward)
		{
			this.Camera.instance.position.z -= 1;
		}
	}
	

}