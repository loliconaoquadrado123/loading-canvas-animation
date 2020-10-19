window.addEventListener('load',function(){
    class Object{
        constructor(x,y,width,height,vel,direction,color){
            this.x=x;
            this.y=y;
            this.width=width;
            this.height=height;
            this.vel=vel;
            this.direction=direction;
            this.color=color;
            this.sprite=new Image(width,height);

        }
    }
    // class Player extends Object{
        
    mainScene={
        
        Player:new Object(0,0,100,1000,0,0,"#ffffff")
    };

    // }
    function physics(){
        switch(Player.direction){
            case 0:
                break;
            case 1:
                Player.x-=Player.vel;
                break;
            case 2:
                Player.x+=Player.vel;
                break;
            case 3:
                Player.y-=Player.vel;
                break;
            case 4:
                Player.y+=Player.vel;
                break;
        }

        switch(keysPressed){

        }
        if(Player.x==game.width||Player.x<0){
            Player.x=0;
        }
        if(Player.y==game.height||Player.y<0){
            Player.x=0;
            
        }
    }
    const Player=new Object(0,0,100,1000,10,2,"#ffffff");
    const game=document.querySelector('#game');
    const gameContext=game.getContext('2d');
    function update(){
        gameContext.clearRect(0,0,game.width,game.height);
        physics();
        gameContext.fillStyle="blue";
        gameContext.fillRect(Player.x,Player.y,Player.width,Player.height);
        
        
    }

    keysPressed=[];
    window.addEventListener('keydown',(e)=>{
        if(!keysPressed.find((elem)=>e.key==elem))keysPressed.push(e.key);

    })
setInterval(update,100);

})
