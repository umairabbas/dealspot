Ext.define('DealSpot.store.Deals', {
    extend : 'Ext.data.Store',
    config : {
        model : 'DealSpot.model.Deals',
        storeId: 'dealsStore',
        autoLoad: true
        // sorters: {
        //     property: 'date',
        //     direction: 'ASC'
        // }
    }
});