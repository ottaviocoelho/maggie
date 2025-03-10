import { useEffect, useState } from 'react'
import { getMonthMatrix } from './utils/calendar'
import { CalendarDate } from './types/Calendar'
import Calendar from './components/Calendar'
import Configuration from './components/Configuration'

function App() {

  const today = new Date();

  const isToday = (date: CalendarDate) => date.day == today.getDate() && date.month == today.getMonth() && date.year == today.getFullYear()

  const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear())
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth())

  const [calendar, setCurrentCalendar] = useState<CalendarDate[][]>([])

  useEffect(() => {
    setCurrentCalendar(getMonthMatrix(selectedYear, selectedMonth))
  }, [selectedYear, selectedMonth])

  return (
    <>
      <Configuration />
      <Calendar dates={calendar} />
    </>
  )
}

export default App