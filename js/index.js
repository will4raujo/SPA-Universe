import { Router } from './router.js'
        
const router = new Router()
router.add("/","/pages/home.html")
router.add('/about',"/pages/about.html")
router.add('/contact',"/pages/contact.html")
router.add(404,"/pages/404.html")

router.handle()

//navegar através dos botões de retorno e avanço do navegador
window.onpopstate = () => router.handle()
window.route = () => router.route()
