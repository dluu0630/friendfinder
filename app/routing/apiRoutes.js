var friends 		= require('../data/friends.js');
var path 			= require('path');

// API GET 

var totalDifference = 0;

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friends);
  });

// API POST 

	app.post('/api/friends', function(req, res){

		var greatMatch = {
			name: "Nobody",
			image: "",
			friendDifference: 1000
    };
		var usrData 	= req.body;
		var usrName 	= usrData.name;
		var usrImage 	= usrData.image;
		var usrScores 	= usrData.scores;

    var totalDifference = 0;

    //loop through friend array to get score
		for(var i = 0; i < friends.length-1; i++){
			totalDifference = 0;
			//loop through that friends and user score and calculates difference
			for(var j = 0; j < 10; j++){
                totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));
				// best matched if sum of difference is less than current
				if (totalDifference <= greatMatch.friendDifference){
					// Reset bestMatch to new friend
					greatMatch.name = friends[i].name;
					greatMatch.photo = friends[i].photo;
                    greatMatch.matchDifference = totalDifference;
				}
			}
		}
		friends.push(usrData);
 
		res.json(greatMatch);
  });
  
};