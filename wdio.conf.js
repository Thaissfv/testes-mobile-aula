const {join} = require ('path')

exports.config= {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "plataformName": "Android",
        "plataformVersion": "13",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join (process.cwd(), './android/loja-ebac.apk')
    }]
}