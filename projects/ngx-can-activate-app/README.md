# NgxCanActivateApp

[![Can Activate Angular](https://raw.githubusercontent.com/IndigoSoft/ngx-can-activate-app/master/media/preview.png)](https://ngx-can-activate-app-demo.stackblitz.io/)


## 1. Install ngx-can-activate-app

```bash
npm i -s ngx-can-activate-app
```


## 2. Create component

It will be displayed until your application has finished activating.

```typescript
import { NgxCanActivateApp } from 'ngx-can-activate-app';

@Component({
  selector: 'app-confirmation',
  template: '<button (click)="onActivate()">Activate</button>'
})
export class ConfirmationComponent {
  constructor(private canActivateApp: NgxCanActivateApp) {}

  onActivate() { this.canActivateApp.activate(); }
}
```

## 3. Declare the component

Add it to declarations.

```typescript
@NgModule({
  declarations: [ AppComponent, ConfirmationComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

## 4. Import NgxCanActivateAppModule

Then add your component to the module's initialization.

```typescript
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
```

## 5. Specify a selector in index.html

Add the selector of your component to index.html.

```html
<!doctype html>
<html lang="en">
<head></head>
<body>
  <app-root>
      <app-confirmation></app-confirmation>
  </app-root>
</body>
</html>
```
