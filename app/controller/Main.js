Ext.define('DealSpot.controller.Main', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			main: 'main',
			deals: 'deals',
			Startup: 'startup',
			startupSave: 'startup #startupSaveBtn',
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
            startupSave:{
				tap:'onStartupSave'
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

		var store = Ext.getStore('dealsStore');
		if(store.getCount()<3){
		var data = [{"uid": "1", "userId": "1", "dateCreated": "08/6/2017", "datePublish": "08/6/2017", "title": "20% Rabatt Mcdonalds",
					 "image": "http://2.bp.blogspot.com/-Mbq5kmMtrgI/T44zS6BzQ6I/AAAAAAAAA20/QjajhABxexU/s1600/458827_10151501202440023_142518590022_23600640_1232321177_o.jpg", 
					 "description": "Promotion period: 18 April – 18 May and while stocks last. Available from 11am – 4am, EVERYDAY!", "contact": "Tel: 089 / 7 85 94 - 413", "lat": "50.7947313", "lon": "6.1019621"},
					 {"uid": "2", "userId": "2", "dateCreated": "08/3/2017", "datePublish": "08/4/2017", "title": "30% Discount BackWerk",
					 "image": "http://worldfranchise.eu/sites/default/files/franchises/photos/rcl_backwerk-fassade_02_a.jpg", "description": "Free Coffee in Morning", "contact": "+49 241 94379920",  "lat": "50.7738775", "lon": "6.0853535"},
					 {"uid": "3", "userId": "3", "dateCreated": "07/22/2017", "datePublish": "07/23/2017", "title": "20% H&M",
					 "image": "http://www.couponforshopping.com/wp-content/uploads/2014/12/hm-coupon.png", "description": "Sale on Jeans, shirts, ladies shoes, Jackets. Valid only till 2017", "contact": "+49 800 6655900",  "lat": "50.7756467", "lon": "6.0871046"},
					]
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
    },
    onStartupSave: function(){
    	console.log('DealSpot.controller.Main.onStartupSave();');
    	var me = this,
            now = Date.now();
        //Restrict multiple taps
        if (now < me.lastTapTimestamp + DealSpot.common.Util.clickDelay) {
            me.lastTapTimestamp = now;
            return;
        }
        me.lastTapTimestamp = now;

        var startupForm = Ext.getCmp('startupForm');

		var data = startupForm.getValues();

		if(data.language == ""){
			DealSpot.common.Util.Alert('', "Please fill language field.");
			return;
		}

		if(data.country == ""){
			DealSpot.common.Util.Alert('', "Please fill country field.");
			return;
		}

		var store = Ext.getStore('userProfileStore');
		var data = [{"uid": "1", "language": data.language, "country": data.country, "zip": data.zip}];
			store.add(data);
			store.sync();

		// add main view
		var view = Ext.Viewport.add({xtype: 'main'});
		view.show();

		// remove login view - clear memory
		var startupView = Ext.ComponentQuery.query('startup')[0];
	                startupView.destroy();
    }

});