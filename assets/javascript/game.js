 $( document ).ready(function() {

	console.log("ready");


	// are the available charcter and their stats

		var luke = {

			healthPoints: 100,
			attackPower: 5,
			counterAttackPower: 15




		} ;

		var maul = {

			healthPoints: 150,
			attackPower: 15,
			counterAttackPower: 2,



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

		var isCharacterChosen = false;
		var isEnemyChosen = false;
		var defenderPicked = false;

		/* whenever one of the characters is selected at the very beginning of the game
			a class is added called "userCharacter" and "generic" class is removed it turns green and
			 sends it to the "Your Character area"

			 At the same time it takes all of the other characters and give them the "defender" class
			 they turn red and their "generic" class is removed as well and send the "available enemies"

		*/
		



			$(".generic").click(function() {

				if(!(isCharacterChosen)) {


				$(this).addClass("userCharacter");
				$(this).removeClass("generic");
				$(this).appendTo("#character");


				
				$(".generic").addClass("defender");
				$(".defender").removeClass("generic");
				$(".defender").appendTo("#enemies"); 
				
				isCharacterChosen = true;


				} 

				chooseDefender();


				



				});


			// this function helps you chose which enemy you want to fight
			// it sends them to the "defender" area

			


		

			function chooseDefender () {

				$(".defender").click(function() {

					if(!(isEnemyChosen)) {

						$(this).appendTo("#defender");

						isEnemyChosen = true;
						whoIs();
					}


			});

		}


		// this function help you determine the identity of the person you are fighting



			function whoIs () {

					var userHealthPoints;
					var userAttackPower;
					var userCounterAttack;
					var userHealthDisplay;

					var opponentHealthPoints;
					var opponentAttackPower;
					var opponentCounterAttack;
					var opHealthDisplay;


					if($("#defender").children("div").attr("id") === "luke") {

						console.log("YOU ARE FIGHTING LUKE!");

						opponentHealthPoints = luke.healthPoints;
						opponentAttackPower = luke.attackPower;
						opponentCounterAttack = luke.counterAttackPower;
						opHealthDisplay = $("#lukehp"); // we are grabbing the health value about the character so we can change it later
					}

					if($("#defender").children("div").attr("id") === "obi") {

						console.log("YOU ARE FIGHTING OBI!");

						opponentHealthPoints = obi.healthPoints;
						opponentAttackPower = obi.attackPower;
						opponentCounterAttack = obi.counterAttackPower;
						opHealthDisplay = $("#obihp");
					}

					if($("#defender").children("div").attr("id") === "darth") {

						console.log("YOU ARE FIGHTING DARTH!");

						opponentHealthPoints = darth.healthPoints;
						opponentAttackPower = darth.attackPower;
						opponentCounterAttack = darth.counterAttackPower;
						opHealthDisplay = $("#darthhp");
					}

					if($("#defender").children("div").attr("id") === "maul") {

						console.log("YOU ARE FIGHTING MAUL!");

						opponentHealthPoints = maul.healthPoints;
						opponentAttackPower = maul.attackPower;
						opponentCounterAttack = maul.counterAttackPower;
						opHealthDisplay = $("#maulhp");
					}


					if($("#character").children("div").attr("id") === "luke") {

						console.log("THE USER CHOSE LUKE");

						userHealthPoints = luke.healthPoints;
						userAttackPower = luke.attackPower;
						userCounterAttack = luke.counterAttackPower;
						userHealthDisplay = $("#lukehp");
						roundWon = true;
						
						
					}

					if($("#character").children("div").attr("id") === "obi") {

						console.log("THE USER CHOSE OBI");

						userHealthPoints = obi.healthPoints;
						userAttackPower = obi.attackPower;
						userCounterAttack = obi.counterAttackPower;
						userHealthDisplay = $("#obihp");
						roundWon = true;
						
						

					}

					if($("#character").children("div").attr("id") === "darth") {

						console.log("THE USER CHOSE DARTH");

						userHealthPoints = darth.healthPoints;
						userAttackPower = darth.attackPower;
						userCounterAttack = darth.counterAttackPower;
						userHealthDisplay = $("#darthhp");
						roundWon = true;
						

					}

					if($("#character").children("div").attr("id") === "maul") {

						console.log("THE USER CHOSE MAUL");

						userHealthPoints = maul.healthPoints;
						userAttackPower = maul.attackPower;
						userCounterAttack = maul.counterAttackPower;
						userHealthDisplay = $("#maulhp");
						roundWon = true;
			

					}


					// when the "attack" button is pressed 



					$("button").click(function() {
		


						userHealthPoints -= opponentCounterAttack;
						opponentHealthPoints -= userAttackPower;

						userHealthDisplay.html(userHealthPoints);
						opHealthDisplay.html(opponentHealthPoints);

						console.log("=======================================");

						console.log("the opp hp is: " + opponentHealthPoints);

						if(userHealthPoints <= 0) {

							$("#character").remove();
							$("#commentary").html("YOU WERE DEFEATED!").css("color", "red");
							 $("button").off('click');


						} else if (opponentHealthPoints <= 0) {

							// removes the defender after you beat him

							$("#defender").children().remove();
                            isEnemyChosen = false;
                            $("button").off('click');
                            return;

                            // after you beat your opponent you get to chose another to beat



							chooseDefender();



						}


		});

	}

		});



