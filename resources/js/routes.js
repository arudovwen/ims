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
    import(/* webpackChunkName: "blog_routes" */ "./components/pages/blog.vue");
let Contact = () =>
    import(
        /* webpackChunkName: "contact_routes" */ "./components/pages/contact.vue"
    );
let About = () =>
    import(
        /* webpackChunkName: "about_routes" */ "./components/pages/about.vue"
    );
let Organizations = () =>
    import(
        /* webpackChunkName: "organizations" */ "./components/pages/organizations.vue"
    );
let Stakeholders = () =>
    import(
        /* webpackChunkName: "stakeholders" */ "./components/pages/stakeholders.vue"
    );
let Initiatives = () =>
    import(
        /* webpackChunkName: "initiatives" */ "./components/pages/initiatives.vue"
    );
let Administrative = () =>
    import(
        /* webpackChunkName: "administrative" */ "./components/pages/administratives.vue"
    );

let Directory = () =>
    import(
        /* webpackChunkName: "directory" */ "./components/user/directory.vue"
    );
let SchoolDirectory = () =>
    import(
        /* webpackChunkName: "SchoolDirectory" */ "./components/user/school/viewSchool.vue"
    );
let AdminHome = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/adminHome.vue"
    );

let AdminDirectory = () =>
    import(
        /* webpackChunkName: "AdminDirectory" */ "./components/admin/adminDirectory.vue"
    );
let AdminSchool = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/schools/adminSchool.vue"
    );

export const routes = [
    { path: "*", redirect: "/" },
    {
        path: "/",
        component: Home,
        children: []
    },
    { path: "/checkout", component: Checkout },
    { path: "/blog", component: Blog },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/organizations", component: Organizations },
    { path: "/stakeholders", component: Stakeholders },
    { path: "/initiatives", component: Initiatives },
    {
        path: "/administrative",
        component: Administrative,
        children: [
            { path: "/directory", component: Directory, name: "Directory" },
            {
                path: "/directory/school/:id",
                component: SchoolDirectory,
                name: "SchoolDirectory"
            }
        ]
    },
    {
        path: "/admin",
        component: AdminHome,
        name: "AdminHome",
        children: [
            
            {
                path: "/admin/directory",
                component: AdminDirectory,
                name: "AdminDirectory"
            },
            {
                path: "/admin/school/:action",
                component: AdminSchool,
                name: "AdminSchool"
            }
        ]
    }
];
