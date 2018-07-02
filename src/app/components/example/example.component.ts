import { Component } from '@angular/core';

interface Example {
    title: string;
    description?: string;
    language: 'typescript' | 'bash' | 'haml';
    code: string;
}

const EXAMPLES: Example[] = [
    {
        title: 'Install package ngx-can-activate-app',
        language: 'bash', code: `
npm i -s ngx-can-activate-app
`
    },
    {
        title: 'Create pre-activation component',
        description: 'The component will be displayed before the application is activated',
        language: 'typescript', code: `
import { NgxCanActivateApp } from 'ngx-can-activate-app';

@Component({
  selector: 'app-confirmation',
  template: '<button (click)="onActivate()">Activate</button>'
})
export class ConfirmationComponent {
  constructor(private canActivateApp: NgxCanActivateApp) {}

  onActivate() { this.canActivateApp.activate(); }
}
`
    },
    {
        title: 'Declare component',
        description: 'Add your component to declarations',
        language: 'typescript', code: `
@NgModule({
  declarations: [ AppComponent, ConfirmationComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
`
    },
    {
        title: 'Import module and setup component',
        description: 'You first must initialize the module with the component',
        language: 'typescript', code: `
import { NgxCanActivateAppModule } from 'ngx-can-activate-app';

@NgModule({
  imports: [
    NgxCanActivateAppModule.forRoot({
      component: ConfirmationComponent
    })
  ],
  declarations: [ AppComponent, ConfirmationComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
`
    },
    {
        title: 'Setup selector to index.html',
        description: 'Add selector of the component to index.html file',
        language: 'haml', code: `
<!doctype html>
<html lang="en">
<head></head>
<body>
  <app-root>
      <app-confirmation></app-confirmation>
  </app-root>
</body>
</html>
`
    }
];

@Component({
    selector: 'app-example',
    templateUrl: 'example.component.html',
    styleUrls: [ 'example.component.scss' ]
})
export class ExampleComponent {

    examples: Example[] = EXAMPLES;

}
