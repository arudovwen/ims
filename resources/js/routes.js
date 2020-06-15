
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
let AdminDashboard = () =>
    import(
        /* webpackChunkName: "AdminDashboard" */ "./components/admin/adminDashboard.vue"
    );
let AdminAuth = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/Auth/adminAuth.vue"
    );
let AdminSchool = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/schools/adminSchool.vue"
    );
    let NewsDashboard = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/News/newsDashboard.vue"
    );
    let AddNews  = ()=>  
     import(
    /* webpackChunkName: "add news" */ "./components/admin/News/addNews.vue"
);
let EditNews  = ()=>  
     import(
    /* webpackChunkName: "edit news" */ "./components/admin/News/editNews.vue"
);
let ViewNews  = ()=>  
     import(
    /* webpackChunkName: "view news" */ "./components/admin/News/viewNews.vue"
);

let AddProject  = ()=>  
import(
/* webpackChunkName: "add news" */ "./components/admin/Projects/addProject.vue"
);
let EditProject  = ()=>  
import(
/* webpackChunkName: "edit news" */ "./components/admin/Projects/editProject.vue"
);
let ViewProject  = ()=>  
import(
/* webpackChunkName: "view news" */ "./components/admin/Projects/viewProject.vue"
);

let AddProgram  = ()=>  
import(
/* webpackChunkName: "add news" */ "./components/admin/Programs/addProgram.vue"
);
let EditProgram  = ()=>  
import(
/* webpackChunkName: "edit news" */ "./components/admin/Programs/editProgram.vue"
);
let ViewProgram  = ()=>  
import(
/* webpackChunkName: "view news" */ "./components/admin/Programs/viewProgram.vue"
);

let DraftNews  = ()=>  
     import(
    /* webpackChunkName: "view news" */ "./components/admin/News/draftNews.vue"
);
    let ProgramsDashboard = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/Programs/dashboard.vue"
    );
    let ProjectsDashboard = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/Projects/dashboard.vue"
    );
    let PaymentDashboard = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/Payments/dashboard.vue"
    );
    let ApplicationDashboard = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/Applications/dashboard.vue"
    );
    let Lga = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/lga/lga.vue"
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
                name: "AdminDirectory",
                meta:{
                    requiresAuth:true
                }
            },
            {
                path: "/admin/school/:action",
                component: AdminSchool,
                name: "AdminSchool",
                meta:{
                    requiresAuth:true
                }
            },
            {
                path: "/admin/dashboard",
                component: AdminDashboard,
                name: "AdminDashboard",
                meta:{
                    requiresAuth:true
                }
            },
            {
                path: "/admin/news",
                component: NewsDashboard,
                name: "NewsDashboard",
                meta:{
                    requiresAuth:true
                }
            },
            {
                path: "/admin/payments",
                component: PaymentDashboard,
                name: "PaymentDashboard",
                meta:{
                    requiresAuth:true
                }
            },
            {
                path: "/admin/programs",
                component: ProgramsDashboard,
                name: "ProgramsDashboard",
                meta:{
                    requiresAuth:true
                }
            },
            {
                path: "/admin/projects",
                component: ProjectsDashboard,
                name: "ProjectsDashboard",
                meta:{
                    requiresAuth:true
                }
            },
            {
                path: "/admin/applications",
                component: ApplicationDashboard,
                name: "ApplicationDashboard",
                meta:{
                    requiresAuth:true
                }
            },
            {
                path: "/admin/lga",
                component: Lga,
                name: "Lga",
                meta:{
                    requiresAuth:true
                }
            },

            {
                path:'/admin/create/:type',
                component:AddNews,
                name:'AddNews'
            },
            {
                path:'/admin/edit/:type/:id',
                component:EditNews,
                name:'EditNews'
            },
            {
                path:'/admin/view/:type/:id',
                component:ViewNews,
                name:'ViewNews'
            },
            {
                path:'/admin/news/draft',
                component:DraftNews,
                name:'DraftNews'
            },
            {
                path:'/admin/project/add',
                component:AddProject,
                name:'AddProject'
            },
            {
                path:'/admin/project/edit/:id',
                component:EditProject,
                name:'EditProject'
            },
            {
                path:'/admin/project/view/:id',
                component:ViewProject,
                name:'ViewProject'
            },
            {
                path:'/admin/program/add',
                component:AddProgram,
                name:'AddProgram'
            },
            {
                path:'/admin/program/edit/:id',
                component:EditProgram,
                name:'EditProgram'
            },
            {
                path:'/admin/program/view/:id',
                component:ViewProgram,
                name:'ViewProgram'
            },

        ]
    },
    {
        path: "/admin/auth/:auth",
        component: AdminAuth,
        name: "AdminAuth",
        beforeEnter: (to, from, next) => {
            var admin = localStorage.getItem("adminUser");
            if(admin == null){
                next()
            }else{
                next({name:'AdminDashboard'})
            }
        }
       
    }
];
