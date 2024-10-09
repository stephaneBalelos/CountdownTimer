export function setupTimers() {
  const elements = Array.from(document.querySelectorAll('[countdown-timer]'))

  for (const element of elements) {
    const date = new Date(element.getAttribute('data-date') as string)
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', element.getAttribute('data-date'))
      continue
    }
    const daysElement = element.querySelector('[data-days]')
    const hoursElement = element.querySelector('[data-hours]')
    const minutesElement = element.querySelector('[data-minutes]')
    const secondsElement = element.querySelector('[data-seconds]')
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
      console.error('Missing elements:', element)
      continue
    }

    const { days, hours, minutes, seconds } = update(date)
    render(daysElement, days)
    render(hoursElement, hours)
    render(minutesElement, minutes)
    render(secondsElement, seconds)

    setInterval(() => {
      
      const values = update(date)

      render(daysElement, values.days)
      render(hoursElement, values.hours)
      render(minutesElement, values.minutes)
      render(secondsElement, values.seconds)
    }, 1000)
  }

}

const render = (el: Element, value: number) => {
  el.innerHTML = value.toString()
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
