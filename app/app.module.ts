import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";

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
        NativeScriptRouterModule.forRoot(routesConfig)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
