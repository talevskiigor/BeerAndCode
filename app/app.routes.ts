import { HomeComponent } from './pages/home';
import { LoginComponent} from './pages/login';

export const routesConfig = [
    // { path: '', component: HomeComponent},
    { path: '', redirectTo: 'login', pathMatch:'full'},
    { path: 'login', component: LoginComponent}
];


export const routesComponents = [
    HomeComponent,
    LoginComponent
]