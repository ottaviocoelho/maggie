import { useEffect, useState } from 'react'
import './App.css'
import { getMonthMatrix } from './utils/calendar'
import { CalendarDate } from './types/Calendar'
import Calendar from './components/Calendar'

function App() {

  const today = new Date();

  const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear())
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth())

  const [calendar, setCurrentCalendar] = useState<CalendarDate[][]>([])

  useEffect(() => {
    setCurrentCalendar(getMonthMatrix(selectedYear, selectedMonth))
  }, [selectedYear, selectedMonth])

  return (
    <Calendar dates={calendar} />
  )
}

export default App