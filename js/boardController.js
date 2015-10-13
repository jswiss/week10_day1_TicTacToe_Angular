angular.module('tictactoeApp').controller('BoardController', BoardController);

function BoardController() {
	this.board = [
		[{value: ''}, {value: ''}, {value: ''}],
		[{value: ''}, {value: ''}, {value: ''}],
		[{value: ''}, {value: ''}, {value: ''}]
	];

	this.move = function(cell) {
		cell.value = 'x';
	};
}