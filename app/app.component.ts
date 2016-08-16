import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SearchComponent } from '../app/components/search/search.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { AboutComponent } from '../app/components/about/about.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    entryComponents: [SearchComponent, NavbarComponent, AboutComponent],
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent { }
