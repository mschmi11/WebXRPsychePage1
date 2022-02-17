﻿//Global Vars
var toggle = 0;

//Register Aframe Component (all lower case)
AFRAME.registerComponent('togglehidden', {
	//Initialize function
	init: function () {
		//get scene element
		var sceneEl = document.querySelector('a-scene')

		//Get this element
		let el = this.el;

		//get all elements in text frame
		var els = sceneEl.querySelectorAll('#textFrame');

		//get toggle button
		var tb = sceneEl.querySelector('#toggleButton');

		//get model buttons
		var twodbBG = sceneEl.querySelector('#psyche2dbuttonBG')
		var threedbBG = sceneEl.querySelector('#psyche3dbuttonBG')
		var twodbText = sceneEl.querySelector('#psyche2dbuttonText')
		var threedbText = sceneEl.querySelector('#psyche3dbuttonText')

		//slow in animation on load
		for (var i = 0; i < els.length; i++) {
			let currPosition = els[i].getAttribute('position');
			let params = {
				property: 'position',
				to: {
					x: currPosition.x,
					y: currPosition.y - 10,
					z: currPosition.z
				},
				dur: 1750,
			};
			els[i].setAttribute('animation', params);
		}
		let currPosition = tb.getAttribute('position');
		let params = {
			property: 'position',
			to: {
				x: currPosition.x,
				y: currPosition.y - 10,
				z: currPosition.z
			},
			dur: 1750,
		};
		tb.setAttribute('animation', params);

		//disable camera
		var cco = sceneEl.querySelector('#cameraCustomOrbit');
		//var controls = new THREE.OrbitControls(cco);
		//console.log(cco.enabled);
		//cco.enabled = false;
		//cco.enableRotate = false;
		//cco.pause();
		//cco.setAttribute('enabled', false);
		//console.log(cco.enabled);
		//cco.pause();

		//cco.setAttribute('orbit-controls', "enableRotate: false; enableDamping: false; enableKeys: false; enablePan: false; enableZoom: false; maxPolarAngle: 180; target: 0 0 - 4; minDistance: 5; maxDistance: 75;initialPosition: 0 0 8;");

		//cco.setAttribute('orbit-controls', "enableRotate: true; enableDamping: true; enableKeys: true; enablePan: true; enableZoom: true; maxPolarAngle: 180; target: 0 0 - 4; minDistance: 5; maxDistance: 75;initialPosition: 0 0 8;");


		let orbitOn = "enableRotate: true; enableDamping: true; enableKeys: true; enablePan: true; enableZoom: true; maxPolarAngle: 180; target: 0 0 - 4; minDistance: 5; maxDistance: 75; initialPosition: 0 0 8;";
		let orbitOff = "enableRotate: false; enableDamping: false; enableKeys: false; enablePan: false; enableZoom: false; maxPolarAngle: 180; target: 0 0 - 4; minDistance: 5; maxDistance: 75; initialPosition: 0 0 8;";

		//cco.setAttribute('orbit-controls', orbitOff)

		//cco.setAttribute('orbit-controls', orbitOn)


		//Interactive Buttons

		var ib1 = sceneEl.querySelector('#interactiveButton1');

		/*console.log(ib1.getAttribute('height'));

		ib1.setAttribute('height', 0.0);
		console.log(ib1.getAttribute('height'));
		ib1.setAttribute('height', 0.75);
		console.log(ib1.getAttribute('height'));
		*/


		//Give component a function
		this.toggleHide = function () {
			if (toggle == 0) {
				//information
				for (var i = 0; i < els.length; i++) {
					let currOpacity = els[i].getAttribute('opacity');
					//console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 0,
						dur: 750,
					};
					els[i].setAttribute('animation', params);
				}
				toggle = 1;
				tb.setAttribute('value', "Show text");

				//enable camera
				//cco.setAttribute('orbit-controls', orbitOn)

				/*
				console.log(ib1.getAttribute('height'));
				ib1.setAttribute('height', 0.75);
				console.log(ib1.getAttribute('height'));
				
				*/


				//ib1.setAttribute('position', { 0, 0,- 4})
				ib1.setAttribute('position', { x: 1.5, y: 1.5, z: 0.0 });;



				//buttons
				/*let params = {
					property: 'opacity',
					to: 1.0,
					dur: 750,
				};
				twodbBG.setAttribute('animation', params);
				twodbText.setAttribute('animation', params);
				threedbBG.setAttribute('animation', params);
				threedbText.setAttribute('animation', params);

				twodbBG.setAttribute('data-raycastable');
				twodbText.setAttribute('data-raycastable');
				threedbBG.setAttribute('data-raycastable');
				threedbText.setAttribute('data-raycastable');*/
			}
			else {
				//information
				for (var i = 0; i < els.length; i++) {
					let currOpacity = els[i].getAttribute('opacity');
					//console.log(currOpacity);
					let params = {
						property: 'opacity',
						to: 0.8,
						dur: 750,
					};
					els[i].setAttribute('animation', params);;
				}
				toggle = 0;
				tb.setAttribute('value', "Begin");


				//ib1.setAttribute('height', 0.0);

				ib1.setAttribute('position', { x: 0, y: 0, z: -4 });;













				//buttons
				/*let params = {
					property: 'opacity',
					to: 0.0,
					dur: 750,
				};
				twodbBG.setAttribute('animation', params);
				twodbText.setAttribute('animation', params);
				threedbBG.setAttribute('animation', params);
				threedbText.setAttribute('animation', params);

				twodbBG.removeAttribute('data-raycastable');
				twodbText.removeAttribute('data-raycastable');
				threedbBG.removeAttribute('data-raycastable');
				threedbText.removeAttribute('data-raycastable');*/
			}
		}

		//Add EventListener
		this.el.addEventListener('click', this.toggleHide);
	},
	//On Remove
	remove: function () {
		this.el.removeEventListener('click', this.toggleHide);
	}
});