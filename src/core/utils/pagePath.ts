/**
 * @example
 * router.push(pagePath.HomePage())
 */
export const pagePath = {
  HomePage: () => '/',
  SignUpPage: () => '/signup',
  ProfilePage: () => '/me',
  ActivityPage: () => '/activity',
  MyActivityPage: () => '/activity/me',
  ViewProfilePage: (id: string) => `/profile/${id}`,
  CreateActivityPage: () => '/activity/create',
  ActivityDetailPage: (id: string) => `/activity/${id}`,
}
