import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';  
import { MovementsService } from './shared/';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MovementsService, HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'Cash Flow works!';
}
