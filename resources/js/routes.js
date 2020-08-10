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
let OrderSummary = () =>
    import(/* webpackChunkName: "paystack" */ "./components/orderSummary.vue");
let Blog = () =>
    import(/* webpackChunkName: "blog_routes" */ "./components/pages/blog.vue");

let NewsBlog = () =>
    import(
        /* webpackChunkName: "blog_routes" */ "./components/pages/readBlog.vue"
    );

let ReadAnnouncement = () =>
    import(
        /* webpackChunkName: "blog_routes" */ "./components/user/readAnnouncement.vue"
    );
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
let UserDirectory = () =>
    import(
        /* webpackChunkName: "administrative" */ "./components/pages/userdir.vue"
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
        /* webpackChunkName: "AdminDirectory" */ "./components/admin/directory/dashboard.vue"
    );

let AdminDashboard = () =>
    import(
        /* webpackChunkName: "AdminDashboard" */ "./components/admin/adminDashboard.vue"
    );
let AdminStaffs = () =>
    import(
        /* webpackChunkName: "AdminDashboard" */ "./components/admin/staffs/staffs.vue"
    );
let AddStaffs = () =>
    import(
        /* webpackChunkName: "AdminDashboard" */ "./components/admin/staffs/add.vue"
    );
let EditStaffs = () =>
    import(
        /* webpackChunkName: "AdminDashboard" */ "./components/admin/staffs/edit.vue"
    );
let ViewStaffs = () =>
    import(
        /* webpackChunkName: "AdminDashboard" */ "./components/admin/staffs/view.vue"
    );
let AdminUsers = () =>
    import(
        /* webpackChunkName: "AdminDashboard" */ "./components/admin/users/users.vue"
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
let AddNews = () =>
    import(
        /* webpackChunkName: "add news" */ "./components/admin/News/addNews.vue"
    );
let EditNews = () =>
    import(
        /* webpackChunkName: "edit news" */ "./components/admin/News/editNews.vue"
    );
let ViewNews = () =>
    import(
        /* webpackChunkName: "view news" */ "./components/admin/News/viewNews.vue"
    );

let AddProject = () =>
    import(
        /* webpackChunkName: "add news" */ "./components/admin/Projects/addProject.vue"
    );
let EditProject = () =>
    import(
        /* webpackChunkName: "edit news" */ "./components/admin/Projects/editProject.vue"
    );
let ViewProject = () =>
    import(
        /* webpackChunkName: "view news" */ "./components/admin/Projects/viewProject.vue"
    );

let AddProgram = () =>
    import(
        /* webpackChunkName: "add news" */ "./components/admin/Programs/addProgram.vue"
    );
let EditProgram = () =>
    import(
        /* webpackChunkName: "edit news" */ "./components/admin/Programs/editProgram.vue"
    );
let ViewProgram = () =>
    import(
        /* webpackChunkName: "view news" */ "./components/admin/Programs/viewProgram.vue"
    );
let AdminAppointment = () =>
    import(
        /* webpackChunkName: "view news" */ "./components/admin/appointment/appointment.vue"
    );

let DraftNews = () =>
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
let SchoolsDirectory = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/admin/directory/schoolDirectory.vue"
    );
let InitiativeProjects = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/user/initiatives/projects.vue"
    );
let InitiativePrograms = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/user/initiatives/programs.vue"
    );
let Listings = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/user/directory/listings.vue"
    );
let Department = () =>
    import(
        /* webpackChunkName: "admin_home" */ "./components/user/department/view.vue"
    );
let Appointment = () =>
    import(
        /* webpackChunkName: "appointment" */ "./components/user/appointment.vue"
    );
let StaffDir = () =>
    import(
        /* webpackChunkName: "Staff" */ "./components/user/staff/home.vue"
    );
let FormList = () =>
    import(
        /* webpackChunkName: "Form list" */ "./components/user/appForms/formList.vue"
    );
    let SingleForm = () =>
    import(
        /* webpackChunkName: "Single forms" */ "./components/user/appForms/single.vue"
    );

    let Forms = () =>
    import(
        /* webpackChunkName: "forms" */ "./components/forms/index.vue"
    );
    let FormOptions = () =>
    import(
        /* webpackChunkName: "forms" */ "./components/forms/options.vue"
    );
    let FormTemplate = () =>
    import(
        /* webpackChunkName: "forms" */ "./components/forms/template.vue"
    );

    let AppForms = () =>
    import(
        /* webpackChunkName: "forms" */ "./components/admin/Applications/index.vue"
    );
    let AppFormOptions = () =>
    import(
        /* webpackChunkName: "forms" */ "./components//admin/Applications/options.vue"
    );
    let AppFormTemplate = () =>
    import(
        /* webpackChunkName: "forms" */ "./components//admin/Applications/template.vue"
    );
    let AppList = () =>
    import(
        /* webpackChunkName: "forms" */ "./components//admin/Applications/applist.vue"
    );

export const routes = [
    { path: "*", redirect: "/" },
    {
        path: "/",
        component: Home,
        children: []
    },
    { path: "/checkout", component: Checkout },
    { path: "/summary", component: OrderSummary, name: "OrderSummary" },
    { path: "/blog", component: Blog },
    { path: "/all-forms", component: Forms },
    { path: "/form-create", component: FormOptions },
    { path: "/form/:id", component: FormTemplate ,name:'FormTemplate'},
    { path: "/news/read/:id/:title", component: NewsBlog, name: "NewsBlog" },
    {
        path: "/announcement/read/:id",
        component: ReadAnnouncement,
        name: "ReadAnnouncement"
    },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/organizations", component: Organizations },
    { path: "/stakeholders", component: Stakeholders },
    { path: "/department/:type", component: Department },
    { path: "/staffs", component: StaffDir },
    {
        path: "/forms",
        component: FormList,
     
    },
    { path: "/forms/:name", component: SingleForm },
    
    { path: "/schedule-appointment", component: Appointment },
    
    {
        path: "/directory",
        component: Initiatives,
        children: [
            {
                path: "",
                component: UserDirectory,
                name: "UserDirectory"
            },
            ,
            {
                path: "listings/:type",
                component: Listings,
                name: "Listings"
            },
            { path: "schools", component: Directory, name: "Directory" },
            {
                path: "schools/:id",
                component: SchoolDirectory,
                name: "SchoolDirectory"
            }
        ]
    },
    {
        path: "/administrative",
        component: Administrative,
        children: []
    },

    {
        path: "",
        component: AdminHome,
        name: "AdminHome",
        children: [
            {
                path: "/admin/directory",
                component: AdminDirectory,
                name: "AdminDirectory",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/school/:action",
                component: AdminSchool,
                name: "AdminSchool",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin",
                component: AdminDashboard,
                name: "AdminDashboard",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/news",
                component: NewsDashboard,
                name: "NewsDashboard",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/forms",
                component: AppForms,
                name: "AppForms",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/form",
                component: AppFormOptions,
                name: "AppFormOptions",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/app/list",
                component: AppList,
                name: "AppList",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/form-template",
                component: AppFormTemplate,
                name: "AppFormTemplate",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/payments",
                component: PaymentDashboard,
                name: "PaymentDashboard",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/programs",
                component: ProgramsDashboard,
                name: "ProgramsDashboard",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/users",
                component: AdminUsers,
                name: "AdminUsers",
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    var admin = JSON.parse(localStorage.getItem("adminUser"));
                    if (admin.role == "administrator") {
                        next();
                    } else {
                        next({ name: "AdminDashboard" });
                    }
                }
            },

            {
                path: "/admin/projects",
                component: ProjectsDashboard,
                name: "ProjectsDashboard",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/staffs",
                component: AdminStaffs,
                name: "AdminStaffs",
                meta: {
                    requiresAuth: true
                }
            },

            {
                path: "/admin/staffs/add",
                component: AddStaffs,
                name: "AddStaffs",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/staffs/view/:id",
                component: ViewStaffs,
                name: "ViewStaffs",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/appointment",
                component: AdminAppointment,
                name: "AdminAppointment"
            },
            {
                path: "/admin/staffs/edit/:id",
                component: EditStaffs,
                name: "EditStaffs",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/applications",
                component: ApplicationDashboard,
                name: "ApplicationDashboard",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/lga",
                component: Lga,
                name: "Lga",
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/directory/school",
                component: SchoolsDirectory,
                name: "SchoolsDirectory",
                meta: {
                    requiresAuth: true
                }
            },

            {
                path: "/admin/create/:type",
                component: AddNews,
                name: "AddNews"
            },
            {
                path: "/admin/edit/:type/:id",
                component: EditNews,
                name: "EditNews"
            },
            {
                path: "/admin/view/:type/:id",
                component: ViewNews,
                name: "ViewNews"
            },
            {
                path: "/admin/news/draft",
                component: DraftNews,
                name: "DraftNews"
            },
            {
                path: "/admin/project/add",
                component: AddProject,
                name: "AddProject"
            },
            {
                path: "/admin/project/edit/:id",
                component: EditProject,
                name: "EditProject"
            },
            {
                path: "/admin/project/view/:id",
                component: ViewProject,
                name: "ViewProject"
            },
            {
                path: "/admin/program/add",
                component: AddProgram,
                name: "AddProgram"
            },
            {
                path: "/admin/program/edit/:id",
                component: EditProgram,
                name: "EditProgram"
            },
            {
                path: "/admin/program/view/:id",
                component: ViewProgram,
                name: "ViewProgram"
            }
        ]
    },
    {
        path: "/admin/auth/:auth",
        component: AdminAuth,
        name: "AdminAuth",
        beforeEnter: (to, from, next) => {
            var admin = JSON.parse(localStorage.getItem("adminUser"));
            if (admin == null) {
                next();
            } else {
                next({ name: "AdminDashboard" });
            }
        }
    }
];
