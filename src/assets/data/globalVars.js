define( function() {

	return {
		"breakpoints": {
			"default": {
				"name": "screen"
			},
			"sm": {
				"name": "screen_sm",
				"width": 320,
				"media": "(min-width: 320px)"
			},
			"md": {
				"name": "screen_md",
				"width": 768,
				"media": "(min-width: 768px)"
			},
			"lg": {
				"name": "screen_lg",
				"width": 960,
				"media": "(min-width: 960px)"
			}
		},
		"colors": {
			"default": "#333333",
			"darkGray": "#383838",
			"form": {
				"placeholder": "#aaaaaa",
				"inputBorderDefault": "#acacac",
				"inputBorderFocus": "#78abec",
				"inputBackground": "#ffffff"
			}
		},
		"font": {
			"family": {
				"openSans": "'Open Sans', Helvetica, 'Helvetica Neue', Calibri, Arial, sans-serif"
			},
			"size": {
				"large": 15,
				"default": 14,
				"small": 12
			},
			"lineHeight": {
				"large": "1.46666667",
				"default": "1.57142857"
			},
			"weight": {
				"light": "300",
				"normal": "400",
				"bold": "700"
			}
		},
		"hdg": {
			"h1": 24,
			"h2": 20,
			"h3": 16
		},
		"measurements": {
			"blocks": {
				"gutter": 0.06
			}
		}
	}

} );
