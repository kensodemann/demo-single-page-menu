import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'addr1', loadChildren: () => import('./addr1/addr1.module').then(m => m.Addr1PageModule) },
  { path: 'addr2', loadChildren: () => import('./addr2/addr2.module').then(m => m.Addr2PageModule) },
  { path: 'addr3', loadChildren: () => import('./addr3/addr3.module').then(m => m.Addr3PageModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
