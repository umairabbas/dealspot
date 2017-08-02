Ext.define('DealSpot.common.Util', {
    statics: {
        language: 'en',
        country: 'DE',
        zip: 52074,
        name: '',
        prevSelectedMarker: null,
        url: '',
        twitterLink: 'https://www.twitter.com/',
        fbLink: 'https://www.facebook.com/',
        clickDelay: 450,    //successive clicks
        openUrl: function(url){
            console.log(url);
            Ext.device.Device.openURL(url);
        },
        checkUserState:function(){
            var userProfileStore = Ext.getStore('userProfileStore');
            userProfileStore.load();
            if(userProfileStore.getCount()!=0){
                this.country = userProfileStore.getAt(0).get('country');
                this.name = userProfileStore.getAt(0).get('name');
                this.language = userProfileStore.getAt(0).get('language');
                this.zip = userProfileStore.getAt(0).get('zip');
                return true;
            }else{
                return false;
            }
        },
        Alert: function(title, msg){
            Ext.Msg.defaultAllowedConfig.showAnimation = false;
            Ext.Msg.defaultAllowedConfig.hideAnimation = false;
            Ext.defer(function(){
                Ext.Msg.show({
                    title: title == "" ? null : title,
                    message: msg,
                    width: 300,
                    buttons: Ext.MessageBox.OK,
                    fn: function(buttonId) {
                        var delayHide = function(){
                            Ext.Msg.hide();
                            var i = Ext.select('.x-msgbox');
                            var j = i.elements[0];
                            j.style.display = "none";
                        }
                        Ext.defer(delayHide, 100);
                    }
                });
    
            }, 200);
        },
    }
});