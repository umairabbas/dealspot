Ext.define('DealSpot.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Map',
                iconCls: 'maps',
                xtype: 'settings'
            },
            {
                title: 'Deals',
                iconCls: 'star',
                scrollable: false,
                xtype: 'deals',
                pressed: true,
                active: true
            },
            {
                title: 'Settings',
                iconCls: 'settings',
                scrollable: true,
                xtype: 'settings'
            },
            {
                title: 'Contact',
                iconCls: 'user',
                styleHtmlContent: true,
                scrollable: true,
                xtype: 'contact'
            }
        ]
    }
});
