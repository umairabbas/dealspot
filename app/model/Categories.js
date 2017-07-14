Ext.define('DealSpot.model.Categories', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [
            {
                name: 'uid',
                type: 'string'
            },
            {
                name: 'catname',
                type: 'string'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'catList',
            //url: 'http://192.168.6.193/api/pacp/getRSSFeeds',
            //reader : {
            //    type : 'json',
            //    rootProperty : 'data',
            //    successProperty: 'success'
            //}
        }
    }
});

//example
// "id": "51",
// "itemid": "01001",
// "displayname": "",
// "salesdescription": "Nectar Consistency (Individual) 200/15g packs - 200/4oz servings",
// "type": "InvtPart",
// "baseprice": "69.90"