import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  tailwindcss: {},
  copy: [{ from: 'src/assets/img', to: 'dist/img' }],
  routes: [
    {
      path: '/',
      redirect: '/home',
    },

    {
      name: 'home',
      path: '/home',
      component: './Home',
    },

    {
      name: 'login',
      path: '/login',
      component: './Login',
    },
  ],

  npmClient: 'npm',
});
