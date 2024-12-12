import { Button, Navbar } from "flowbite-react";
import { useLocation } from 'react-router-dom';
import "./style.css"

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
    return (      
        <> 
            <Navbar border>
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-3xl font-bold text-custom-orange">Ludaria</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>Login</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavbarLinkActive href="/">HOME</NavbarLinkActive>
                    <NavbarLinkActive href="/admin">ADMIN</NavbarLinkActive>
                </Navbar.Collapse>
            </Navbar>
        </> 
    )
}

export default Header;