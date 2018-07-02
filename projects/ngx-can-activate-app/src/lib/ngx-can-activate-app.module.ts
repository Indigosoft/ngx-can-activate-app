import { ANALYZE_FOR_ENTRY_COMPONENTS, APP_INITIALIZER, ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { first } from 'rxjs/operators';
import { NGX_CAN_ACTIVATE_APP_CONFIG, NgxCanActivateAppConfig, NgxCanActivateAppNodeConfig, NgxCanActivateAppSelectorConfig } from './ngx-can-activate-app.config';
import { NgxCanActivateApp } from './ngx-can-activate-app.service';

export function canActivateAppFactory(
    canActivateApp: NgxCanActivateApp,
    config: NgxCanActivateAppConfig,
    componentFactoryResolver: ComponentFactoryResolver,
    injector: Injector
): () => Promise<any> {
    return () => new Promise<any>((resolve, reject): void => {
            const factory: ComponentFactory<any> =
                componentFactoryResolver.resolveComponentFactory(config.component);

            const rootSelectorOrNode: string | any =
                (config as NgxCanActivateAppSelectorConfig).selector ||
                (config as NgxCanActivateAppNodeConfig).node ||
                factory.selector;

            const componentRef: ComponentRef<any> =
                factory.create(injector, [], rootSelectorOrNode);

            const applicationRef: ApplicationRef = injector.get(ApplicationRef);
            applicationRef.attachView(componentRef.hostView);

            canActivateApp.getActivate().pipe(first()).subscribe((event) => {
                event.activated ? resolve() : reject(event.reason);

                applicationRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
    );
}

@NgModule({})
export class NgxCanActivateAppModule {
    static forRoot(config: NgxCanActivateAppConfig): ModuleWithProviders {
        return {
            ngModule: NgxCanActivateAppModule,
            providers: [
                NgxCanActivateApp,
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config.component, multi: true },
                { provide: NGX_CAN_ACTIVATE_APP_CONFIG, useValue: config },
                {
                    provide: APP_INITIALIZER, useFactory: canActivateAppFactory,
                    deps: [
                        NgxCanActivateApp, NGX_CAN_ACTIVATE_APP_CONFIG,
                        ComponentFactoryResolver, Injector
                    ], multi: true
                }
            ]
        };
    }
}
