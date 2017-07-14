Ext.define('DealSpot.common.Util', {
    statics: {
        currentLang: 'en',
        prevSelectedMarker: null,
        url: '',
        twitterLink: 'https://www.twitter.com/',
        fbLink: 'https://www.facebook.com/',
        openUrl: function(url){
            console.log(url);
            Ext.device.Device.openURL(url);
        }
    }
});