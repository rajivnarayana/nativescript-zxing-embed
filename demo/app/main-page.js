
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = {"title" : "Request permissions"};
    var trace = require("trace");
    trace.setCategories(trace.categories.NativeLifecycle);
    trace.enable();
}

function onTap(args) {
    var button = args.object;
    console.log("Context : " + button._context);
    var barCodeScannerPlugin = require("nativescript-barcode-scanner");
    barCodeScannerPlugin.requestCameraPermission(button._context).then(function(hasPermission) {
        console.log("Has permission: "+hasPermission);
    })
}

function _onTap(args) {
    var button = args.object;
    console.log("Context : " + button._context);
    var barCodeScannerPlugin = require("nativescript-barcodescanner");
    barCodeScannerPlugin.requestCameraPermission(button._context).then(function(hasPermission) {
        console.log("Has permission: "+hasPermission);
    })
}

exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;