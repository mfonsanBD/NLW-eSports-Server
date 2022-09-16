export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)

  const minuteAmount = (hours * 60) + minutes

  return minuteAmount
}