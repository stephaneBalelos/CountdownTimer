export function setupTimers() {
  const elements = Array.from(document.querySelectorAll('[countdown-timer]'))

  for (const element of elements) {
    const date = new Date(element.getAttribute('data-date') as string)
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', element.getAttribute('data-date'))
      element.innerHTML = '** Countdown Timer Invalid Date, check console for more info **'
      continue
    }
    const daysElement = element.querySelector('[days]')
    const hoursElement = element.querySelector('[hours]')
    const minutesElement = element.querySelector('[minutes]')
    const secondsElement = element.querySelector('[seconds]')
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
      console.error('Missing elements:', element)
      element.innerHTML = '** Countdown Timer Error, check console for more info **'
      continue
    }

    const daysUnits = [daysElement.querySelector('[data-unit]')?.innerHTML ?? 'day', daysElement.querySelector('[data-days]')?.innerHTML ?? 'days']
    const hoursUnits = [hoursElement.querySelector('[data-init]')?.innerHTML ?? 'hour', hoursElement.querySelector('[data-inits]')?.innerHTML ?? 'hours']
    const minutesUnits = [minutesElement.querySelector('[data-unit]')?.innerHTML ?? 'minute', minutesElement.querySelector('[data-units]')?.innerHTML ?? 'minutes']
    const secondsUnits = [secondsElement.querySelector('[data-unit]')?.innerHTML ?? 'seconds', secondsElement.querySelector('[data-units]')?.innerHTML ?? 'seconds']


    const { days, hours, minutes, seconds } = update(date)
    render(daysElement, days, daysUnits)
    render(hoursElement, hours, hoursUnits)
    render(minutesElement, minutes, minutesUnits)
    render(secondsElement, seconds, secondsUnits)

    setInterval(() => {
      
      const values = update(date)

      render(daysElement, values.days, daysUnits)
      render(hoursElement, values.hours, hoursUnits)
      render(minutesElement, values.minutes, minutesUnits)
      render(secondsElement, values.seconds, secondsUnits)
    }, 1000)
  }

}

const render = (el: Element, value: number, units: (string | undefined)[]) => {
  const text = value.toString().padStart(2, '0')
  const unit = value === 1 ? units[0] : units[1]
  el.innerHTML = `${text} ${unit}`
}

const update = (date: Date) => {
  const now = new Date()
  const timeLeft = date.getTime() - now.getTime()

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}
