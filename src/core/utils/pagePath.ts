/**
 * @example
 * router.push(pagePath.HomePage())
 */
export const pagePath = {
  HomePage: () => '/',
  LoginPage: () => '/login',
  SignUpPage: () => '/signup',
  ProfilePage: () => '/me',
  ActivityPage: () => '/activity',
  MyActivityPage: () => '/activity/my',
  ViewProfilePage: (id: string) => `/profile/${id}`,
  CreateActivityPage: () => '/activity/create',
  ActivityDetailPage: (id: string) => `/activity/${id}`,
  MessagePage: (id:string) => `/message/${id}`,
}
