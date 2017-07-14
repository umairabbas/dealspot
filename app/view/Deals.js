Ext.define('DealSpot.view.Deals', {
    extend: 'Ext.Container',
    xtype: 'deals',
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