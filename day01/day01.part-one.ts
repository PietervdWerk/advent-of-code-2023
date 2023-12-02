const regex = /(\d)(?:.*(\d))?/

export function day01(file: string) {
  return file.split('\n').reduce((acc, line) => {
    const [_, a, b] = regex.exec(line)!

    return (acc += b ? parseInt(a + b) : parseInt(a + a))
  }, 0)
}

const testInput = await Bun.file('./test-input.part-one.txt').text()
console.log(day01(testInput))

const input = await Bun.file('./puzzle-input.txt').text()
console.log(day01(input))
