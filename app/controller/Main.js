Ext.define('DealSpot.controller.Main', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			main: 'main',
		},
		control : {
			main: {
				initialize : 'onInitialize'
			}
		},
	},
	onInitialize: function() {
		console.log('DealSpot.controller.Main.onInitialize();');

	}

});