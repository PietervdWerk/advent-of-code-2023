const regex = /(\d+)\s(\w+)/

function day02_part_one(input: string): number {
  return input.split('\n').reduce((acc, line) => {
    let parts = line.split(';')
    parts[0] = parts[0].split(':')[1]

    let maxes = {
      red: 0,
      green: 0,
      blue: 0,
    }
    for (let i = 0; i < parts.length; i++) {
      const splits = parts[i].split(',')

      for (let j = 0; j < splits.length; j++) {
        const [_, a, b] = regex.exec(splits[j].trim())!

        if (maxes[b as keyof typeof maxes] < parseInt(a)) {
          maxes[b as keyof typeof maxes] = parseInt(a)
        }
      }
    }

    return (acc += maxes.red * maxes.green * maxes.blue)
  }, 0)
}

const sampleInput = await Bun.file('./test-input.txt').text()
console.log(day02_part_one(sampleInput))

const input = await Bun.file('./puzzle-input.txt').text()
console.log(day02_part_one(input))
