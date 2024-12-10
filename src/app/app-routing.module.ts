import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '@layouts/sidebar/sidebar.component';
import { AboutComponent } from '@pages/about/about.component';

const routes: Routes = [
  { path: '', component: SidebarComponent },
  { path: 'home', component: SidebarComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
