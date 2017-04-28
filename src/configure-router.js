export default function configureRouter (router) {
  router.add([
    {name: 'home', path: '/'},
    {name: 'dashboard', path: '/dashboard'},
    {name: 'foo', path: '/foo'}
  ])

  router.canActivate('home', () => (to, from, done) => {
    done({redirect: {name: 'dashboard'}})
  })

  return router
}
