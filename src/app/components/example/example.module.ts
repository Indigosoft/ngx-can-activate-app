import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HighlightModule } from 'ngx-highlightjs';
import { ExampleComponent } from './example.component';

@NgModule({
    imports: [ CommonModule, MatGridListModule, HighlightModule ],
    declarations: [ ExampleComponent ],
    exports: [ ExampleComponent ]
})
export class ExampleModule {}
