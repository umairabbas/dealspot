Ext.define('DealSpot.view.Nearby', {
    extend: 'Ext.Container',
    xtype: 'nearby',
    config : {
        layout: 'fit',
        items: [{
            xtype: 'label',
            text: 'nearby label'
        }, 
        {   layout: 'vbox',
            items: [{
                        xtype: 'list',
                        flex: 1,
                        //id: 'vehicleListItem',
                        store: 'dealsStore',
                        //isVehicleItemTaped: false,
                        onItemDisclosure: false,
                        itemCls: 'nearByList',
                        //selectedCls: '',
                        itemTpl: '<div><img src={image}></div><div><strong>{title}</strong><div>{description}</div></div>',
                        listeners: {
                            painted: function(element) {
                                var item = element.down('.x-list-item-first');
                            //    this.setHeight(this.itemsCount*item.getHeight());
                            }
                        }
                    }
            ]
        }
        ]
    }
});