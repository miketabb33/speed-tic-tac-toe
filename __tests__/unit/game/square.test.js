import Square from '../../../game/square'

test('construct square with null marker', () => {
  const marker = null
  const whateverIndexPath = [2,1]

  const subject = new Square(marker, whateverIndexPath)

  expect(subject.marker).toEqual(marker)
  expect(subject.indexPath).toEqual(whateverIndexPath)
})

test('construct square with x marker', () => {
  const marker = 'X'
  const whateverIndexPath = [1,3]

  const subject = new Square(marker, whateverIndexPath)

  expect(subject.marker).toEqual(marker)
  expect(subject.indexPath).toEqual(whateverIndexPath)
})

test('construct square with o marker', () => {
  const marker = 'O'
  const whateverIndexPath = [8,0]

  const subject = new Square(marker, whateverIndexPath)

  expect(subject.marker).toEqual(marker)
  expect(subject.indexPath).toEqual(whateverIndexPath)
})