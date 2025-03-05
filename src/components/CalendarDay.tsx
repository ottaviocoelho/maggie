import { CalendarDate } from "../types/Calendar"

type Props = {
    date: CalendarDate,
    isFocused: boolean,
    onClickHandler: () => void
}

function CalendarDay({date, isFocused, onClickHandler}: Props) {
    return (
        <div className={`day ${isFocused ? 'expanded' : ''}`} onClick={onClickHandler}>
            {date.day}
        </div>
    )
}

export default CalendarDay