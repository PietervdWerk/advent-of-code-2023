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

    const seedRanges: number[][] = []
    for (let i = 0; i < seeds.length; i += 2) {
        seedRanges.push([seeds[i], seeds[i + 1]])
    }

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

        maps.push(map.sort((a, b) => a.source - b.source))
    }

    let locationRanges = [...seedRanges]

    // Repeat for every map.
    for (let i = 0; i < maps.length; i++) {
        // Repeat for every location range, output of previous loop.
        for (let j = 0; j < locationRanges.length; j++) {
            // Create new mapping.
            for (let k = 0; k < maps.length; k++) {
                let localRanges: number[][] = []

                for (let l = 0; l < maps[k].length; l++) {
                    if (maps[k][l].source == locationRanges[j][1]) {
                        if (maps[k][l].range == locationRanges[j][1]) {
                            localRanges.push([maps[k][l].destination, maps[k][l].destination + maps[k][l].range])
                        } else if (maps[k][l].range > locationRanges[j][1]) {
                            localRanges.push([maps[k][l].destination, maps[k][l].destination + locationRanges[j][1]])
                            localRanges.push([maps[k][l].destination + locationRanges[j][1], maps[k][l].destination + maps[k][l].range])
                        }
                        localRanges.push([maps[k][l].destination, maps[k][l].destination + maps[k][l].range])
                    }
                }

                locationRanges = localRanges
            }
        }
    }

    //     const location = maps.reduce((acc, mapEntry) => {
    //         for (let j = 0; j < mapEntry.length; j++) {
    //             // Out of range.
    //             if (mapEntry[j].source > acc || mapEntry[j].source + mapEntry[j].range < acc) {
    //                 continue
    //             }

    //             // In range.
    //             return mapEntry[j].destination + (acc - mapEntry[j].source)
    //         }

    //         return acc
    //     }, k)

    //     lowestLocation = Math.min(location, lowestLocation)

    //     i++
    // }

    // return lowestLocation
}

const sampleInput = await Bun.file('./test-input.txt').text()
console.log(day04(sampleInput))

// const input = await Bun.file('./puzzle-input.txt').text()
// console.log(day04(input))
