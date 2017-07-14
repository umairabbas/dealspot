Ext.define('DealSpot.view.Categories', {
    extend: 'Ext.Container',
    xtype: 'categories',
    config: {
        layout: 'vbox',
        items: [{
                    xtype: 'list',
                    flex: 1,
                    id: 'vehicleListItem',
                    store: 'catStore',
                    isVehicleItemTaped: false,
                    onItemDisclosure: true,
                    selectedCls: '',
                    itemTpl: '<img src={logo}><strong>{catname}</strong>',
                    listeners: {
                        painted: function(element) {
                            var item = element.down('.x-list-item-first');
                        //    this.setHeight(this.itemsCount*item.getHeight());
                        }
                    }
                }
        ]
    }
});