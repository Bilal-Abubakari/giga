import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {RequestFiberComponent} from "./request-fiber/request-fiber.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'request-fiber', component: RequestFiberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
