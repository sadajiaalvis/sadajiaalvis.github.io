var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:700,y:groundY},
                {type: 'sawblade',x:1200,y:groundY},
                {type: 'sawblade',x:1800,y: groundY},
            ]
            
             
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
       
        function createSawBlade(x, y){
             var hitZoneSize = 45
        var damageFromObstacle = 30;
        var myObstacle = game. createObstacle(hitZoneSize, damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        }
        
        
        for (var i = 0; i < levelData.gameItems.length; i++){
                var gameItem = levelData.gameItems[i];
                createSawBlade(gameItem.x, gameItem.y);
            }
      
        
        
        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy', 25);
         var redSquare = draw.rect (50, 50,'hotPink');
         redSquare.x = -5;
         redSquare.y = -25;
         enemy.addChild(redSquare);
         enemy.x = 400;
         enemy.y = groundY -20;
         game.addGameItem(enemy);
         enemy.velocityX = -1;
         
        
            enemy.onPlayerCollision = function() {
            console.log('The enemy has Hit Halle')
           
                //all code from TODO 11 and 12
               
        }
        enemy.onProjectileCollision = function(){
            enemy.fadeOut()
        }
        
}
         createEnemy(400, groundY -10);
         createEnemy(500, groundY);
         createEnemy(1500,groundY);
         createEnemy(1800,groundY);
    }
         
}
       
       
       
       
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}