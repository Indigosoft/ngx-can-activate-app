import { Injectable } from '@angular/core';
import { NgxActivateAppInitializer } from './ngx-can-activate-app.config';

@Injectable()
export class NgxCanActivateApp {

    constructor(private activate$: NgxActivateAppInitializer) {}

    activate() { this.emit({ activated: true }); }

    abort(reason: string) { this.emit({ activated: false, reason }); }

    private emit(event: any) {
        this.activate$.next(event);
        this.activate$.complete();
    }

}
