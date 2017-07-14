Ext.define('DealSpot.controller.Main', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			main: 'main',
			deals: 'deals'
		},
		control : {
			main: {
				initialize : 'onInitialize'
			},
			'deals #dealTabs': {
                toggle: 'switchDealInfo'
            },
			'deals #dealsInfoContainer': {
                activeitemchange: 'onDealsItemChange'
            },
		}
	},
	onInitialize: function() {
		console.log('DealSpot.controller.Main.onInitialize();');

		var store = Ext.getStore('catStore');
		if(store.getCount()<20){
		var data = [{"uid": "1", "catname": "Apple"},
			{"uid": "2", "catname": "Autos"},
			{"uid": "3", "catname": "Bags & Luggage"},
			{"uid": "4", "catname": "Books & Magazines"},
			{"uid": "5", "catname": "Children"},
			{"uid": "6", "catname": "Clothing, Shoes & Accessories"},
			{"uid": "7", "catname": "Computers"},
			{"uid": "8", "catname": "Entertainment"},
			{"uid": "9", "catname": "Finance"},
			{"uid": "10", "catname": "Flowers & Gifts"},
			{"uid": "11", "catname": "Freebies"},
			{"uid": "12", "catname": "Grocery"},
			{"uid": "13", "catname": "Health & Beauty"},
			{"uid": "14", "catname": "Home & Home Improvement"},
			{"uid": "15", "catname": "Office & School Supplies"},
			{"uid": "16", "catname": "Other"},
			{"uid": "17", "catname": "Pets"},
			{"uid": "18", "catname": "Seasonal"},
			{"uid": "19", "catname": "Services"},
			{"uid": "20", "catname": "Shoes"},
			{"uid": "21", "catname": "Sporting Goods"},
			{"uid": "22", "catname": "Tech & Electronics"},
			{"uid": "23", "catname": "Travel"},
			{"uid": "24", "catname": "Video Games"}];
			store.add(data);
			store.sync();
		}

	},
	onDealsItemChange: function(){
		console.log('DealSpot.controller.Main.onDealsItemChange();');

	},
	switchDealInfo: function(container, button, pressed){
		console.log('DealSpot.controller.Main.switchDealInfo();');
        var currentView = Ext.getCmp('dealsInfoContainer');
        var activeBtn = button.getText();
        //var fuel = '';
        if(activeBtn === 'Near By'){
            currentView.setActiveItem(0);
        }
        else{
        	console.log('Cat active');
            currentView.setActiveItem(1);
        }
    }

});