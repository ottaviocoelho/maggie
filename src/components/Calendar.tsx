import { useState } from "react"
import { CalendarDate } from "../types/Calendar"
import CalendarDay from "./CalendarDay"

type Props = {
    dates: CalendarDate[][]
}

function Calendar({dates}: Props) {

    const [focus, setFocus] = useState<{rowIndex: number, columnIndex: number} | undefined>()

    const onDayClick = (rowIndex: number, columnIndex: number) => {
        if (focus) {
        setFocus(undefined)
        } else {
        setFocus({rowIndex, columnIndex})
        }
    }

    return (
        <section className='calendar-wrapper'>
          <div className='calendar' style={{
              marginTop: `calc(${(focus?.rowIndex ?? 0) * -1} * var(--calendar-date-size))`
            }}>
            {
              dates.map((calendarRow, rowIndex) => {
                return (
                  <div className='calendar-row' style={{
                      marginLeft: focus?.rowIndex == rowIndex ? `calc(${(focus?.columnIndex || 0) * -1} * var(--calendar-date-size))` : ''
                    }}>
                    {
                      calendarRow.map((calendarDate, columnIndex) => {
                        const isFocused = focus?.columnIndex == columnIndex && focus?.rowIndex == rowIndex
          
                        return <CalendarDay date={calendarDate} isFocused={isFocused} onClickHandler={() => onDayClick(rowIndex, columnIndex)} />
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

export default Calendar;