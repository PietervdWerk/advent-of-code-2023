function day04(input: string) {
    const lines = input.split('\n')
    let scratchBoards = Array.from(Array(lines.length).keys()).fill(1)

    for (let i = 0; i < lines.length; i++) {
        let [a, b] = lines[i].split(' | ')

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

        for (let j = 1; j < matches + 1; j++) {
            scratchBoards[i + j] += (1 * scratchBoards[i])
        }
    }

    return scratchBoards.reduce((acc, curr) => (acc += curr), 0)
}

const sampleInput = await Bun.file('./test-input.txt').text()
console.log(day04(sampleInput))

const input = await Bun.file('./puzzle-input.txt').text()
console.log(day04(input))
