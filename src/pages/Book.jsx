import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Sparkles } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import SEO from '../components/core/SEO'
import { IMAGES } from '../constants/images'
import StepService from '../components/booking/StepService'
import StepCalendar from '../components/booking/StepCalendar'
import StepTime from '../components/booking/StepTime'
import StepForm from '../components/booking/StepForm'
import StepConfirmation from '../components/booking/StepConfirmation'

// Mock Data import (simulated from Services.jsx)
const SERVICE_DATA = [
    {
        category: "Specials",
        image: IMAGES.services.specials,
        items: [
            { id: 'val-special', title: 'Valentines lash special', price: '$200.00', duration: '3 hours', desc: 'Book a full set followed by a fill.', img: IMAGES.services.specials, special: true },
            { id: 'val-fill', title: 'Valentines special fill', price: 'On me ♡', duration: '2 hours', desc: 'The follow-up fill.', img: IMAGES.services.fills, special: true },
        ]
    },
    {
        category: "Lash Sets",
        image: IMAGES.services.lashSets,
        items: [
            { id: 'natural-set', title: 'Natural lash set', price: '$215.00', duration: '3 hours', desc: 'Classic/Hybrid styling.', img: IMAGES.services.natural },
            { id: 'volume-set', title: 'Volume lash set', price: '$230.00', duration: '3 hours', desc: 'Volume/Mega styling.', img: IMAGES.services.volume },
            { id: 'glow-bundle', title: 'Glow up bundle', price: '$285.00', duration: '4 hours', desc: 'Lashes + Brows.', img: IMAGES.services.bundle },
        ]
    }
]

const STEPS = ['Service', 'Date', 'Time', 'Details', 'Confirmation']

const Book = () => {
    const location = useLocation()
    const [currentStep, setCurrentStep] = useState(0)
    const [bookingData, setBookingData] = useState({
        service: null,
        date: null,
        time: null,
        form: { name: '', email: '', phone: '', notes: '' }
    })

    // Handle incoming service selection from BookingDrawer
    useEffect(() => {
        if (location.state?.selectedService) {
            setBookingData(prev => ({ ...prev, service: location.state.selectedService }))
            setCurrentStep(1) // Jump to Date selection
        }
    }, [location.state])

    const handleNext = () => setCurrentStep(prev => prev + 1)
    const handleBack = () => setCurrentStep(prev => prev - 1)

    const updateData = (key, value) => {
        setBookingData(prev => ({ ...prev, [key]: value }))
        if (key !== 'form') handleNext() // Auto advance unless form
    }

    const renderStep = () => {
        switch (currentStep) {
            case 0: return <StepService serviceData={SERVICE_DATA} selectedService={bookingData.service} onSelect={(s) => updateData('service', s)} />
            case 1: return <StepCalendar selectedDate={bookingData.date} onSelect={(d) => updateData('date', d)} />
            case 2: return <StepTime selectedTime={bookingData.time} onSelect={(t) => updateData('time', t)} />
            case 3: return <StepForm formData={bookingData.form} onChange={(f) => setBookingData(p => ({ ...p, form: f }))} onComplete={handleNext} />
            case 4: return <StepConfirmation bookingData={bookingData} />
            default: return null
        }
    }

    // ... imports

    return (
        <div className="min-h-screen bg-rarity-navy flex items-center justify-center p-4 md:p-12 font-sans pt-24">
            <SEO title="Book Appointment | Rarity Aesthetics" description="Schedule your luxury lash or brow appointment online. Located in Thornton, CO." canonical="/book" />

            <div className="w-full max-w-6xl bg-white/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[80vh] relative border border-white/50">

                {/* Left Sidebar ... */}
                <div className={`lg:w-1/3 bg-white/60 p-8 md:p-12 flex flex-col border-r border-white/50 ${currentStep === 4 ? 'hidden lg:flex' : ''}`}>
                    {/* ... sidebar content ... */}
                    <div className="mb-12">
                        {currentStep > 0 && currentStep < 4 && (
                            <button onClick={handleBack} className="flex items-center gap-2 text-xs font-montserrat tracking-widest text-gray-500 hover:text-rarity-ink mb-6">
                                <ArrowLeft className="w-3 h-3" /> BACK
                            </button>
                        )}
                        <span className="text-rarity-gold font-montserrat text-xs tracking-[0.4em] uppercase block mb-4">
                            Step 0{currentStep + 1} / 05
                        </span>
                        <h1 className="font-playfair text-4xl text-rarity-ink">{STEPS[currentStep]}</h1>
                    </div>

                    {/* Live Summary Card */}
                    {bookingData.service && (
                        <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 animate-fade-up">
                            <h3 className="font-playfair text-lg text-rarity-ink mb-2">{bookingData.service.title}</h3>
                            <div className="flex justify-between text-sm font-lato text-gray-500 mb-4">
                                <span>{bookingData.service.duration}</span>
                                <span className="text-rarity-gold">{bookingData.service.price}</span>
                            </div>
                            {bookingData.date && (
                                <div className="flex items-center gap-3 text-sm text-rarity-ink border-t pt-4">
                                    <Calendar className="w-4 h-4 text-rarity-gold" />
                                    <span>{bookingData.date.toDateString()}</span>
                                </div>
                            )}
                            {bookingData.time && (
                                <div className="flex items-center gap-3 text-sm text-rarity-ink mt-2">
                                    <Clock className="w-4 h-4 text-rarity-gold" />
                                    <span>{bookingData.time}</span>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="mt-auto opacity-30 hidden lg:block">
                        <img src={IMAGES.brand.logo} alt="Rarity" className="w-24 grayscale" />
                    </div>
                </div>

                {/* Right Content (Active Step) */}
                <div className="flex-1 p-6 md:p-20 overflow-y-auto relative custom-scrollbar">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-rarity-gold/5 rounded-full blur-3xl -z-10" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Book
