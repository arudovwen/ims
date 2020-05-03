let Index = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/index.vue");
let Home = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/pages/homeComponent.vue"
    );
let Checkout = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/checkout.vue"
    );
let Blog = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/pages/blog.vue"
    );
let Contact = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/pages/contact.vue"
    );
let About = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/pages/about.vue"
    );
let Organizations = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/pages/organizations.vue"
    );
let Stakeholders = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/pages/stakeholders.vue"
    );
let Initiatives = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/pages/initiatives.vue"
    );
let Administratives = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/pages/administratives.vue"
    );
export const routes = [
    { path: "*", redirect: "/" },
    {
        path: "/",
        component: Home,
        children: []
    },
    { path: "/checkout", component: Checkout },
    {path:'/blog', component:Blog},
    {path:'/about', component:About},
    {path:'/contact', component:Contact},
    {path:'/organizations', component:Organizations},
    {path:'/stakeholders', component:Stakeholders},
    {path:'/initiatives', component:Initiatives},
    {path:'/administratives', component:Administratives}
];
