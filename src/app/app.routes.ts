import { Route } from '@angular/router';

import { PageLayoutComponent } from '@root/page-layout';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/routes-info',
        pathMatch: 'full',
      },
      {
        path: 'routes-info',
        loadChildren: () =>
          import('./views/routes-info/routes-info.module').then(
            (module) => module.RoutesInfoModule,
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
