console.log('hello typescript')
let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b
}
let d = c.apple * 4

function add(n: number) {
  return n * n
}
add(2)

let a: {
  b: number
  c?: string
  [key: number]: boolean
}