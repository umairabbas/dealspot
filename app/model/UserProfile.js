Ext.define('DealSpot.model.UserProfile', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [
            {
                name: 'uid',
                type: 'int'
            },
            {
                name: 'authentication_token',
                type: 'string'
            },
            {
                name: 'address',
                type: 'string'
            },
            {
                name: 'email',
                type: 'string'
            },
            {
                name: 'internalid',
                type: 'string'
            },
            {
                name: 'name',
                type: 'string'
            },
            // {
            //     name: 'last_auth_on',
            //     type: 'date'
            // },
            {
                name: 'status',
                type: 'string'
            },
            {
                name: 'language',
                type: 'string'
            },
            {
                name: 'country',
                type: 'string'
            },
            {
                name: 'country',
                type: 'string'
            },
            {
                name: 'zip',
                type: 'int'
            },
        ],
        proxy: {
            type: 'localstorage',
            id: 'userProfileProxy'
        }
    }
});