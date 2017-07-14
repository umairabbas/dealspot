/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['glober']='';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['131px', '380px','auto','auto','auto', 'auto'],
                text: "Loading...",
                font: ['glober', 14, "rgba(80,80,80,1.00)", "normal", "none", ""]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['135px', '222px','50px','23px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'pin4',
                type: 'image',
                rect: ['-1646px', '-1758px','3600px','3600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pin.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'pin7',
                type: 'image',
                rect: ['-225px', '-261px','750px','750px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pin.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_pin3}": [
                ["style", "left", '-1510px'],
                ["style", "top", '-1310px']
            ],
            "${_pin7}": [
                ["style", "top", '146px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '75px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["style", "width", '75px']
            ],
            "${_Text}": [
                ["style", "top", '380px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(80,80,80,1.00)'],
                ["style", "font-family", 'glober'],
                ["style", "left", '134px'],
                ["style", "font-size", '12px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(237,237,237,1.00)'],
                ["style", "width", '320px'],
                ["style", "height", '480px'],
                ["style", "overflow", 'hidden']
            ],
            "${_pin4}": [
                ["style", "top", '-164px'],
                ["style", "height", '700px'],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-197px'],
                ["style", "width", '700px']
            ],
            "${_logo}": [
                ["style", "top", '222px'],
                ["style", "height", '25px'],
                ["style", "opacity", '0'],
                ["style", "left", '132px'],
                ["style", "width", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4250,
            autoPlay: true,
            timeline: [
                { id: "eid250", tween: [ "style", "${_pin4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid251", tween: [ "style", "${_pin4}", "opacity", '1', { fromValue: '0'}], position: 2480, duration: 15, easing: "easeOutQuad" },
                { id: "eid280", tween: [ "style", "${_pin4}", "opacity", '1', { fromValue: '1'}], position: 2495, duration: 0, easing: "easeInCubic" },
                { id: "eid281", tween: [ "style", "${_pin4}", "opacity", '0', { fromValue: '1'}], position: 4111, duration: 139, easing: "easeInCubic" },
                { id: "eid292", tween: [ "style", "${_pin7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInQuart" },
                { id: "eid293", tween: [ "style", "${_pin7}", "opacity", '1', { fromValue: '1'}], position: 3500, duration: 0, easing: "easeInCubic" },
                { id: "eid287", tween: [ "style", "${_pin7}", "opacity", '1', { fromValue: '1'}], position: 3533, duration: 0, easing: "easeInCubic" },
                { id: "eid285", tween: [ "style", "${_pin7}", "opacity", '0', { fromValue: '1'}], position: 3577, duration: 14, easing: "easeInCubic" },
                { id: "eid291", tween: [ "style", "${_Text}", "left", '134px', { fromValue: '134px'}], position: 0, duration: 0, easing: "easeInCubic" },
                { id: "eid294", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInQuart" },
                { id: "eid283", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '1'}], position: 3111, duration: 0, easing: "easeInCubic" },
                { id: "eid295", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '1'}], position: 3111, duration: 0, easing: "easeInCubic" },
                { id: "eid298", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 4111, duration: 91, easing: "easeInCubic" },
                { id: "eid296", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeInQuart" },
                { id: "eid297", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 3577, duration: 0, easing: "easeInCubic" },
                { id: "eid289", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 3611, duration: 639, easing: "easeInCubic" },
                { id: "eid290", tween: [ "style", "${_Text}", "font-size", '12px', { fromValue: '12px'}], position: 0, duration: 0, easing: "easeInCubic" },
                { id: "eid146", tween: [ "transform", "${_pin4}", "scaleY", '1', { fromValue: '0.08'}], position: 3577, duration: 673, easing: "easeOutSine" },
                { id: "eid139", tween: [ "transform", "${_pin4}", "scaleX", '1', { fromValue: '0.08'}], position: 3577, duration: 673, easing: "easeOutSine" },
                { id: "eid277", tween: [ "style", "${_pin4}", "left", '-191px', { fromValue: '-197px'}], position: 0, duration: 3577, easing: "easeOutQuad" },
                { id: "eid273", tween: [ "style", "${_pin4}", "top", '-168px', { fromValue: '-164px'}], position: 0, duration: 3577, easing: "easeOutQuad" },
                { id: "eid234", tween: [ "style", "${_pin4}", "top", '-31px', { fromValue: '-168px'}], position: 3577, duration: 673, easing: "easeOutQuad" },
                { id: "eid270", tween: [ "transform", "${_pin7}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid268", tween: [ "transform", "${_pin7}", "scaleY", '0.75', { fromValue: '1'}], position: 3000, duration: 500, easing: "easeInBack" },
                { id: "eid269", tween: [ "transform", "${_pin7}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid267", tween: [ "transform", "${_pin7}", "scaleX", '0.75', { fromValue: '1'}], position: 3000, duration: 500, easing: "easeInBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-46969808");
