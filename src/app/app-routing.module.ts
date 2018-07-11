import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactusComponent
  },
  {
    path: 'events',
    component:EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
