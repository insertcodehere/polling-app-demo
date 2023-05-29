// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   pollApi: 'http://localhost:3001/api',
//   pollWs: 'ws://localhost:3001/api/ws'
// };

export const environment = {
  production: false,
  pollApi: 'https://kube-demo.redscan.global/polling-server/api',
  pollWs: 'wss://kube-demo.redscan.global/polling-server/api/ws'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
