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
      wrappers: ['@/wrapper/authRoute'],
    },

    {
      name: 'login',
      path: '/login',
      component: './Login',
    },
    {
      name: 'register',
      path: '/register',
      component: './Register',
    },
  ],

  npmClient: 'npm',
});
