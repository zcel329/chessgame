export class Utility {

    // Takes in a two length string and outputs a 1x2 array (i,j)
    public static decodeMovement(str: String) {

        str = str.toUpperCase();

        let i: number;
        let j: number;

        i = 8 - Number(str.charAt(1));

        j = str.charCodeAt(0) - 65;

        if (j < 0 || j > 7) {
            console.log("INVALID DECODED MOVE!");
        }

        let output: (number)[] = [i, j];
        return output;
    }
}