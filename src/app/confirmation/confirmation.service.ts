import { Injectable } from '@angular/core';
import { NgxCanActivateApp } from '../../../projects/ngx-can-activate-app';

@Injectable()
export class ConfirmationService {

    get activated(): boolean {
        return JSON.parse(localStorage.getItem('activated') || 'false');
    }

    constructor(private canActivateApp: NgxCanActivateApp) {}

    accept() {
        this.canActivateApp.activate();
        this.save(true);
    }

    abort() {
        this.canActivateApp.abort('Aborted');
        this.save(false);
    }

    reset() {
        this.save(false);
    }

    private save(state: boolean) {
        localStorage.setItem('activated', JSON.stringify(state));
    }

}
