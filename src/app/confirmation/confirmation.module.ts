import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxCanActivateAppModule } from '../../../projects/ngx-can-activate-app';
import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationService } from './confirmation.service';

@NgModule({
    imports: [
        CommonModule, MatButtonModule, MatSnackBarModule, MatToolbarModule,
        NgxCanActivateAppModule.forRoot({ component: ConfirmationComponent })
    ],
    declarations: [ ConfirmationComponent ],
    providers: [ ConfirmationService ]
})
export class ConfirmationModule {}
