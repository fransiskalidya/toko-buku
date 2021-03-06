import DaftarBuku from '../container/Buku/DaftarBuku';
//import Kategori from '../container/admin/Kategori';
import Kategori from '../components/admin/kategori/Kategori';
// import RegisterAdmin from "../components/admin/RegisterAdmin";
//import DataUser from "../container/admin/DataUser";
import Dashboard from "../container/admin/Dashboard";
import Login from "../components/frontend/auth/Login";
import Register from "../components/frontend/auth/Register";
//import EditUser from "../container/admin/EditUser";
import EditBuku from "../container/Buku/Editbuku";
import Invoice from "../container/admin/Invoice";
import Edit from "../components/admin/kategori/Edit";
import Detail from "../components/admin/kategori/Detail";
import Create from '../components/admin/kategori/Create';
import CreateUser from '../container/admin/datauser/Create';
import DetailUser from '../container/admin/datauser/Detail';
import EditUser from '../container/admin/datauser/Edit';
import DataUser from '../container/admin/datauser/DataUser';

// import Index from "../container/endUser/Index";
import { BrowserRouter as Router, Route } from 'react-router-dom';
const routes =[
    // {path: '/admin', exact: true, name: "Admin"},
    {path: '/admin', exact: true, name: "Dashboard", component: Dashboard},
    {path: '/admin/dashboard', exact: true, name: "Dashboard", component: Dashboard},
    {path: '/admin/kategori', exact: true, name: "Kategori", component: Kategori},
    {path: '/admin/DaftarBuku', exact: true, name: "DaftarBuku", component: DaftarBuku},
//    {path: '/admin/DataUser', exact: true, name: "DataUser", component: DataUser},
    // {path: '/admin/RegisterAdmin', exact: true, name: "RegisterAdmin", component: RegisterAdmin},
    {path: '/admin/auth/Login', exact: true, name: "Login", component: Login},
    {path: '/admin/auth/Register', exact: true, name: "Register", component: Register},
//    {path: '/admin/EditUser', exact: true, name: "EditUser", component: EditUser},
    {path: '/admin/EditBuku/:id', exact: true, name: "EditBuku", component: EditBuku},
    {path: '/admin/Invoice', exact: true, name: "Invoice", component: Invoice},
    {path: '/admin/dashboard/edit/:id', exact: true, name: "Edit", component: Edit},
    {path: '/admin/dashboard/show/:id', exact: true, name: "Detail", component: Detail},
    {path: '/admin/dashboard/create', exact: true, name: "Create", component: Create},
    //{path: '/admin/Checkout', exact: true, name: "Checkout", component: Checkout},
    // {path: '/cust/index', exact: true, name: "Index", component: Index}
    {path: '/admin/datauser/create', exact: true, name: "CreateUser", component: CreateUser},
    {path: '/admin/datauser/edit/:id', exact: true, name: "EditUser", component: EditUser},
    {path: '/admin/datauser/detail/:id', exact: true, name: "DetailUser", component: DetailUser},
    {path: '/admin/datauser/DataUser', exact: true, name: "DataUser", component: DataUser}

];

//<Route path='/edit/:id' component={Edit} />
export default routes;