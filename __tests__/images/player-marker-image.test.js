import renderer from 'react-test-renderer'
import PlayerMarkerImage from '../../images/player-marker-image'

var subject

const someLocation = "some-ui-location"
const someImageSize = 100

beforeEach(()=> {
  subject = new PlayerMarkerImage
})

test('x image rendering', () => {
  const rendering = renderer.create(
    subject.get('X', someImageSize, someLocation)
  )
  
  const result = rendering.toJSON()
	expect(result).toMatchSnapshot()
})

test('o image rendering', () => {
  const rendering = renderer.create(
    subject.get('O', someImageSize, someLocation)
  )
  
  const result = rendering.toJSON()
	expect(result).toMatchSnapshot()
})

test('red x image rendering', () => {
  const rendering = renderer.create(
    subject.get('redX', someImageSize, someLocation)
  )
  
  const result = rendering.toJSON()
	expect(result).toMatchSnapshot()
})

test('red o image rendering', () => {
  const rendering = renderer.create(
    subject.get('redO', someImageSize, someLocation)
  )
  
  const result = rendering.toJSON()
	expect(result).toMatchSnapshot()
})

test('yellow x image rendering', () => {
  const rendering = renderer.create(
    subject.get('yellowX', someImageSize, someLocation)
  )
  
  const result = rendering.toJSON()
	expect(result).toMatchSnapshot()
})

test('yellow o image rendering', () => {
  const rendering = renderer.create(
    subject.get('yellowO', someImageSize, someLocation)
  )
  
  const result = rendering.toJSON()
	expect(result).toMatchSnapshot()
})