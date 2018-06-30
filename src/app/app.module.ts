import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ConfirmationModule } from './confirmation/confirmation.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    imports: [
        BrowserModule, BrowserAnimationsModule, ConfirmationModule, LayoutModule,
        HighlightModule.forRoot({ theme: 'googlecode' }),
        RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
