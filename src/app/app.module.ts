import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//rutas
import { APP_ROUTING } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesCardComponent } from './components/heroes-card/heroes-card.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
//services
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeroeComponent,
    HeroesComponent,
    HeroesCardComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
