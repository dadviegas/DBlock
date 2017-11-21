const func = (env) => (name) => {
  console.log(env, name)
}

let settings

if (process.env.NODE_ENV === 'development') {
  settings = func('development')
}

if (process.env.NODE_ENV === 'production') {
  settings = func('production')
}

export const sayHello = settings
