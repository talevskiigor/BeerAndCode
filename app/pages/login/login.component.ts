import { Component, OnInit } from '@angular/core';
import { Page} from 'ui/page';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private page: Page) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
     }
}