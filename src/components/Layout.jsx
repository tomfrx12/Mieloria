import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <main className="bg-[url(/img/bg_mieloria.png)] object cover">{children}</main>
            <Footer/>
        </div>
    )
}