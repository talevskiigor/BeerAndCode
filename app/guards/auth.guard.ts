import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import appSettings = require("application-settings");

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    public canActivate(){
        if(appSettings.getBoolean('login')){
            return true;
        }

        this.router.navigate(['login']);
        return false;

    }
}