import Footer from "./footer/footer";
import Header from "./header/header";


const Layout = (props: any) => {
    return (
        <div style={{
            display: "flex",
            flexFlow: "column"
        }}>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    );
}

export default Layout;