type Map = {
    destination: number
    source: number
    range: number
}

function day04(input: string) {
    const lines = input.split('\n')
    const seeds = lines
        .shift()!
        .split(' ')
        .slice(1)
        .map((x) => parseInt(x))

    const maps: Map[][] = []

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].length === 0 || isNaN(parseInt(lines[i][0]))) {
            continue
        }

        const map: Map[] = []

        while (i + 1 < lines.length && lines[i].length !== 0) {
            const [destination, source, range] = lines[i].split(' ').map((x) => parseInt(x))
            map.push({ destination, source, range })

            i++
        }

        maps.push(map)
    }

    let lowestLocation = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < seeds.length; i++) {
        const location = maps.reduce((acc, mapEntry) => {
            for (let j = 0; j < mapEntry.length; j++) {
                // Out of range.
                if (mapEntry[j].source > acc || mapEntry[j].source + mapEntry[j].range < acc) {
                    continue
                }

                // In range.
                return mapEntry[j].destination + (acc - mapEntry[j].source)
            }

            return acc
        }, seeds[i])

        lowestLocation = Math.min(location, lowestLocation)
    }

    return lowestLocation
}

const sampleInput = await Bun.file('./test-input.txt').text()
console.log(day04(sampleInput))

const input = await Bun.file('./puzzle-input.txt').text()
console.log(day04(input))
