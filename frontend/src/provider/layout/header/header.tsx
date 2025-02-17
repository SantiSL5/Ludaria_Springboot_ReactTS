import { Avatar, Button, Navbar } from "flowbite-react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./style.css"
import { useUsers } from "../../hooks/useUsers";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Props {
    href: string;
    children: React.ReactNode;
}

const NavbarLinkActive: React.FC<Props> = ({ href, children }) => {
    const location = useLocation();
  
    return (
        <Navbar.Link
            href={href}
            active={location.pathname === href}
            className={

                location.pathname === href
        
                  ? 'text-base navbar-link-active'
        
                  : 'text-base navbar-link'
        
              }
        >
        {children}
        </Navbar.Link>
    );
  
};

const Header = () => {
    const navigate = useNavigate();
    const { user, isAdmin, logout } = useUsers();
    return (      
        <> 
            <Navbar border>
                <Navbar.Brand href="/home">
                    <span className="self-center whitespace-nowrap text-3xl font-bold text-custom-orange">Ludaria</span>
                </Navbar.Brand>
                <div className="flex items-center justify-between md:order-2 space-x-2">
                    {user ? (
                        <>
                            <IconButton aria-label="cart"
                                    onClick={() => {
                                        navigate(`/cart`)
                                    }}
                                >
                                <ShoppingCartIcon/>
                            </IconButton>
                            <Avatar img={user.data.photo} rounded={true} />

                            <a href="/profile" className="text-base">
                                {user.data.username}
                            </a>

                            <Button className="navbar-login" onClick={logout}>
                            Logout
                            </Button>
                        </>
                        ) : (
                            <Button className="navbar-login" href="/login">
                            Login
                            </Button>
                        )
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavbarLinkActive href="/">INICIO</NavbarLinkActive>
                    <NavbarLinkActive href="/shop">TIENDA</NavbarLinkActive>
                    <NavbarLinkActive href="#">JUEGOS</NavbarLinkActive>
                    <NavbarLinkActive href="#">ACCESORIOS</NavbarLinkActive>
                    <NavbarLinkActive href="#">OFERTAS</NavbarLinkActive>
                    <NavbarLinkActive href="#">CONTACTO</NavbarLinkActive>
                    <NavbarLinkActive href="#">TARJETA REGALO</NavbarLinkActive>
                    {isAdmin ? <NavbarLinkActive href="/admin">ADMIN</NavbarLinkActive> : <></>}
                </Navbar.Collapse>
            </Navbar>
            <div className="bg-black text-white w-full text-center py-2 text-sm">
                <span>Envíos 24 horas estimadas en península y gratis comprando un Juego Ludaria de más de 10 €</span>
            </div>
        </> 
    )
}

export default Header;