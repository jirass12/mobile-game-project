var bgmusic;
var lvlProgress = 0;
var bgplayer;

var loadState = {
	
	preload: function(){
		game.load.spritesheet('player','assets/dante_walk.png',48,64)
		
		 game.load.script('filter', 'js/filters/filter1file.js');
		
		game.load.spritesheet('bg','assets/sprite-fire-cavern.png',1734.625,750);
		game.load.spritesheet('hearts','assets/hearts.png',120,73);
	//	game.load.spritesheet('fml1','assets/fml1.png',158.6,150);
		
		game.load.image('no1','assets/no1.png');
		game.load.image('no2','assets/no2.png');
		game.load.image('no3','assets/no3.png');
		game.load.image('bg3','assets/lvlSelect.jpg');
		game.load.image('bullet','assets/bullet.png');
		game.load.image('exittomenu','assets/exittomenu.png');
		game.load.image('resume','assets/resume.png');
		game.load.image('lvlprogress','assets/fireprogress.png')
		game.load.image('container2','assets/container2.png');
		
		game.load.audio('music',['assets/mus_core.ogg']);
	},
	
	create: function(){
		bgmusic = game.add.audio('music');
		bgmusic.play();
		bgmusic.loopFull(0.6);
		game.state.start('menu');
		
		
	}
	
}