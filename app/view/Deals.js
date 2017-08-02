Ext.define('DealSpot.view.Deals', {
    extend: 'Ext.Container',
    xtype: 'deals',
    config : {
        layout: 'vbox',
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            cls:'topbar',
            title:'Sample',
            items:[{
                xtype: 'button',
                iconCls:'refresh',
                align: 'right'
            }]
        },
        {
            xtype: 'segmentedbutton',
            allowMultiple: false,
            id: 'dealTabs',
            items: [{
                text: 'Near By',
                pressed: true

            },{
                text: 'Categories'
            }]
        },
        {
            xtype: 'panel',
            flex: 1,
            layout: 'card',
            items:[{xtype: 'nearby', active: true},{xtype: 'categories'}],
            id: 'dealsInfoContainer'
        }
        ]
    }
});