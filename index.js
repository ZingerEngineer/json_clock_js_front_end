const hoursSpan = document.getElementById('hours')
const minutesSpan = document.getElementById('minutes')
const monthSpan = document.getElementById('month')
const yearSpan = document.getElementById('year')

const secondsSpan = document.getElementById('seconds')
const periodSpan = document.getElementById('period')
const daySpan = document.getElementById('day')

const hourFormatCheckButton = document.getElementById('12hour-check-button')
const showSecondsChechButton = document.getElementById(
  'show-seconds-check-button'
)
const leadingZerosCheckButton = document.getElementById(
  'leading-zeros-check-button'
)
const timezoneCheckButton = document.getElementById('timezone-check-button')
const timestampCheckButton = document.getElementById('timestamp-check-button')

const settings = {
  is12hours: false,
  isSecondsShown: true,
  isLeadingZerosShown: false,
  isTimeZoneShown: false,
  isTimeStampShown: false
}

const timeUpdater = () => {
  const instantDate = new Date()
  let hours = null
  settings.is12hours
    ? (hours = instantDate
        .toLocaleString('en-US', {
          hour: 'numeric',
          hour12: true
        })
        .slice(0, 2))
    : (hours = instantDate.getHours())

  const minutes = instantDate.getMinutes()
  const seconds = instantDate.getSeconds()

  const year = instantDate.getFullYear()
  const month = instantDate.getMonth() + 1
  const day = instantDate.getDate()

  const period = instantDate
    .toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
    .slice(-2)
  hoursSpan.innerText = hours
  minutesSpan.innerText = minutes
  secondsSpan.innerText = seconds
  daySpan.innerText = day
  monthSpan.innerText = month
  yearSpan.innerText = year
  secondsSpan.innerText = seconds
  periodSpan.innerText = period
}

let mainIntervalID = setInterval(timeUpdater, 1000)

handleTabClick = (checkBoxDiv, settingTab, intervalID) => {
  if (settingTab) {
    checkBoxDiv.classlist.remove('checked')
    settingTab = !settingTab
    clearInterval(intervalID)
    intervalID = setInterval(timeUpdater, 1000)
  }
  settingTab = !settingTab
  checkBoxDiv.classList.add('checked')
  clearInterval(intervalID)
  intervalID = setInterval(timeUpdater, 1000)
  console.log('clicked')
  console.log(settingTab)
}
hourFormatCheckButton.addEventListener(
  'click',
  handleTabClick(hourFormatCheckButton, settings.is12hours, mainIntervalID)
)
