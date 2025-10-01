export const apis = {
  auth: {
    login: '/auth/token',
    logout: '/auth/logout',
    refresh: '/auth/refresh-token',
  },
  user: {
    users: '/users',
    user: '/users/:id',
    addUser: '/users',
    update_user: '/users/:id',
    delete_user: '/users/:id',
  },
};
