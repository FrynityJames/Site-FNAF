// Classe des combattants
class Scrap{
    constructor(name, description, hp, attack, touchPercent){ // son nom, sa description, ses points de vie, ses points d'attaque, sa chance de toucher /1
        this.name = name;
        this.description = description;
        this.hp = hp;
        this.attack = attack;
        this.touchPercent = touchPercent;
    }

    AttackEnemy(target){
        if (this.IsTouch()){
            target.hp -= this.attack;
        } else {
            console.log(`L'attaque de ${this.name} contre ${target.name} a échoué.`);
        }
    }
    IsTouch(){
        let test = Math.random(0,1);
        return (test < this.touchPercent);
    }
}

let scrap1 = new Scrap("Freddy",
    "Ours",
    100,
    10,
    0.67);

let scrap2 = new Scrap("Foxy", 
    "Renard pirate",
    120,
    12,
    0.73);

while (scrap1.hp > 0 && scrap2.hp > 0) {

    scrap1.AttackEnemy(scrap2);
    
    if (scrap2.hp <= 0) {
        console.log(`${scrap2.name} a perdu le combat.`);
        break;
    }
    
    scrap2.AttackEnemy(scrap1);
    
    if (scrap1.hp <= 0) {
        console.log(`${scrap1.name} a perdu le combat.`);
        break;
    }
}