import vue from "vue"
import Router from "vue-router"
import home from "@/components/home.vue";
import profile from "@/components/profile.vue"
import login from "@/components/login.vue"
import register from "@/components/register.vue"
import costumer from "@/components/costumer.vue"
import jual from "@/components/jual.vue"
import Bisnis from "@/components/Bisnis.vue";
import Beranda from "@/components/Beranda.vue";
import Tentang from "@/components/Tentang.vue";
import Kontak from "@/components/Kontak.vue";
import care from "@/components/care.vue"
import berjualan from "@/components/berjualan.vue"
import keranjang from "@/components/keranjang.vue"
import mitra from "@/components/mitra.vue"

vue.use(Router)

function configRoutes() {
    return [
        {
            path: "/",
            name: "home",
            component: home,
        },
        {
            path: "/profile",
            name: "profile",
            component: profile
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/daftar",
            name: "daftar",
            component: register
        },
        {
            path: "/costumer",
            name: "cost",
            component: costumer
        },
        {
            path: "/jual",
            name: "jual",
            component: jual
        },
        {
            path: '/bisnis',
            name: 'Bisnis',
            component: Bisnis
        },
        {
            path: '/beranda',
            name: 'Beranda',
            component: Beranda
        },
        {
            path: '/tentang',
            name: 'Tentang',
            component: Tentang
        },
        {
            path: '/kontak',
            name: 'Kontak',
            component: Kontak
        },
        {
            path: '/berjualan',
            name: 'berjualan',
            component: berjualan
        },
        {
            path: '/care',
            name: 'care',
            component: care
        },
        {
            path: '/keranjang',
            name: 'keranjang',
            component: keranjang
        },
        {
            path: '/mitra',
            name: 'mitra',
            component: mitra
        },
    ]
}
const link = new Router({
    mode: "history",
    routes: configRoutes(),
})
export default link