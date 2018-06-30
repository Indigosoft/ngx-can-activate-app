import { APP_INITIALIZER, ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { NGX_CAN_ACTIVATE_APP_CONFIG, NgxActivateAppInitializer, NgxCanActivateAppConfig, NgxCanActivateAppNodeConfig, NgxCanActivateAppSelectorConfig } from './ngx-can-activate-app.config';
import { NgxCanActivateApp } from './ngx-can-activate-app.service';

export function canActivateAppModule(
    activate: NgxActivateAppInitializer,
    config: NgxCanActivateAppConfig,
    componentFactoryResolver: ComponentFactoryResolver,
    injector: Injector
): () => Promise<any> {
    return () => new Promise<any>((resolve, reject) => {
            const factory: ComponentFactory<any> =
                componentFactoryResolver.resolveComponentFactory(config.component);

            const rootSelectorOrNode: string | any =
                (config as NgxCanActivateAppSelectorConfig).selector ||
                (config as NgxCanActivateAppNodeConfig).node ||
                factory.selector;

            const componentRef: ComponentRef<any> =
                factory.create(injector, [], rootSelectorOrNode);

            injector.get(ApplicationRef).attachView(componentRef.hostView);

            activate.subscribe((event) => event.activated ? resolve() : reject(event.reason));
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
                NgxActivateAppInitializer,
                { provide: NGX_CAN_ACTIVATE_APP_CONFIG, useValue: config },
                {
                    provide: APP_INITIALIZER, useFactory: canActivateAppModule,
                    deps: [
                        NgxActivateAppInitializer, NGX_CAN_ACTIVATE_APP_CONFIG,
                        ComponentFactoryResolver, Injector
                    ], multi: true
                }
            ]
        };
    }
}
