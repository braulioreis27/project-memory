// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';
import { ColaboradorDetailComponent } from './colaborador-detail/colaborador-detail.component';
import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/colaboradores', pathMatch: 'full' },
  { path: 'colaboradores', component: ColaboradorListComponent },
  { path: 'colaboradores/:id', component: ColaboradorDetailComponent },
  { path: 'add-colaborador', component: ColaboradorFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
