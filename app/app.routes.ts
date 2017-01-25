import { HomeComponent } from './pages/home';
import { LoginComponent} from './pages/login';
import { AuthGuard} from './guards/auth.guard';
export const routesConfig = [
     
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent}
];


export const routesComponents = [
    HomeComponent,
    LoginComponent
]