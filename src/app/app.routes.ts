import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RadarComponent } from './dashboard-page/radar/radar.component';
import { RadarChartComponent } from './dashboard-page/radar/radar-chart/radar-chart.component';
import { GoldenCircleComponent } from './dashboard-page/golden-circle/golden-circle.component';
import { ResultsContainerComponent } from './dashboard-page/golden-circle/results-container/results-container.component';
import { LoginComponent } from './login/login.component';

// vistas de la pagina web
export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Landing page
    { path: 'dashboard', component: DashboardPageComponent }, // Dashboard
    { path: 'radar', component: RadarComponent }, // radar - preguntas
    { path: 'radar-resultados', component: RadarChartComponent }, // radar - resultados
    { path: 'circulo-dorado', component: GoldenCircleComponent }, // radar - preguntas
    { path: 'circulo-dorado-resultados', component: ResultsContainerComponent }, // radar - resultados
    { path: 'login', component: LoginComponent }, // Login
    //{ path:'**', component: ''} //404
];
