# NgxCanActivateApp

[![Can Activate Angular](https://raw.githubusercontent.com/IndigoSoft/ngx-can-activate-app/master/media/preview.png)](https://ngx-can-activate-app-demo.stackblitz.io/)


## 1. Install ngx-can-activate-app

```bash
npm i -s ngx-can-activate-app
```


## 2. Create pre-activation component

The component will be displayed before the application is activated

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

## 3. Declare component

Add your component to declarations and entryComponents

```typescript
@NgModule({
  declarations: [ AppComponent, ConfirmationComponent ],
  entryComponents: [ ConfirmationComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

## 4. Import module and setup component

You first must initialize the module with the component

```typescript
import { NgxCanActivateAppModule } from 'ngx-can-activate-app';

@NgModule({
  imports: [
    NgxCanActivateAppModule.forRoot({
      component: ConfirmationComponent
    })
  ],
  declarations: [ AppComponent, ConfirmationComponent ],
  entryComponents: [ ConfirmationComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

## 5. Setup selector to index.html

Add selector of the component to index.html file

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
