import { useState } from "react"
import { CalendarDate } from "../types/Calendar"

type Props = {
  date: CalendarDate,
  isFocused: boolean,
  onClickHandler: () => void
}

function CalendarDay({date, isFocused, onClickHandler}: Props) {
    
  const [entries, setEntries] = useState(["Pilates", "Jiu Jitsu", "Academia"])
  // const [entries, setEntries] = useState([])

  

  return (
    <div className={`day ${isFocused ? 'expanded' : ''}`} onClick={onClickHandler}>
      <span>{date.day}</span>
      {
        entries.length ? (
            <div className="entries-list-wrapper">
              {entries.map(entry => <span className="entry">{entry}</span> )}
            </div>
        ) : undefined
          
      }
    </div>
  )
}

export default CalendarDay