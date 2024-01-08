import { writable } from 'svelte/store'

export const playerXgames = writable(0)
export const draws = writable(0)
export const playerOgames = writable(0)
export const turn = writable('X')
export const gameData = writable(['','','','','','','','',''])
export const won = writable(false)
export const winner = writable('')