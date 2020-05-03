let Index = () =>
    import(/* webpackChunkName: "home_routes" */ "./components/index.vue");
let Home = () =>
    import(
        /* webpackChunkName: "home_routes" */ "./components/user/homeComponent.vue"
    );
let Checkout = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/checkout.vue"
    );
let Blog = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/user/blog.vue"
    );
    let Contact = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/user/contact.vue"
    );
    let About = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/user/about.vue"
    );
    let Organizations = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/user/organizations.vue"
    );
    let Stakeholders = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/user/stakeholders.vue"
    );
    let Initiatives = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/user/initiatives.vue"
    );
    let Administratives = () =>
    import(
        /* webpackChunkName: "checkout_routes" */ "./components/user/administratives.vue"
    );
export const routes = [
    { path: "*", redirect: "/" },
    {
        path: "/",
        component: Index,
        children: [
            { path: "", component: Home },
            { path: "/checkout", component: Checkout },
            {path:'/blog', component:Blog},
            {path:'/about', component:About},
            {path:'/contact', component:Contact},
            {path:'/organizations', component:Organizations},
            {path:'/stakeholders', component:Stakeholders},
            {path:'/initiatives', component:Initiatives},
            {path:'/administratives', component:Administratives}
        ]
    }
];
