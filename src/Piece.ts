export enum PieceType {
    Rook,
    Knight,
    Bishop,
    Queen,
    King,
    Pawn,
    Empty,
}

export enum PieceColour {
    White,
    Black,
    Empty,
}

export class Piece {

    private type: PieceType;
    private colour: PieceColour;

    public constructor(type: PieceType, colour: PieceColour) {
        this.type = type;
        this.colour = colour;
    }

    public getColour() {
        return this.colour;
    }

    public getPieceType() {
        return this.type;
    }

    public checkMove() {
    }
}