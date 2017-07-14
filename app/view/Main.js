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
                styleHtmlContent: true,
                scrollable: true,
                xtype: 'deals'
            },
            {
                title: 'Deals',
                iconCls: 'star',
                styleHtmlContent: true,
                scrollable: true,
                xtype: 'deals'
            },
            {
                title: 'Settings',
                iconCls: 'settings',
                styleHtmlContent: true,
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
