import Header from '../layout/Header'
import Footer from '../layout/Footer'
import ScrollToTop from '../core/ScrollToTop'
import NewsletterPopup from '../marketing/NewsletterPopup'
import CartNotification from '../ui/CartNotification'
import CartDrawer from '../shop/CartDrawer'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <NewsletterPopup />
            <CartNotification />
            <CartDrawer />
            <Header />
            <main className="flex-grow pt-[80px]">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
