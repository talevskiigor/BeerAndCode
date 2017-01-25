import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./app.component";
import {AuthService, ConfigService} from './services';

import { routesComponents, routesConfig} from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        ...routesComponents
        ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routesConfig),
        NativeScriptHttpModule,
        NativeScriptFormsModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        AuthService,
        ConfigService
    ]
})
export class AppModule { }
