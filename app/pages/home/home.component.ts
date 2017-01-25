import { Component, OnInit } from '@angular/core';
import appSettings = require("application-settings");
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    logout(){
        appSettings.clear();
        this.router.navigate(['/login']);

    }
}