init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 0.5;

    scene = new THREE.Scene();
		
		fetch( 'https://raw.githack.com/jamestknz/store/master/house.geojson' )
		.then( ( response ) => {
    	return response.json();
 		 } )
		.then( ( json ) => {
			var geometry = parseGEOJSON( json );
			var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
			
			var mesh = new THREE.Mesh( geometry, material );
    	scene.add( mesh );
		} );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
		
		new THREE.OrbitControls( camera, renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );

}

function parseGEOJSON( json ) {

	const features = json.features;
	const shapes = [];
	
	for ( let feature of features ) {
	
		const points = [];
	
		const coordinates = feature.geometry.coordinates;
		
		for ( let coordinate of coordinates ) {
		
			// contour
		
			const contour = coordinate[ 0 ];
			
			for ( let point of contour ) {
			
				points.push( new THREE.Vector2( point[ 0 ], point[ 1 ] ) );
			
			}
			
			const shape = new THREE.Shape( points );
			
			// hole
			
			const hole = coordinate[ 1 ];
			
			if ( hole ) {
			
				const path = new THREE.Path();

				for ( let i = 0; i < hole.length; i ++ ) {
				
					const point = hole[ i ];
					
					if ( i === 0 ) {
					
						path.moveTo( point[ 0 ], point[ 1 ] );
					
					} else {
					
						path.lineTo(  point[ 0 ], point[ 1 ] );
					
					}

				}
			
				shape.holes.push( path );
			
			}
			
			shapes.push( shape );
		
		}
	
	}

	const geometry = new THREE.ExtrudeBufferGeometry( shapes, {
	  depth: 0.1,
		bevelEnabled: false
	} );
	
	geometry.center();
	
	return geometry;

}