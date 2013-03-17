/**
 * 3G - Sergio E. Rodrigues
 */
(function() {
	if (typeof window.G3 !== 'undefined')
		return;
	window.G3 = {
		version:1.0,
		author:'Sergio',
		GraphBar:function(model, options) {
			var _model = model;
			var _options = THREE.extend({}, options);
			var _graph=false;
			var _camera, _scene, _renderer, _center;
			
			_options.container = document.getElementById(_options.into);
			_options.webgl = _options.engine == "webgl";
			_options.canvas = _options.engine == "canvas";
			_options.svg = _options.engine == "svg";

			function init() {
				_center = new THREE.Object3D();
				
				_scene = new THREE.Scene();
				_scene.fog = new THREE.Fog( 0x000000, 250, 1400 );
				
				_camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 6000 );
				_camera.position.set( 296.67, 263.95, 414.48 );
				_camera.rotation.set(-0.57, 0.54, 0.28);
				
				var light = new THREE.DirectionalLight( 16777215, 1 );
				light.position.set( 200, 200, 200 ).normalize();
				
				light.lookAt(_center);
				
				var base = new THREE.PlaneGeometry(400,200,1,1);
				base.position.set(0, 1, 0);
				base.rotation.set(-1.57, 0, 0);
				var esquerda = new THREE.PlaneGeometry(200,200,1,1);
				esquerda.position.set(-200, 100, 0);
				esquerda.rotation.set(0, 1.57, 0);
				var fundo = new THREE.PlaneGeometry(400,200,1,1);
				fundo.position.set(0, 0, 0);
				fundo.rotation.set(0, 0, 0);
				
				_scene.add( light );
			}
			
			this.render = function() {
				if (! _graph) {
					init();
				}
			}
			this.getCenter = function() {
				return _center;
			}
			this.getRenderer = function() {
				return _renderer;
			}
			this.getScene = function() {
				return _scene;
			}
		},
		GraphLine:function(options) {
		},
		GraphArea:function(options) {
		}
	}
})();
