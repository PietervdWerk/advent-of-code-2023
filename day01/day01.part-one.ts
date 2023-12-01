const regw = /(\d)(?:.*(\d))?/

export function day01(file: string) {
  let sum = file.split('\n').reduce((acc, line) => {
    const [_, a, b] = regw.exec(line)!

    return acc += b ? parseInt(a + b) : parseInt(a + a)

  }, 0)

  return sum
}


const input = await Bun.file("./puzzle-input.txt").text()

console.log(day01(input))
