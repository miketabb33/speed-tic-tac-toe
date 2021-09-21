import Timer from '../../../game/timer'

let subject
let remainingTime
let timerDidHit0Invoked

function timerValueDidChange(time) { remainingTime = time }
function timerDidHit0() { timerDidHit0Invoked = true }

beforeEach(() => {
  subject = new Timer(timerValueDidChange, timerDidHit0)
  remainingTime = -1
  timerDidHit0Invoked = false
})

test('updateTime time above 0', () => {  
  subject.totalTime = 100
  subject.updateTime(12)

  expect(remainingTime).toBe(88)
})

test('updateTime time at 0', () => {
  subject.totalTime = 100
  subject.updateTime(100)

  expect(remainingTime).toBe(0)
  expect(timerDidHit0Invoked).toBe(true)
})