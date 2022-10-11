const color = [
  'bg-orange-500',
  'bg-pink-500',
  'bg-fuchsia-500',
  'bg-sky-500',
  'bg-cyan-500',
  'bg-emerald-500',
  'bg-lime-500',
]

const ascii = (a: string) => {
  return a.charCodeAt(0)
}

export const getTagColor = (tag: string) => {
  let ints = tag.split('').map(ascii)
  let sum = 0
  ints.forEach((element) => {
    sum += element
  })
  return color[sum % color.length]
}
