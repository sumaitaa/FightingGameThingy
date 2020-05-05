

console.log("Hi hi. Why are you here? There's nothing to see here.");


var attkButton = document.getElementById("attk");
var healButton = document.getElementById("heal");
var plyHealthSay = document.getElementById("PlyHealth");
var enmyHealthSay = document.getElementById("EnmyHealth");
var restartButton = document.getElementById("restart");
var enemyImg = document.getElementById("enemy");


var healsUsed = 0;

var numOfHeals = 3;
healButton.value = "Heal (" + numOfHeals + " heals left)";

var playerHealth = 100;
plyHealthSay.innerHTML = "Your health is: " + playerHealth;

var enemyHealth = 100;
enmyHealthSay.innerHTML = "Enemy's health is: " + enemyHealth;

if (enemyHealth <= 100 && enemyHealth > 61){
       enemyImg.src = "100-61%25.png";
}



reloadPage = function(){
    window.location.reload();
}

attack = function(){
    
    let losePlyHealth = Math.floor(Math.random()* 10) + 1;
    let remainingPlyHealth = parseInt(playerHealth) - parseInt(losePlyHealth);
    playerHealth = remainingPlyHealth;
    
    plyHealthSay.innerHTML = "Your health is: " + playerHealth;
    
    let loseEnmyHealth = Math.floor(Math.random() * 8) + 1;
    
    let remainingEnmyHealth = parseInt(enemyHealth) - parseInt(loseEnmyHealth);
    enemyHealth = remainingEnmyHealth;
    
    enmyHealthSay.innerHTML = "Enemy's health is: " + enemyHealth;
    
    
    if(loseEnmyHealth > losePlyHealth){
       
        enemyImg.src = "attacked.png";
        setTimeout(function(){
           
        }, 6000);
        setTimeout(function(){
            if (enemyHealth <= 100 && enemyHealth > 61){
    enemyImg.src = "100-61%25.png";
}
else if (enemyHealth <= 60 && enemyHealth > 1){
    enemyImg.src = "60-1%25.png";
    
    if (enemyHealth <= 0 && playerHealth >= enemyHealth){
        enemyImg.src = "dead.png";
    }
    if (playerHealth <= 0 && enemyHealth >= playerHealth){
        enemyImg.src = "win.png";
    }
}
        }, 2500);
    }
    
    if (losePlyHealth > loseEnmyHealth){
    
        enemyImg.src = "attack.png";
        setTimeout(function(){
        
        }, 6000);
        setTimeout(function(){
            if (enemyHealth <= 100 && enemyHealth > 61){
    enemyImg.src = "100-61%25.png";
}
else if (enemyHealth <= 60 && enemyHealth > 1){
    
    enemyImg.src = "60-1%25.png";
    
    if (enemyHealth <= 0 && playerHealth >= enemyHealth){
        enemyImg.src = "dead.png";
    }
    
    if (playerHealth <= 0 && enemyHealth >= playerHealth){
        enemyImg.src = "win.png";
    }
}
        }, 2000);
        
        
    }
    
    if(playerHealth <= 0 && enemyHealth >= playerHealth){
        
        let randomEnemyHealth = Math.floor(Math.random() * 15) + 5;
        plyHealthSay.innerHTML = "Your health is: 0.<span id='lost'> You lost! </span> ";
        enmyHealthSay.innerHTML = "<span id='won'> The enemy won! </span> ";
        
        attkButton.disabled = true;
        healButton.disabled = true; 
        
        enemyImg.src = "win.png";
        
        
    } if (enemyHealth <= 0 && playerHealth >= enemyHealth){
        
        let randomEnemyHealth = Math.floor(Math.random() * 15) + 5;
        plyHealthSay.innerHTML = "<span id='won'> You won! </span> ";
        enmyHealthSay.innerHTML = "Enemy's health is: 0.<span id='lost'> They lost! </span> ";
        
        attkButton.disabled = true;
        healButton.disabled = true; 
        
        enemyImg.src = "dead.png";
        
    }
    

    
}

heal = function(){
    
    healsUsed++;
    numOfHeals--;
    let healNum = Math.floor(Math.random () * 20) + 5;
    
    healButton.value = "Heal (" + numOfHeals + " heals left)";
    
    playerHealth += healNum;
    
    if (playerHealth >= 100){
        
            playerHealth = 100;
            plyHealthSay.innerHTML = "Your health is: " + playerHealth;
        
    } else {
        
         plyHealthSay.innerHTML = "Your health is: " + playerHealth;
        
    }
    
    if (healsUsed == 3){
        
        healButton.disabled = true;   
        
    }
    

    setTimeout(function(){
  
    }, 6000);
}
