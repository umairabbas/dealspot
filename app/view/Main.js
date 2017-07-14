Ext.define('DealSpot.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Map',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: true,
                xtype: 'deals'
            },
            {
                title: 'Deals',
                iconCls: 'action',
                styleHtmlContent: true,
                scrollable: true,
                xtype: 'deals'
            },
            {
                title: 'Settings',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: true,
                xtype: 'deals'
            },
            {
                title: 'Contact',
                iconCls: 'action',
                styleHtmlContent: true,
                scrollable: true,
                xtype: 'deals'
            }
        ]
    }
});
