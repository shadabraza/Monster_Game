/* function callToAnother(){
    adjustHealthBars(30)
  }
 let maxDeal = 10;
  function original(){
    if(monsterHealthBar.value === 100)
    {
      alert("max ppoint achieved");
      if(bonusLifeEl.innerHTML===0){
        bonusLifeEl.innerHTML = 1
      }else{
        bonusLifeEl.innerHTML = 1
      }
    } else {
      resetGame(monsterHealthBar.value);
    monsterHealthBar.value = monsterHealthBar.value + 10;
    }
    
  }
  let achvMinVal = 0;
  function strongAttack(){
    adjustHealthBars(achvMinVal) ;
    bonusLifeEl.innerHTML = 0;
  }
  
  attackBtn.addEventListener('click', callToAnother);
  healBtn.addEventListener('click', original);
  strongAttackBtn.addEventListener('click', strongAttack) */

  const ATTACK_VALUE = 10;
  let chooseMaxValue = 100;
  const STRONG_ATTACK_VALUE = 28;
  const HEAL_VALUE = 32;

  let bonuValue = 2;

  let MONSTER_ATTACK_VALUE = 14;

  let currentMonsterHealth = chooseMaxValue;
  let currentPlayerHealth = chooseMaxValue;

  adjustHealthBars(chooseMaxValue);

  function endRound(){
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth = currentPlayerHealth -playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
      alert('You won');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
      alert('You Lost');
      //bonusLifeEl.innerHTML = bonuValue++;
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
      alert('You Draw');
    }
  }

    
  function MonsterHandler(mode){
    let maxDamage;
    if(mode === 'ATTACK'){
      maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
      maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth = currentMonsterHealth - damage;
    endRound();


  }


  function attackHandler(){
    MonsterHandler("ATTACK")
   
  }

  function strongAttackHandler(){
    MonsterHandler("STRONG_ATTACK")
  }

  function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chooseMaxValue - HEAL_VALUE){
      healValue = chooseMaxValue - currentPlayerHealth;
    } else {
      healValue = HEAL_VALUE;
    }
   increasePlayerHealth(HEAL_VALUE);
   currentPlayerHealth = currentPlayerHealth + HEAL_VALUE;
   endRound();
  }

  attackBtn.addEventListener('click', attackHandler);
  strongAttackBtn.addEventListener('click', strongAttackHandler);
  healBtn.addEventListener('click', healPlayerHandler)

  