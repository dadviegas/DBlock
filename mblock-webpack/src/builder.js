console.log('test')

const a = {
  b: 1
}
const c = [1, 2, 3, 4]

console.log(...c)

const { b } = a

console.log(b)

function resolveAfter2Seconds (x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 2000)
  })
}

const add1 = async (x) => {
  var a = resolveAfter2Seconds(20)
  var b = resolveAfter2Seconds(30)
  return x + await a + await b
}

add1(10).then(v => {
  console.log(v)  // prints 60 after 2 seconds.
})

const add2 = async (x) => {
  var a = await resolveAfter2Seconds(20)
  var b = await resolveAfter2Seconds(30)
  return x + a + b
}

add2(120).then(v => {
  console.log(v)  // prints 60 after 4 seconds.
})
