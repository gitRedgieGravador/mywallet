
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: '/expenses', name: 'expenses', component: () => import('pages/expenses.vue') },
      { path: '/reports', name: 'reports', component: () => import('pages/reports.vue') },
      { path: '/account', name: 'account', component: () => import('pages/account.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
