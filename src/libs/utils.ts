export default function compute(method: string, fNumber: number, sNumber: number): number {
    switch (method) {
        case "plus":
            return fNumber + sNumber;
        case "minus":
            return fNumber - sNumber;
        case "mul":
            return fNumber * sNumber;
        case "div":
            return fNumber / sNumber;
        default:
            return -1;
    }
}