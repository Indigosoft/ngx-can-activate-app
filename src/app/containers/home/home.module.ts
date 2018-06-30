import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExampleModule } from '../../components/example/example.module';

import { HomePageComponent } from './home.component';
import { HomeRouting } from './home.routing';

@NgModule({
    imports: [ CommonModule, ExampleModule, HomeRouting, MatButtonModule, MatToolbarModule ],
    declarations: [ HomePageComponent ]
})
export class HomePageModule {}
