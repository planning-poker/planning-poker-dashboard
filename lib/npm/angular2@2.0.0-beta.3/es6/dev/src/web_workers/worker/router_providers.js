/* */ 
"format cjs";
import { Provider, NgZone, APP_INITIALIZER } from 'angular2/core';
import { PlatformLocation } from 'angular2/src/router/platform_location';
import { WebWorkerPlatformLocation } from './platform_location';
import { ROUTER_PROVIDERS_COMMON } from 'angular2/src/router/router_providers_common';
export var WORKER_APP_ROUTER = [
    ROUTER_PROVIDERS_COMMON,
    new Provider(PlatformLocation, { useClass: WebWorkerPlatformLocation }),
    new Provider(APP_INITIALIZER, {
        useFactory: (platformLocation, zone) => () => initRouter(platformLocation, zone),
        multi: true,
        deps: [PlatformLocation, NgZone]
    })
];
function initRouter(platformLocation, zone) {
    return zone.run(() => { return platformLocation.init(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIvcm91dGVyX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6WyJpbml0Um91dGVyIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUFpQixRQUFRLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWU7T0FDeEUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVDQUF1QztPQUMvRCxFQUFDLHlCQUF5QixFQUFDLE1BQU0scUJBQXFCO09BQ3RELEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2Q0FBNkM7QUFHbkYsV0FBVyxpQkFBaUIsR0FBRztJQUM3Qix1QkFBdUI7SUFDdkIsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUseUJBQXlCLEVBQUMsQ0FBQztJQUNyRSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQ2Y7UUFDRSxVQUFVLEVBQUUsQ0FBQyxnQkFBMkMsRUFBRSxJQUFZLEtBQUssTUFDM0QsVUFBVSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQztRQUNsRCxLQUFLLEVBQUUsSUFBSTtRQUNYLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztLQUNqQyxDQUFDO0NBQ2hCLENBQUM7QUFFRixvQkFBb0IsZ0JBQTJDLEVBQUUsSUFBWTtJQUMzRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsTUFBTUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUM3REEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcGxpY2F0aW9uUmVmLCBQcm92aWRlciwgTmdab25lLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7V2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnLi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlNfQ09NTU9OfSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlcl9wcm92aWRlcnNfY29tbW9uJztcbmltcG9ydCB7UHJvbWlzZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbmV4cG9ydCB2YXIgV09SS0VSX0FQUF9ST1VURVIgPSBbXG4gIFJPVVRFUl9QUk9WSURFUlNfQ09NTU9OLFxuICBuZXcgUHJvdmlkZXIoUGxhdGZvcm1Mb2NhdGlvbiwge3VzZUNsYXNzOiBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9ufSksXG4gIG5ldyBQcm92aWRlcihBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChwbGF0Zm9ybUxvY2F0aW9uOiBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLCB6b25lOiBOZ1pvbmUpID0+ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0Um91dGVyKHBsYXRmb3JtTG9jYXRpb24sIHpvbmUpLFxuICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgZGVwczogW1BsYXRmb3JtTG9jYXRpb24sIE5nWm9uZV1cbiAgICAgICAgICAgICAgIH0pXG5dO1xuXG5mdW5jdGlvbiBpbml0Um91dGVyKHBsYXRmb3JtTG9jYXRpb246IFdlYldvcmtlclBsYXRmb3JtTG9jYXRpb24sIHpvbmU6IE5nWm9uZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gem9uZS5ydW4oKCkgPT4geyByZXR1cm4gcGxhdGZvcm1Mb2NhdGlvbi5pbml0KCk7IH0pO1xufVxuIl19