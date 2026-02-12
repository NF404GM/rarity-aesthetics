import Header from '../layout/Header'
import Footer from '../layout/Footer'
import MobileNav from '../layout/MobileNav'
import ScrollToTop from '../core/ScrollToTop'
import NewsletterPopup from '../marketing/NewsletterPopup'
import CartNotification from '../ui/CartNotification'
import CartDrawer from '../shop/CartDrawer'
import SparkleCursor from '../ui/Cursor'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <NewsletterPopup />
            <CartNotification />
            <ScrollToTop />
            <CartDrawer />
            <Header />
            <main className="flex-grow pt-[80px] pb-20 md:pb-0">
                {children}
            </main>
            <Footer />
            <MobileNav />
        </div>
    )
}

export default Layout
