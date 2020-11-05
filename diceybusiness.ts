// work from class on how to do this part 
class Die {
    constructor(value, x, y) {
      this.div = document.createElement("div");
      this.div.classList.add("newdie");
      this.div.style.left = `${x}px`;
      this.div.style.top = `${y}px`;
      this.div.style.border = "black, solid, 2px";
  
      this.div.appendChild(document.createTextNode(`${value}`));
      container.appendChild(this.div);
  
      this.div.addEventListener('click', () => {
          this.roll();
      });
  
      btn2.addEventListener('click', () => {
          this.roll();
      });
  
      this.div.addEventListener('dblclick', () => {
          this.deleteDie();
      });
  
    }
    roll() {
      let rollValue = randomVal(1, 7);
      $(this.div).empty();
      this.div.appendChild(document.createTextNode(`${rollValue}`));
    }
  
    deleteDie() {
        this.div.remove();
    }
  }
  
  let container = document.getElementById("container");
  let diceArray = [];
  
   //adding buttons 
  let btn = document.getElementById("button-die");
  let btn2 = document.getElementById("button-roll");
  let btn3 = document.getElementById("button-sum");
  
  btn.addEventListener("click", createDie);
  btn3.addEventListener("click", sumDice);
  
  function createDie() {
    let xValue = 25;
    let yValue = 25;
    let dieValue = randomVal(1, 7);
    let die = new Die(dieValue, xValue, yValue);
    diceArray.push(die);
    console.log(diceArray);
  }
  
  function sumDice(){
      var sum = 0;
       
   };
  