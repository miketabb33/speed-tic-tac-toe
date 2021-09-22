import Timer from '../../../game/timer'

let subject
let remainingTimeInHundredthsOfSeconds
let timerDidHit0Invoked

function timerValueDidChange(time) { remainingTimeInHundredthsOfSeconds = time }
function timerDidHit0() { timerDidHit0Invoked = true }

beforeEach(() => {
  subject = new Timer(timerValueDidChange, timerDidHit0)
  remainingTimeInHundredthsOfSeconds = -1
  timerDidHit0Invoked = false
})

test('updateTime time above 0', () => {  
  subject.totalTimeInHundredthsOfSeconds = 100
  subject.updateTime(12)

  expect(remainingTimeInHundredthsOfSeconds).toBe(88)
})

test('updateTime time at 0', () => {
  subject.totalTimeInHundredthsOfSeconds = 100
  subject.updateTime(100)

  expect(remainingTimeInHundredthsOfSeconds).toBe(0)
  expect(timerDidHit0Invoked).toBe(true)
})