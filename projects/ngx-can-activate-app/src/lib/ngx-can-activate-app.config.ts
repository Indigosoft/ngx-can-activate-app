import { Injectable, InjectionToken, Type } from '@angular/core';
import { AsyncSubject } from 'rxjs';

export interface NgxCanActivateAppDefaultSelectorConfig {
    component: Type<any>;
}

export interface NgxCanActivateAppSelectorConfig extends NgxCanActivateAppDefaultSelectorConfig {
    selector: string;
}

export interface NgxCanActivateAppNodeConfig extends NgxCanActivateAppDefaultSelectorConfig {
    node: any;
}

@Injectable()
export class NgxActivateAppInitializer extends AsyncSubject<{ activated: boolean; reason?: string }> {}

export type NgxCanActivateAppConfig =
    NgxCanActivateAppDefaultSelectorConfig
    | NgxCanActivateAppSelectorConfig
    | NgxCanActivateAppNodeConfig;

export const NGX_CAN_ACTIVATE_APP_CONFIG = new InjectionToken<NgxCanActivateAppConfig>('Ngx Can Activate App Config');
