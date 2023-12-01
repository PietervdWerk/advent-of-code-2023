const regw = /(\d|one|two|three|four|five|six|seven|eight|nine)(?:.*(\d|one|two|three|four|five|six|seven|eight|nine))?/

export function day01(file: string) {
  let sum = file.split('\n').reduce((acc, line) => {
    const [_, a, b] = regw.exec(line)!

    return acc += b ? parseInt(parseWords(a) + parseWords(b)) : parseInt(parseWords(a) + parseWords(a))
  }, 0)

  return sum
}

function parseWords(s: string) {
  switch (s) {
    case "one":
      return "1"
    case "two":
      return "2"
    case "three":
      return "3"
    case "four":
      return "4"
    case "five":
      return "5"
    case "six":
      return "6"
    case "seven":
      return "7"
    case "eight":
      return "8"
    case "nine":
      return "9"
    default:
      return s
    }
}


const input = await Bun.file("./puzzle-input.txt").text()

console.log(day01(input))