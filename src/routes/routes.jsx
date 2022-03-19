import DaftarBuku from '../container/Buku/DaftarBuku';
import Kategori from '../container/admin/Kategori';
import RegisterAdmin from "../components/admin/RegisterAdmin";
import Dashboard from "../components/admin/Dashboard";

const routes =[
    {path: '/admin', exact: true, name: "Admin"},
    {path: '/admin/dashboard', exact: true, name: "Dashboard", component: Dashboard},
    {path: '/admin/kategori', exact: true, name: "Kategori", component: Kategori},
    {path: '/admin/DaftarBuku', exact: true, name: "DaftarBuku", component: DaftarBuku},
    {path: '/admin/RegisterAdmin', exact: true, name: "RegisterAdmin", component: RegisterAdmin}

];
export default routes;