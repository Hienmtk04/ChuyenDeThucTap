import { Outlet } from "react-router-dom";
import Footer from "./partial/footer";
import Header from "./partial/header";


function Index() {
    return (

        <div style={{
            display: 'flex',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            right: 0,
            margin: '0',
            padding: '0'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1480px',
                margin: '0 auto',
                padding: '0'
            }}>
                <Header />
                <div className="main-content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>

    );
}

export default Index;