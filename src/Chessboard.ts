import { Piece, PieceType, PieceColour } from './Piece';
import { Utility } from './Utility';

let bRook = new Piece(PieceType.Rook, PieceColour.Black);
let bKnight = new Piece(PieceType.Knight, PieceColour.Black);
let bBishop = new Piece(PieceType.Bishop, PieceColour.Black);
let bQueen = new Piece(PieceType.Queen, PieceColour.Black);
let bKing = new Piece(PieceType.King, PieceColour.Black);
let bPawn = new Piece(PieceType.Pawn, PieceColour.Black);

let wRook = new Piece(PieceType.Rook, PieceColour.White);
let wKnight = new Piece(PieceType.Knight, PieceColour.White);
let wBishop = new Piece(PieceType.Bishop, PieceColour.White);
let wQueen = new Piece(PieceType.Queen, PieceColour.White);
let wKing = new Piece(PieceType.King, PieceColour.White);
let wPawn = new Piece(PieceType.Pawn, PieceColour.White);

let empty = new Piece(PieceType.Empty, PieceColour.Empty);


export class Chessboard {

    private boardArray: (Piece)[][] = [
        [bRook, bKnight, bBishop, bQueen, bKing, bBishop, bKnight, bRook],
        [bPawn, bPawn, bPawn, bPawn, bPawn, bPawn, bPawn, bPawn],
        [empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty],
        [wPawn, wPawn, wPawn, wPawn, wPawn, wPawn, wPawn, wPawn],
        [wRook, wKnight, wBishop, wQueen, wKing, wBishop, wKnight, wRook]];

    public constructor() {
    }

    public swapPieces() {
    }

    public getPiece(str: String) {
        let arr = Utility.decodeMovement(str);
        return this.boardArray[arr[0]][arr[1]]
    }

}