Ext.define('DealSpot.view.Settings', {
    extend: 'Ext.Container',
    xtype: 'settings',
    config : {
        layout: 'fit',
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            cls:'topbar',
            title:'Sample',

            items:[{
                xtype: 'button',
                cls:'txtbtn',
                text: 'En Español',
                align: 'right',
                action: 'espanolPressed',
                value: 'es'
            }]
        }
        ]
    }
});