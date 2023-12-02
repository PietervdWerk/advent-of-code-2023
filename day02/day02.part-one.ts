const regex = /(\d+)\s(\w+)/

const config = {
  red: 12,
  green: 13,
  blue: 14,
}

function day02_part_one(input: string): number {
  return input.split('\n').reduce((acc, line) => {
    let parts = line.split(';')
    parts[0] = parts[0].split(':')[1]

    let nope = false
    for (let i = 0; i < parts.length; i++) {
      const splits = parts[i].split(',')
      for (let j = 0; j < splits.length; j++) {
        const [_, a, b] = regex.exec(splits[j].trim())!

        if (config[b as keyof typeof config] < parseInt(a)) {
          nope = true
          break
        }
      }

      if (nope) {
        break
      }
    }

    if (!nope) {
      acc += parseInt(line.split(':')[0].substring(5))
    }

    return acc
  }, 0)
}

const sampleInput = await Bun.file('./test-input.txt').text()
console.log(day02_part_one(sampleInput))

const input = await Bun.file('./puzzle-input.txt').text()
console.log(day02_part_one(input))
