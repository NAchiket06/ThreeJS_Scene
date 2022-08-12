import {
	MathUtils,
	Spherical,
	Vector3
} from 'three';
import Experience from './Experience';
import * as THREE from 'three'

const cursor =
{
	x:0,
	y:0
}
export default class CharacterController {


	MoveSpeed = 0.001
	MouseSens = 1.5
	moveForward = false;
	moveBackward = false;
	LookLeft = false;
	lookRight = false;
	lookUp = false;
	lookDown = false;
	
	lastClientX = -1;
	lastClientY = -1;
	
	LookX=0;
	LookY =10;
	LookZ=0;

	constructor(_options)
	{
		CharacterController.instance = this
		
		this.experience = new Experience();
		this.Camera = this.experience.camera
		this.World = this.experience.world;
		this.targetElement = this.experience.targetElement;


		this.onKeydown = function(event)
		{
			switch(event.code)
			{
				case 'ArrowUp':
				case 'KeyW': this.moveForward = true; break;

				case 'ArrowDown':
				case 'KeyS': this.moveBackward = true; break;
			}
		}
	
		this.onKeyUp = function(event)
		{
			switch(event.code)
			{
				case 'ArrowUp':
				case 'KeyW': this.moveForward = false; break;

				case 'ArrowDown':
				case 'KeyS': this.moveBackward = false; break;
			}
		}

		
        const _onKeyDown = this.onKeydown.bind(this);
        const _onKeyup = this.onKeyUp.bind(this);

        window.addEventListener("keydown",_onKeyDown);
        window.addEventListener("keyup",_onKeyup);
		window.addEventListener("mousemove",(event)=>
		{
			// console.log(event.clientX);
			if(this.lastClientX!=-1 && this.lastClientY != -1)
			{
				if(event.clientX > this.lastClientX) this.LookX += this.MouseSens;
				else if(event.clientX < this.lastClientX) this.LookX -= this.MouseSens;

				if(event.clientY > this.lastClientY) this.LookY  -= this.MouseSens;
				else if (event.clientY < this.lastClientY) this.LookY  += this.MouseSens;
			}

			this.lastClientX = event.clientX;
			this.lastClientY = event.clientY;
		});


		this.update()   

	}

	update()
	{
		if(this.moveForward)
		{
			this.Camera.instance.translateZ(-this.MoveSpeed);
			this.LookZ -= this.MoveSpeed;
			
		}

		if(this.moveBackward)
		{
			this.Camera.instance.translateZ(this.MoveSpeed);
			this.LookZ += this.MoveSpeed;
		}

		this.Camera.instance.lookAt(this.world.instance.Mesh);

		window.requestAnimationFrame(() =>
        {
            this.update()
        })
	}
	

}