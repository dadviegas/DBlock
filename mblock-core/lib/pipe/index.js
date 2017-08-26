import compose from '../compose'

export default (...fns) => compose.apply(compose, fns.reverse())
