/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'DealSpot',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main', 'Deals', 'Settings', 'Contact', 'Categories', 'Nearby'
    ],


    models : ['Categories'],

    stores : ['Categories'],

    controllers: [
        'DealSpot.controller.Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        window.addEventListener("online", function(){
            console.log('online');
            
        });
        window.addEventListener("offline", function(){
            console.log('offline');
            
        });

        // var main = Ext.create('Ext.tab.Panel', {
        //             tabBarPosition: 'bottom',
        //             id: 'main',
        //             items: [
        //                 {
        //                     xtype: 'mapView',
        //                     title: 'Locations',
        //                     iconCls: 'icon-location'
        //                 },
        //                 {
        //                     title: 'Fuels',
        //                     iconCls: 'icon-fuel',
        //                     xtype: 'ourFuels'
        //                 },
        //                 {
        //                     title: 'Vehicles',
        //                     iconCls: 'icon-vehicles',
        //                     xtype: 'vehiclesNav'
        //                 },
        //                 {
        //                     title: 'Contact',
        //                     iconCls: 'icon-contact',
        //                     xtype: 'contact'
        //                 }
        //             ]
        //         });

        // Initialize the main view
        Ext.Viewport.add(Ext.create('DealSpot.view.Main'));

        Ext.Viewport.setMasked({
            message: "Loading...",
            xtype: 'loadmask'
        });
        setTimeout(function() {
            // code to be executed when loading
            // Unmask the container
            Ext.Viewport.setMasked(false);
        }, 1000);

        var os = Ext.os.name;

        function launchApp(){
            var onLine=false;
            if(os){
                onLine = navigator.onLine;
            }else{
                onLine = Ext.device.Connection.isOnline();
            }

            if(!onLine) {
                Ext.device.Notification.show({
                    title: 'DealSpot',
                    message: 'Internet not available',
                    buttons: 'Retry',
                    callback: function() {
                        launchApp();
                    }
                });
            } else {
                console.log('OS online');
            //    loadMapScript();
            }
        }

        launchApp();

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
