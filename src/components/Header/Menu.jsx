import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

export default function Menu() {
    const url = useLocation();

    const isActive = (path) => {
        return (path === url.pathname) ? "active" : "";
    }

    return (
        <Box className="header-menu">
            <Link className={isActive('/')} to="/">Home</Link>
            <Link className={isActive('/page2')} to="/page2">Produtos</Link>
            <Link className={isActive('/categorias')} to="/categorias">Categorias</Link>
            <Link className={isActive("/produtos")} to="/produtos">Meus Pedidos</Link>
        </Box>
    )
}
