import { Injectable } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';

export interface ActivateEvent {
    activated: boolean;
    reason?: string;
}

@Injectable()
export class NgxCanActivateApp {

    private activate$: AsyncSubject<ActivateEvent> = new AsyncSubject<ActivateEvent>();

    activate(): void {
        this.emit({ activated: true });
    }

    abort(reason: string): void {
        this.emit({ activated: false, reason });
    }

    getActivate(): Observable<ActivateEvent> {
        return this.activate$.asObservable();
    }

    private emit(event: ActivateEvent) {
        this.activate$.next(event);
        this.activate$.complete();
    }

}
