 $( document ).ready(function() {

	console.log("ready");

		var luke = {

			healthPoints: 100,
			attackPower: 5,
			counterAttackPower: 15



		} ;

		var maul = {

			healthPoints: 150,
			attackPower: 15,
			counterAttackPower: 2



		} ;

		var obi = {
			healthPoints: 130,
			attackPower: 10,
			counterAttackPower: 2,

		}

		var darth = {
			healthPoints: 200,
			attackPower: 20,
			counterAttackPower: 2,

		}


		//trying to check if a character is selected

		var generic = '.generic';
		var userCharacter = 'userCharacter';
		var defender = 'defender';
		var characterLevel = "#character";
		var enemyLevel = "#enemies";



		$(".generic").click(function() {


			$(this).addClass("userCharacter");
			$(this).removeClass("generic");
			$(this).appendTo("#character");


			
		/*	$(".generic").addClass(".defender");
			$(".defender").removeClass(".generic");
			$(".defender").appendTo("#enemies"); */
			

			console.log($("#enemies").hasClass(".defender"));
			


	});

	



		/*





		$(".character").click(function(){

			var printT = $(this).attr("id");

			if(printT === "luke") {
				lukePlay();
			}

		});




		


		// each individual game will function

	

		function lukePlay() {

			
				$("#luke").appendTo("#character");

				$("#maul").appendTo("#enemies");
				$("#obi").appendTo("#enemies");
				$("#darth").appendTo("#enemies");

				$("#darth").css("background-color", "red");
				$("#obi").css("background-color", "red");
				$("#maul").css("background-color", "red");

				$()












				if(!($.contains("#defender", "div"))) {

					$("#maul").click(function() {

						$(this).appendTo("#defender");
						lukeFights();
					});

				} else {
					console.log("there is already a fighter there");
				}




				

			};

		function lukeFights () {

			$(":button").click(function() {


				var userAttack = luke.attackPower;
				var opponentAttack = maul.counterAttackPower;


				luke.healthPoints -= opponentAttack;
				maul.healthPoints -= userAttack;

				luke.attackPower += 30;

				$("#lukehp").html("<p>" + luke.healthPoints + "</p>");
				$("#maulhp").html("<p>" + maul.healthPoints + "</p>");



				console.log("Lukes health is: " + luke.healthPoints);
				console.log("Maul's health is: " + maul.healthPoints);


				if(luke.healthPoints <= 0) {

					//this is were a will run the loser
					console.log("Luke is defeated! You suck!");
					return;
				} else if (maul.healthPoints <= 0) {
					console.log("You have defeated your opponent!");
					$("#maul").remove();
					lukePlay();
				}

			});







		}

		
			

		

	





		



















		// another way of possible doing this

		function game() {

			if($("#enemies").has("#maul")) {


				$("#maul").click( function() {
					$(this).appendTo("#defender");

				})


				
			}
		}





		$("#luke").click(function() {

			if($("#character").has("div") === false) {
				
				$(this).appendTo("#character");

			} else {
				$("#maul").appendTo("#enemies");
				$("#obi").appendTo("#enemies");
				$("#darth").appendTo("#enemies");

				game();
			}

		});

		$("#obi").click(function() {

			if($("#character").has("div") === false) {
				
				$(this).appendTo("#character");

			} else {
				$("#maul").appendTo("#enemies");
				$("#luke").appendTo("#enemies");
				$("#darth").appendTo("#enemies");
			}

		});

		$("#darth").click(function() {

			if($("#character").has("div") === false) {
				
				$(this).appendTo("#character");

			} else {
				$("#obi").appendTo("#enemies");
				$("#luke").appendTo("#enemies");
				$("#maul").appendTo("#enemies");
			}

		});

		$("#maul").click(function() {

			if($("#character").has("div") === false) {
				
				$(this).appendTo("#character");

			} else {
				$("#obi").appendTo("#enemies");
				$("#luke").appendTo("#enemies");
				$("#darth").appendTo("#enemies");
			}

		});


			



		

		*/









 




});


