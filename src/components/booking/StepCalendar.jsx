import { useState } from 'react'
import { motion } from 'framer-motion'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, isBefore, startOfToday } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const StepCalendar = ({ selectedDate, onSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const today = startOfToday()

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

    const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i)

    const handleYearChange = (e) => {
        const newYear = parseInt(e.target.value)
        const newDate = new Date(currentMonth)
        newDate.setFullYear(newYear)
        setCurrentMonth(newDate)
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-between items-center mb-6 px-2">
                <button
                    onClick={prevMonth}
                    disabled={isSameMonth(currentMonth, today)}
                    className="p-1.5 hover:bg-gray-100 rounded-full disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 text-rarity-ink" />
                </button>

                <div className="flex flex-col items-center">
                    <h2 className="font-playfair text-xl text-rarity-ink">
                        {format(currentMonth, 'MMMM')}
                    </h2>
                    {/* Year Dropdown */}
                    <div className="relative group">
                        <select
                            value={currentMonth.getFullYear()}
                            onChange={handleYearChange}
                            className="appearance-none bg-transparent font-montserrat text-[10px] tracking-[0.2em] text-rarity-gold uppercase cursor-pointer outline-none border-b border-transparent hover:border-rarity-gold transition-colors pr-4 text-center"
                        >
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-rarity-gold text-[8px]">▼</span>
                    </div>
                </div>

                <button onClick={nextMonth} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronRight className="w-5 h-5 text-rarity-ink" />
                </button>
            </div>
        )
    }

    const renderDays = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        return (
            <div className="grid grid-cols-7 mb-2">
                {days.map(day => (
                    <div key={day} className="text-center font-montserrat text-[10px] tracking-widest text-gray-400 uppercase">
                        {day}
                    </div>
                ))}
            </div>
        )
    }

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth)
        const monthEnd = endOfMonth(monthStart)
        const startDate = startOfWeek(monthStart)
        const endDate = endOfWeek(monthEnd)

        const rows = []
        let days = []
        let day = startDate
        let formattedDate = ""

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, 'd')
                const cloneDay = day
                const isDisabled = isBefore(day, today) || !isSameMonth(day, monthStart) || [0, 1].includes(day.getDay()) // Disable past, diff month, Sun(0)/Mon(1)

                days.push(
                    <div
                        key={day}
                        className={`relative h-10 md:h-12 border border-transparent rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200
                            ${!isSameMonth(day, monthStart) ? 'text-gray-200' : isDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-rarity-ink hover:bg-white hover:shadow-md'}
                            ${isSameDay(day, selectedDate) ? 'bg-rarity-ink text-white shadow-lg hover:bg-rarity-ink hover:text-white' : ''}
                        `}
                        onClick={() => !isDisabled && onSelect(cloneDay)}
                    >
                        <span className="font-lato text-sm">{formattedDate}</span>
                        {isSameDay(day, selectedDate) && (
                            <motion.div layoutId="selectedDay" className="absolute inset-0 border-2 border-rarity-gold rounded-xl" />
                        )}
                    </div>
                )
                day = addDays(day, 1)
            }
            rows.push(
                <div key={day} className="grid grid-cols-7 gap-1">
                    {days}
                </div>
            )
            days = []
        }
        return <div className="space-y-1">{rows}</div>
    }

    return (
        <div className="bg-white/50 backdrop-blur-sm p-4 md:p-5 rounded-2xl md:rounded-3xl border border-white/40">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
            <div className="mt-6 text-center text-xs font-montserrat tracking-widest text-gray-400">
                * Closed Sundays & Mondays
            </div>
        </div>
    )
}

export default StepCalendar
