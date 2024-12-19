import { Avatar, Button, Navbar } from "flowbite-react";
import { useLocation } from 'react-router-dom';
import "./style.css"
import { useUsers } from "../../hooks/useUsers";

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
    const { user, isAdmin, logout } = useUsers();
    return (      
        <> 
            <Navbar border>
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-3xl font-bold text-custom-orange">Ludaria</span>
                </Navbar.Brand>
                <div className="flex items-center justify-between md:order-2 space-x-2">
                    {
                    user ? (
                        <>

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
                    <NavbarLinkActive href="/">HOME</NavbarLinkActive>
                    {isAdmin ? <NavbarLinkActive href="/admin">ADMIN</NavbarLinkActive> : <></>}
                </Navbar.Collapse>
            </Navbar>
        </> 
    )
}

export default Header;