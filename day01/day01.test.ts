import { describe, it, expect } from 'bun:test'
import { day01 as partOne } from './day01.part-one'
import { day01 as partTwo } from './day01.part-two'

describe('part one', () => {
  it('should return default output', async () => {
    const input = await Bun.file('./test-input.part-one.txt').text()

    expect(partOne(input)).toBe(142)
  })
})

describe('part two', () => {
  it('should return default output', async () => {
    const input = await Bun.file('./test-input.part-two.txt').text()

    expect(partTwo(input)).toBe(281)
  })
})
