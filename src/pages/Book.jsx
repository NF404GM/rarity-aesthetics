import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Clock, Sparkles, Check, ChevronRight } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'
import SEO from '../components/core/SEO'
import { IMAGES } from '../constants/images'
import { SERVICE_DATA } from '../constants/services'
import StepService from '../components/booking/StepService'
import StepCalendar from '../components/booking/StepCalendar'
import StepTime from '../components/booking/StepTime'
import StepForm from '../components/booking/StepForm'
import StepConfirmation from '../components/booking/StepConfirmation'

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

    // Calculate progress percentage
    const progress = ((currentStep + 1) / STEPS.length) * 100

    return (
        <div className="min-h-screen bg-rarity-navy font-sans pt-24 pb-12 px-4 md:px-8">
            <SEO title="Book Appointment | Rarity Aesthetics" description="Schedule your luxury lash or brow appointment online. Located in Thornton, CO." canonical="/book" />

            <div className="max-w-3xl mx-auto">
                {/* ─── HEADER & PROGRESS ─── */}
                <div className="mb-8 md:mb-12 text-center">
                    <h1 className="font-playfair text-4xl md:text-5xl text-white mb-2">
                        {currentStep === 4 ? 'Appointment Confirmed' : `Select ${STEPS[currentStep]}`}
                    </h1>
                    <p className="text-white/60 font-lato text-sm md:text-base mb-8">
                        {currentStep === 4 ? 'We look forward to seeing you soon.' : 'Follow the steps to secure your spot.'}
                    </p>

                    {/* Progress Bar */}
                    <div className="relative h-1 bg-white/10 rounded-full overflow-hidden max-w-sm mx-auto">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-rarity-gold"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                    {/* Steps Breadcrumbs - Desktop */}
                    <div className="hidden md:flex justify-center gap-8 mt-4">
                        {STEPS.map((step, i) => (
                            <span
                                key={step}
                                className={`text-[10px] uppercase tracking-widest font-bold ${i === currentStep ? 'text-rarity-gold' :
                                    i < currentStep ? 'text-white/40' : 'text-white/10'
                                    }`}
                            >
                                {step}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ─── MAIN CARD ─── */}
                <motion.div
                    layout
                    className="bg-white rounded-[2rem] shadow-2xl overflow-hidden relative"
                >
                    {/* Top Navigation Row (Back Button) */}
                    {currentStep > 0 && currentStep < 4 && (
                        <div className="absolute top-6 left-6 z-20">
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-rarity-ink transition-colors"
                            >
                                <ArrowLeft className="w-3 h-3" /> Back
                            </button>
                        </div>
                    )}

                    {/* Step Content */}
                    <div className="p-6 md:p-10 lg:p-12 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full"
                            >
                                {renderStep()}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Footer / Summary (Visible on Steps 1-3) */}
                    {bookingData.service && currentStep > 0 && currentStep < 4 && (
                        <div className="bg-rarity-cream px-6 py-4 border-t border-rarity-navy/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white border border-rarity-navy/10 flex items-center justify-center shrink-0">
                                    <Sparkles className="w-4 h-4 text-rarity-gold" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-rarity-ink uppercase tracking-wider">{bookingData.service.title}</p>
                                    <p className="text-[10px] text-gray-500">{bookingData.service.price} • {bookingData.service.duration}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                {bookingData.date && (
                                    <div className="text-right hidden sm:block">
                                        <p className="text-[10px] font-bold text-rarity-ink uppercase tracking-wider">{bookingData.date.toLocaleDateString()}</p>
                                        <p className="text-[10px] text-gray-500">{bookingData.time || 'Select Time'}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* ─── HELPER TEXT ─── */}
                <div className="text-center mt-8">
                    <p className="text-white/30 text-xs">
                        Need help? <a href="mailto:hello@rarityaesthetics.com" className="text-rarity-gold hover:underline">Contact Support</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Book
