import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomePageComponent } from './home.component';

const routes: Route[] = [ { path: '', component: HomePageComponent } ];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(routes);
