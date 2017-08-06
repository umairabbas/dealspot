Ext.define('DealSpot.model.Deals', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [
            {
                name: 'uid',
                type: 'string'
            },
            {
                name: 'userId',
                type: 'string'
            },
            {
                name: 'catId',
                type: 'string'
            },
            {
                name: 'dateCreated',
                type: 'date'
            },
            {
                name: 'datePublish',
                type: 'date'
            },
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'image',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            },
            {
                name: 'contact',
                type: 'string'
            },
            {
                name: 'location',
                type: 'string'
            }
        ],
        proxy: {
            type: 'localstorage',
            //id: 'catList',
            //url: 'http://192.168.6.193/api/pacp/getRSSFeeds',
            //reader : {
            //    type : 'json',
            //    rootProperty : 'data',
            //    successProperty: 'success'
            //}
        }
    }
});