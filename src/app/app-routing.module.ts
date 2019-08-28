import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'addr1', loadChildren: () => import('./addr1/addr1.module').then(m => m.Addr1PageModule) },
  { path: 'addr2', loadChildren: () => import('./addr2/addr2.module').then(m => m.Addr2PageModule) },
  { path: 'addr3', loadChildren: () => import('./addr3/addr3.module').then(m => m.Addr3PageModule) },
  { path: 'addr4', loadChildren: './addr4/addr4.module#Addr4PageModule' },
  { path: 'addr5', loadChildren: './addr5/addr5.module#Addr5PageModule' },
  { path: 'addr6', loadChildren: './addr6/addr6.module#Addr6PageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
