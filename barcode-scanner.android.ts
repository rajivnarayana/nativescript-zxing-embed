import * as common from "./barcode-scanner-common";
import { AndroidApplication, AndroidRequestPermissionsResultEventData, android as appInstance } from "application";

var SCANNER_REQUEST_CODE = 444;
var CAMERA_PERMISSION_REQUEST_CODE = 555;

export function hasCameraPermission(context : any) {
    var hasPermission = android.os.Build.VERSION.SDK_INT < 23; // Android M. (6.0)
    if (!hasPermission) {
        hasPermission = android.content.pm.PackageManager.PERMISSION_GRANTED ==
            android.support.v4.content.ContextCompat.checkSelfPermission(context, android.Manifest.permission.CAMERA);
    }
    return Promise.resolve(hasPermission);
}

export function requestCameraPermission(context : any) {
    return hasCameraPermission(context).then(function(hasPermission: boolean) {
        return hasPermission ||
            new Promise(function(resolve, reject) {
                var callback = function(requestPermissionsEventData: AndroidRequestPermissionsResultEventData) {
                    if (requestPermissionsEventData.requestCode == CAMERA_PERMISSION_REQUEST_CODE) {
                        resolve(android.content.pm.PackageManager.PERMISSION_GRANTED == requestPermissionsEventData.grantResults[0]);
                        appInstance.off(AndroidApplication.requestPermissionsEvent, callback);
                    }
                }
                appInstance.on(AndroidApplication.requestPermissionsEvent, callback);
                android.support.v4.app.ActivityCompat.requestPermissions(context, [android.Manifest.permission.CAMERA], CAMERA_PERMISSION_REQUEST_CODE);
            });
    });
}

export function scan(context : any) {
    
}
