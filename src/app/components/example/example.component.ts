import { Component } from '@angular/core';

interface Example {
    title: string;
    description?: string;
    language: 'typescript' | 'bash' | 'haml';
    code: string;
}

const EXAMPLES: Example[] = [
    {
        title: 'Install ngx-can-activate-app',
        language: 'bash', code: `
npm i -s ngx-can-activate-app
`
    },
    {
        title: 'Create a component',
        description: 'It will be displayed until your application has finished activating.',
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
        title: 'Declare the component',
        description: 'Add it to declarations.',
        language: 'typescript', code: `
@NgModule({
  declarations: [ AppComponent, ConfirmationComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
`
    },
    {
        title: 'Import NgxCanActivateAppModule',
        description: `Then add your component to the module's initialization.`,
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
        title: 'Specify a selector in index.html',
        description: 'Add the selector of your component to index.html.',
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
