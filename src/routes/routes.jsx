import DaftarBuku from '../container/Buku/DaftarBuku';
import Kategori from '../container/admin/Kategori';
import RegisterAdmin from "../components/admin/RegisterAdmin";
import DataUser from "../container/admin/DataUser";
import Dashboard from "../components/admin/Dashboard";
import Login from "../components/frontend/auth/Login";
import Register from "../components/frontend/auth/Register";
import EditUser from "../container/admin/EditUser";
import EditBuku from "../container/Buku/Editbuku";
// import Index from "../container/endUser/Index";

const routes =[
    {path: '/admin', exact: true, name: "Admin"},
    {path: '/', exact: true, name: "Dashboard", component: Dashboard},
    {path: '/admin/dashboard', exact: true, name: "Dashboard", component: Dashboard},
    {path: '/admin/kategori', exact: true, name: "Kategori", component: Kategori},
    {path: '/admin/DaftarBuku', exact: true, name: "DaftarBuku", component: DaftarBuku},
    {path: '/admin/DataUser', exact: true, name: "DataUser", component: DataUser},
    {path: '/admin/RegisterAdmin', exact: true, name: "RegisterAdmin", component: RegisterAdmin},
    {path: '/admin/auth/Login', exact: true, name: "Login", component: Login},
    {path: '/admin/auth/Register', exact: true, name: "Register", component: Register},
    {path: '/admin/EditUser', exact: true, name: "EditUser", component: EditUser},
    {path: '/admin/EditBuku', exact: true, name: "EditBuku", component: EditBuku},
    // {path: '/cust/index', exact: true, name: "Index", component: Index}

];
export default routes;