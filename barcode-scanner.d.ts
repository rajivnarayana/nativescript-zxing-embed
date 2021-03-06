declare module "barcode-scanner" {
    /**
     * The options object passed into the scan function.
     */
    export interface ScanOptions {
      /**
       * The label of the button used to close the scanner.
       * Default: "Close".
       * iOS only.
       */
      cancelLabel?: string;

      /**
       * The message shown when looking for something to scan.
       * Default: "Place a barcode inside the viewfinder rectangle to scan it."
       * Android only.
       */
      message?: string;

      /**
       * Start the scanner with the front camera?
       * Default: false, so the back camera is used.
       * Android only.
       */
      preferFrontCamera?: boolean;

      /**
       * While scanning for a barcode show a button to flip to the other camera (front or back).
       * Default: false, so no flip button is shown.
       * Android only (on iOS the button is always shown).
       */
      showFlipCameraButton?: boolean;
    }

    export function available(): Promise<boolean>;
    export function hasCameraPermission(context: any): Promise<boolean>;
    export function requestCameraPermission(context: any): Promise<boolean>;
    export function scan(options: ScanOptions): Promise<any>;
}