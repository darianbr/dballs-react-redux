export default function configureRouter (router) {
  router.add([
    {name: 'home', path: '/'},
    {name: 'dashboard', path: '/dashboard'}
  ])

  router.canActivate('home', () => (to, from, done) => {
    done({redirect: {name: 'dashboard'}})
  })

  return router
}
