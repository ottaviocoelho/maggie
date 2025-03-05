import { CalendarDate } from "../types/Calendar"

export function getMonthMatrix(year: number, month: number): CalendarDate[][] {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let matrix = [];
    let week = [];

    // Find the first Sunday before or on the first day of the month
    let current = new Date(firstDay);
    current.setDate(firstDay.getDate() - firstDay.getDay()); // Move to the nearest previous Sunday

    while (current <= lastDay || week.length > 0) {
        week.push({
            day: current.getDate(),
            month: current.getMonth(),
            year: current.getFullYear()
        });

        if (week.length === 7) { // Once we have a full week, push it to the matrix
            matrix.push(week);
            week = [];
        }

        current.setDate(current.getDate() + 1);
    }

    return matrix;
}