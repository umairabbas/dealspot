Ext.define('DealSpot.view.Contact', {
    extend: 'Ext.Container',
    xtype: 'contact',
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