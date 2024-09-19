import { Routes } from '@angular/router';

// ui
import { AppListsComponent } from './lists/lists.component';
import { AppTablesComponent } from './tables/tables.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
    ],
  },
];
