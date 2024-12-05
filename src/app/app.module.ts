import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { ContainerComponent } from './components/layouts/container/container.component';

@NgModule({
  declarations: [AppComponent, CardComponent, ProductListComponent, ContainerComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
