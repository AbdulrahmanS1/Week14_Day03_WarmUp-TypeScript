let one: Array<string> = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'S', 'T'];
let two: Array<string> = ['D', 'G'];
let three: Array<string> = ['B', 'C', 'M', 'P'];
let four: Array<string> = ['F', 'H', 'V', 'W', 'Y'];
let five: Array<string> = ['K'];
let six: Array<string> = ['J', 'X'];
let seven: Array<string> = ['Q', 'Z'];

function calculcateString(Sarawiq: string): number {
    let count: number = 0;
    Sarawiq.toUpperCase().split('').forEach(element => {
        if (one.includes(element)) {
            count++
        }
        else if (two.includes(element)) {
            count += 2
        }
        else if (three.includes(element)) {
            count += 3
        }
        else if (four.includes(element)) {
            count += 4
        }
        else if (five.includes(element)) {
            count += 5
        }
        else if (six.includes(element)) {
            count += 8
        }
        else if (seven.includes(element)) {
            count += 10
        }
        else  {
            count += 0
        }
    });
    return count;
}
console.log(calculcateString('Sarawiq'));