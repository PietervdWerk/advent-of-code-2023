function day03(input: string) {
    const lines = input.split('\n')
    let numbers: Array<{ i: number; j: number; number: number }> = []
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            // Not a special character.
            if (lines[i][j] === '.' || !isNaN(parseInt(lines[i][j]))) {
                continue
            }

            ;[
                { i: i - 1, j: j - 1 },
                { i: i - 1, j: j },
                { i: i - 1, j: j + 1 },
                { i: i, j: j + 1 },
                { i: i, j: j - 1 },
                { i: i + 1, j: j - 1 },
                { i: i + 1, j: j },
                { i: i + 1, j: j + 1 },
            ].forEach((position) => {
                // Out of bounds.
                if (
                    position.i < 0 ||
                    position.i > lines.length ||
                    position.j < 0 ||
                    position.j > lines[i].length
                ) {
                    return
                }

                // Not a number.
                if (isNaN(parseInt(lines[position.i][position.j]))) {
                    return
                }

                // Get start position.
                let startNumberFound = false
                let startJ = position.j
                while (!startNumberFound) {
                    if (startJ - 1 < 0 || startJ - 1 > lines[position.i].length) {
                        startNumberFound = true
                        continue
                    }

                    if (!isNaN(parseInt(lines[position.i][startJ - 1]))) {
                        startJ = startJ - 1
                        continue
                    } else {
                        startNumberFound = true
                    }
                }

                let number = {
                    i: position.i,
                    j: startJ,
                    number: 0,
                }

                // Get whole number.
                let numberString = lines[position.i][startJ]
                let fullNumberFound = false
                while (!fullNumberFound) {
                    if (startJ + 1 < 0 || startJ + 1 > lines[position.i].length) {
                        fullNumberFound = true
                        continue
                    }

                    if (!isNaN(parseInt(lines[position.i][startJ + 1]))) {
                        numberString += lines[position.i][startJ + 1]
                        startJ = startJ + 1
                        continue
                    } else {
                        fullNumberFound = true
                    }
                }

                number.number = parseInt(numberString)
                if (
                    numbers.findIndex(
                        (n) => n.i === number.i && n.j === number.j && n.number === number.number,
                    ) === -1
                ) {
                    numbers.push(number)
                }
            })
        }
    }

    return numbers.reduce((acc, curr) => (acc += curr.number), 0)
}

const sampleInput = await Bun.file('./test-input.txt').text()
console.log(day03(sampleInput))

const input = await Bun.file('./puzzle-input.txt').text()
console.log(day03(input))
