Ext.define('DealSpot.store.UserProfile', {
    extend : 'Ext.data.Store',
    config : {
        model : 'DealSpot.model.UserProfile',
        storeId: 'userProfileStore',
        // sorters: {
        //     property: 'date',
        //     direction: 'ASC'
        // }
    }
});