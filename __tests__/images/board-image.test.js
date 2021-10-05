import renderer from 'react-test-renderer'
import BoardImage from '../../images/board-image'

var subject

const someImageSize = 100
const someBoardIndex = 2

beforeEach(()=> {
  subject = new BoardImage
})

test('x image rendering', () => {
  const rendering = renderer.create(
    subject.get(someImageSize, someBoardIndex)
  )
  
  const result = rendering.toJSON()
	expect(result).toMatchSnapshot()
})