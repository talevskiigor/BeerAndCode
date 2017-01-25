import { Component, OnInit } from '@angular/core';
import { Page} from 'ui/page';
import { AuthService } from './../../services';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    public username: string = 'igor.talevski@gmail.com';
    public password: string = '******';

    constructor(private page: Page, private auth: AuthService) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
     }

     public login(){
         this.auth.login(this.username, this.password)
         .subscribe(
             ()=>alert('OK'),
             (error)=>alert('no, problem with login')
         );
     }
}