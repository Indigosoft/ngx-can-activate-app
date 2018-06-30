import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfirmationService } from '../../confirmation/confirmation.service';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

    constructor(private service: ConfirmationService) {}

    onReset() {
        this.service.reset();
        window.location.reload(true);
    }

}
