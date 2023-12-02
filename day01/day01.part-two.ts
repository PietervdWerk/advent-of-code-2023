const regex =
  /(\d|one|two|three|four|five|six|seven|eight|nine)(?:.*(\d|one|two|three|four|five|six|seven|eight|nine))?/

const numbers: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

export function day01(file: string) {
  return file.split('\n').reduce((acc, line) => {
    const [_, a, b] = regex.exec(line)!

    return (acc += b
      ? parseInt((numbers[a] ?? a) + (numbers[b] ?? b))
      : parseInt((numbers[a] ?? a) + (numbers[a] ?? a)))
  }, 0)
}

const testInput = await Bun.file('./test-input.part-two.txt').text()
console.log(day01(testInput))

const input = await Bun.file('./puzzle-input.txt').text()
console.log(day01(input))
