function day04(input: string) {
    return input.split('\n').reduce((acc, line) => {
        let [a, b] = line.split(' | ')
        const winningNumbers = a
            .split(': ')[1]
            .split(' ')
            .filter((x) => x !== '')
            .map((x) => parseInt(x))

        const numbers = b
            .split(' ')
            .filter((x) => x !== '')
            .map((x) => parseInt(x))

        const matches = numbers.reduce((total, curr) => {
            if (winningNumbers.indexOf(curr) === -1) {
                return total
            }

            return (total += 1)
        }, 0)

        if (matches > 1) {
            return (acc += Math.pow(2, matches - 1))
        }

        return (acc += matches)
    }, 0)
}

const sampleInput = await Bun.file('./test-input.txt').text()
console.log(day04(sampleInput))

const input = await Bun.file('./puzzle-input.txt').text()
console.log(day04(input))
