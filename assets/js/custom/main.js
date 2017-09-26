(function($) {
	// function b() {
	//     var b = $(window).height( );
	//         c = $( '.ywp_title h1' ).height( );
	//         d = b - c,
	//         e = d / 2,
	//         f = e + 'px',
	//         g = b + 'px',
	//         h = $( '.header-wrap' ).height( );
	//         i = h + 'px',
	//         j = b - h,
	//         k = j + 'px',
	//         l = $( '.footer-prompt' ).height( );
	//         m = b - l - h,
	//         n = m + 'px';
	//     // $( '.fullscreen' ).css( 'height', g ); $( '.dummy-header' ).css( 'height', i ); $( '.full-minus-head' ).css( 'height', k ); $( '.full-minus-prompt' ).css( 'height', n ); $( '.ywp_title' ).css( 'padding-top', f)
	// }
	// $(document).ready(function() {
	//     b()
	// } ); $(window).load(function() {
	//     b( ); setTimeout(function() {
	//         b()
	//     }, 200 ); setTimeout(function() {
	//         b()
	//     }, 2e3)
	// } ); $(window).resize(function() {
	//     b( ); setTimeout(function() {
	//         b()
	//     }, 200)
	// } );


	// Fit Text.
	$( window ).load( function() {
		$( '.ywp_title_inner' ).fitText(1.5, {
			minFontSize: '17px',
			maxFontSize: '48px'
			// maxFontSize: '86px'
		})
	})

	// Colors.
	$( window ).load( function() {
		var colors = [
				['rgba(210, 200, 205, 0.5)', 'rgba(227, 203, 160, 0.5)', 'rgba(207, 208, 192, 0.5)', 'rgba(200, 214, 217, 0.5)', 'rgba(235, 200, 196, 0.5)', 'rgba(200, 214, 217, 0.5)'],
				['rgba(210, 200, 205, 0.5)', 'rgba(227, 203, 160, 0.5)', 'rgba(207, 208, 192, 0.5)', 'rgba(200, 214, 217, 0.5)', 'rgba(235, 200, 196, 0.5)', 'rgba(200, 214, 217, 0.5)'],
				['rgba(210, 200, 205, 0.5)', 'rgba(227, 203, 160, 0.5)', 'rgba(207, 208, 192, 0.5)', 'rgba(200, 214, 217, 0.5)', 'rgba(235, 200, 196, 0.5)', 'rgba(200, 214, 217, 0.5)'],
				['rgba(210, 200, 205, 0.5)', 'rgba(227, 203, 160, 0.5)', 'rgba(207, 208, 192, 0.5)', 'rgba(200, 214, 217, 0.5)', 'rgba(235, 200, 196, 0.5)', 'rgba(200, 214, 217, 0.5)'],
				['rgba(210, 200, 205, 0.5)', 'rgba(227, 203, 160, 0.5)', 'rgba(207, 208, 192, 0.5)', 'rgba(200, 214, 217, 0.5)', 'rgba(235, 200, 196, 0.5)', 'rgba(200, 214, 217, 0.5)'],
				['rgba(210, 200, 205, 0.5)', 'rgba(227, 203, 160, 0.5)', 'rgba(207, 208, 192, 0.5)', 'rgba(200, 214, 217, 0.5)', 'rgba(235, 200, 196, 0.5)', 'rgba(200, 214, 217, 0.5)'],
				['rgba(210, 200, 205, 0.5)', 'rgba(227, 203, 160, 0.5)', 'rgba(207, 208, 192, 0.5)', 'rgba(200, 214, 217, 0.5)', 'rgba(235, 200, 196, 0.5)', 'rgba(200, 214, 217, 0.5)'],
				['rgba(210, 200, 205, 0.5)', 'rgba(227, 203, 160, 0.5)', 'rgba(207, 208, 192, 0.5)', 'rgba(200, 214, 217, 0.5)', 'rgba(235, 200, 196, 0.5)', 'rgba(200, 214, 217, 0.5)'],
				['rgba(210, 200, 205, 0.5)', 'rgba(227, 203, 160, 0.5)', 'rgba(207, 208, 192, 0.5)', 'rgba(200, 214, 217, 0.5)', 'rgba(230, 57, 70, 0.5)', 'rgba(200, 214, 217, 0.5)'],
				['rgba(230, 57, 70, 0.5)','rgba(180, 163, 182, 0.5)','rgba(168, 218, 220, 1)','rgba(69, 123, 157, 0.5)', 'rgba(237, 172, 172, 0.5)', 'rgba(237, 172, 172, 0.5)'],
			];
			c = colors[Math.floor(Math.random() * colors.length)];
			if ( undefined !== c ) {
				d = c[0];
				e = c[1];
				f = c[2];
				g = c[3];
				h = c[4];
				i = c[5];
				$( '.svg_one *' ).css( 'fill', d );
				$( '.svg_two *' ).css( 'fill', e );
				$( '.svg_three *' ).css( 'fill', f );
				$( '.svg_four *' ).css( 'fill', g );
				$( '.svg_five *' ).css( 'fill', h );
				$( '.svg_six *' ).css( 'fill', i );
			}
	})
})( jQuery );
