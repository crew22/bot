export const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;
export const sleep = async (ms) => {
    return new Promise((resolve, reject) => setTimeout(() => resolve("Timed out!"), ms))
}