import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate/can-deactivate.guard';
import { EditorComponent } from './editor/editor.component';
import { SampleCheckComponent } from './sample-check/sample-check.component';

const routes: Routes = [
  { path: '', redirectTo: '/text-editor', pathMatch: 'full' },
  { path: 'text-editor', component: EditorComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'navigation-check', component: SampleCheckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
