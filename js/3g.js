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
			var _camera, _scene;
			
			_options.container = document.getElementById(_options.into);
			_options.webgl = _options.engine == "webgl";
			_options.canvas = _options.engine == "canvas";
			_options.svg = _options.engine == "svg";

			function init() {
				_scene = new THREE.Scene();
				_scene.fog = new THREE.Fog( 0x000000, 250, 1400 );
				
				_camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
				_camera.position.set( 0, 400, 700 );
				
				var dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
				dirLight.position.set( 0, 0, 1 ).normalize();
				scene.add( dirLight );
				
				_graph = new THREE.Object3D();
				
				
			}
			
			this.render = function() {
				if (! _graph) {
					init();
				}
			}
			
		},
		GraphLine:function(options) {
		},
		GraphArea:function(options) {
		}
	}
})();
