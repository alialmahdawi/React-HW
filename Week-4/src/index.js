import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class Cell extends React.Component {
    render() {
        return <button className="cell" onClick={this.props.handleClick}>{this.props.value}</button>;
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: new Array(9).fill('-'),
            player1: true,
            player2: false,
            step: 0,

        };
    }
    renderCell(i) {
        return <Cell value={this.state.cells[i]} handleClick={() => this.handleClick(i)} />;
    }



    handleClick(i) {
        console.log('You clicked cell number: ', i);
        const Cells = this.state.cells;
        const NextStep = this.state.step+1;
        Cells[i] === '-' ?
            this.state.player1 ?
                Cells.splice(i, 1, 'X') &&
                this.setState({
                    cells: Cells,
                    player1: false,
                    player2: true,
                    step: NextStep,
                }) :
                Cells.splice(i, 1, 'O') &&
                this.setState({
                    cells: Cells,
                    player1: true,
                    player2: false,
                    step: NextStep,
                })
            : console.log('Still in step '+this.state.step)
    }

    calculateWinner(square) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            // if (Cells[a] || Cells[b] || Cells[c] !== '-') {
                if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                    return square[a];
                }
                return null;
            }
            // return null;
        // }
    }

    render() {
        const status = this.state.step !== 0 ?
            this.state.player1 ?
                "Next player: - X -"
                :
                "Next player: - O -"
            :
            'First Player is - X -'

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderCell(0)}
                    {this.renderCell(1)}
                    {this.renderCell(2)}
                </div>
                <div className="board-row">
                    {this.renderCell(3)}
                    {this.renderCell(4)}
                    {this.renderCell(5)}
                </div>
                <div className="board-row">
                    {this.renderCell(6)}
                    {this.renderCell(7)}
                    {this.renderCell(8)}
                </div>
                <h2>
                    {this.calculateWinner(this.props.cells) ?
                        console.log(this.calculateWinner(this.props.cells)) &&
                        'The Winner Is ' + this.calculateWinner(this.props.cells)
                        : null}
                </h2>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: new Array(9).fill(null)
        };
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board cells={this.state.cells} />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));