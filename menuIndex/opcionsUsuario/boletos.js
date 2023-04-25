var currentBoard = 1;
		var totalBoards = 20; //Cambiar esto para agregar más tableros

		function showAlert(buttonNumber) {
			alert("Seleccionó el boleto " + buttonNumber);
		}

		function previous() {
			if (currentBoard > 1) {
				currentBoard--;
				updateBoard();
			}
		}

		function next() {
			if (currentBoard < totalBoards) {
				currentBoard++;
				updateBoard();
			}
		}

		function updateBoard() {
			document.getElementById("board").innerHTML = "";
			for (var i = 1; i <= 10; i++) {
				for (var j = 1; j <= 10; j++) {
					var buttonNumber = (currentBoard - 1) * 100 + (i - 1) * 10 + j;
					var button = '<button class="button" onclick="showAlert(' + buttonNumber + ')">' + buttonNumber + '</button>';
					document.getElementById("board").innerHTML += button;
				}
				document.getElementById("board").innerHTML += '<br/>';
			}
		}
		updateBoard();