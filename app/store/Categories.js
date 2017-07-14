Ext.define('DealSpot.store.Categories', {
    extend : 'Ext.data.Store',
    config : {
        model : 'DealSpot.model.Categories',
        storeId: 'catStore',
        autoLoad: true
        // sorters: {
        //     property: 'date',
        //     direction: 'ASC'
        // }
    }
});