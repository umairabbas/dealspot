Ext.define('DealSpot.view.Startup', {
    extend: 'Ext.Container', 
    requires: 'Ext.form.Panel',
    xtype: 'startup',
    config : {
        fullscreen : true,
        layout: 'vbox',
        cls: 'backCls',
        items:[{
            xtype: 'titlebar',
            docked: 'top',
            cls:'topbar',
            title : 'Select Language and Country',
            id:'editUserTitlebar',
        },{
            xtype: 'formpanel',
            layout:'vbox',
            flex: 1,
            scrollable: false,
            baseCls: 'backCls',
            id: 'startupForm',
            items:[{
                xtype: 'container',
                layout: 'vbox',
                items:[
                // {
                //     xtype:'textfield',
                //     name : 'name',
                //     cls: 'backCls',
                //     labelCls: 'textCls',
                //     inputCls: 'selectFieldInputCls',
                //     clearIcon: false,
                //     label: 'Name',
                //     labelAlign: 'top',
                //     required: false,
                // },
                {
                 xtype:'selectfield',
                  name : 'language',
                  cls: 'backCls',
                  labelCls: 'textCls',
                  label: 'Language',
                  labelAlign: 'top',
                  inputCls: 'selectFieldInputCls',
                  Cls: 'selectFieldCls',
                  required: true,
                  options: [
                      {
                          "text": "Please select",
                          "value": ""
                      },
                      {
                          "text": "English",
                          "value": "en"
                      },
                      {
                          "text": "Deutsch",
                          "value": "de"
                      }, {
                        "value" : "",
                        "text" : ""
                      }
                  ]
                },{
                    xtype:'selectfield',
                    name : 'country',
                    label: 'Country',
                    labelCls: 'textCls',
                    cls: 'backCls',
                    labelAlign: 'top',
                    inputCls: 'selectFieldInputCls',
                    Cls: 'selectFieldCls',
                    required: true,                    
                    options: [{
                        "value" : "",
                        "text" : "Please select"
                      }, {
                        "value" : "DE",
                        "text" : "Germany"
                      }, {
                        "value" : "CH",
                        "text" : "Switzerland"
                      }, {
                        "value" : "TR",
                        "text" : "Turkey"
                      }, {
                        "value" : "",
                        "text" : ""
                      }]
                }
                // ,{
                //     xtype:'numberfield',
                //     name : 'zip',
                //     label: 'Zipcode',
                //     labelAlign: 'top',
                //     required: false,
                // }
                ]
            }]
        },{
            xtype:'container',
            flex: 1, 
            layout:'hbox',
            cls: 'circleBaseCls',
            baseCls: 'backCls',
            items:[{
                xtype: 'button',
                cls: 'circleBtn',
                //baseCls: 'circleBaseCls',
                id: 'startupSaveBtn',
                width:'100%',
                pressedCls:'somecls'
            }]
        }]
    }
});