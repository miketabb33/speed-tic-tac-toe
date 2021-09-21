import Square from '../../../game/square'

test('construct square with null marker', () => {
  const marker = null
  const whateverIndexPath = [1,2]

  const subject = new Square(marker, whateverIndexPath)

  expect(subject.marker).toEqual(marker)
  expect(subject.indexPath).toEqual(whateverIndexPath)
})

test('construct square with x marker', () => {
  const marker = 'X'
  const whateverIndexPath = [3,1]

  const subject = new Square(marker, whateverIndexPath)

  expect(subject.marker).toEqual(marker)
  expect(subject.indexPath).toEqual(whateverIndexPath)
})

test('construct square with o marker', () => {
  const marker = 'O'
  const whateverIndexPath = [0,8]

  const subject = new Square(marker, whateverIndexPath)

  expect(subject.marker).toEqual(marker)
  expect(subject.indexPath).toEqual(whateverIndexPath)
})