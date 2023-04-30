import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { HeroComponent } from './home/hero/hero.component';
import { ServiceHeroComponent } from './home/service-hero/service-hero.component';
import {NgOptimizedImage} from "@angular/common";
import { InfoHeroComponent } from './home/info-hero/info-hero.component';
import { SubscriptionComponent } from './home/subscription/subscription.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RequestFiberComponent } from './request-fiber/request-fiber.component';
import { FormComponent } from './request-fiber/form/form.component';
import { InputComponent } from './shared/components/input/input.component';
import { SectionHeadingComponent } from './request-fiber/section-heading/section-heading.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SelectComponent } from './shared/components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ButtonComponent,
    HeroComponent,
    ServiceHeroComponent,
    InfoHeroComponent,
    SubscriptionComponent,
    FooterComponent,
    RequestFiberComponent,
    FormComponent,
    InputComponent,
    SectionHeadingComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgOptimizedImage,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
