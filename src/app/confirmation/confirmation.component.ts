import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationService } from './confirmation.service';

@Component({
    selector: 'app-confirmation',
    templateUrl: 'confirmation.component.html',
    styleUrls: [ 'confirmation.component.scss' ]
})
export class ConfirmationComponent {

    deactivated: boolean;

    constructor(private service: ConfirmationService, private snackBar: MatSnackBar) {
        if (this.service.activated) {
            this.service.accept();
        }
    }

    onActivate() {
        this.service.accept();
        this.snackBar.open('🚀 Application Activated!', '', {
            duration: 2000
        });
    }

    onAbort() {
        this.service.abort();
        this.snackBar.open('🚀 Application Deactivated!', '', {
            duration: 2000
        });
        this.deactivated = true;
    }

    onReload() {
        window.location.reload(true);
    }

}
