import { useEffect, useState } from 'react'
import './App.css'
import { getMonthMatrix } from './utils/calendar'
import { CalendarDate } from './types/Calendar'

function App() {

  const today = new Date();

  const [focus, setFocus] = useState<{rowIndex: number, columnIndex: number} | undefined>()
  const [focusStyle, setFocusStyle] = useState<{marginLeft: number, marginRight: number} | undefined>()

  useEffect(() => {

  }, [focus])


  const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear())
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth())

  const [calendar, setCurrentCalendar] = useState<CalendarDate[][]>([])

  useEffect(() => {
    setCurrentCalendar(getMonthMatrix(selectedYear, selectedMonth))
  }, [selectedYear, selectedMonth])

  const days = ['red',
    'blue',
    'green',
    'purple',
    'yellow',
    'black',
    'white',
    'orange',
    'brown',
  ]

  const onDayClick = (rowIndex: number, columnIndex: number) => {
    if (focus) {
      setFocus(undefined)
    } else {
      setFocus({rowIndex, columnIndex})
    }
  }

  // Example usage:
  
  const matrix = getMonthMatrix(today.getFullYear(), today.getMonth());
  console.log(matrix);

  return (
    <section className='calendar-wrapper'>
      <div className='calendar' style={{
          marginTop: `calc(${(focus?.rowIndex ?? 0) * -1} * var(--calendar-date-size))`
        }}>
        {
          calendar.map((calendarRow, rowIndex) => {
            return (
              <div className='calendar-row' style={{
                  marginLeft: focus?.rowIndex == rowIndex ? `calc(${(focus?.columnIndex || 0) * -1} * var(--calendar-date-size))` : ''
                }}>
                {
                  calendarRow.map((calendarDate, columnIndex) => {
                    const isFocused = focus?.columnIndex == columnIndex && focus?.rowIndex == rowIndex
      
                    return (
                      <div className={`day ${isFocused ? 'expanded' : ''}`} onClick={() => onDayClick(rowIndex, columnIndex)}>
                        {calendarDate.day}
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>     
    </section>
  )
}

export default App