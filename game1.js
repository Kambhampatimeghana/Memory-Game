let result=document.getElementById('score');
let gridres=document.getElementById('grid');

const arr=[
    {
        name:'biscuits',
        img:'images/biscuits.png'
    },
    {
        name:'burger',
        img:'images/burger.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'popcorn',
        img:'images/popcorn.png'
    },
    {
        name:'sandwich',
        img:'images/sandwich.png'
    },
    {
        name:'biscuits',
        img:'images/biscuits.png'
    },
    {
        name:'burger',
        img:'images/burger.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'popcorn',
        img:'images/popcorn.png'
    },
    {
        name:'sandwich',
        img:'images/sandwich.png'
    }
]
let scores=0;
arr.sort(()=>0.5-Math.random())
function createCards(){
    for(let i=0;i<arr.length;i++){
      const card=document.createElement('img')
      card.setAttribute('src','images/blur.png')
      card.setAttribute('data-id',i);
      gridres.appendChild(card)
      card.addEventListener('click',flipcard)
  }
}
let chosennames=[];
let chosenids=[];
function gameplay(){
    const cards=document.querySelectorAll('img')
    if(chosenids[0]==chosenids[1]){
        alert("don't click on same item"); 
        cards[chosenids[0]].setAttribute('src','images/blur.png');
    }else if(chosennames[0]===chosennames[1]&&chosenids[0]!=chosenids[1]){
        scores++;
        cards[chosenids[0]].setAttribute('src','images/white.png');
        cards[chosenids[1]].setAttribute('src','images/white.png');
        cards[chosenids[0]].removeEventListener('click',flipcard)
        cards[chosenids[1]].removeEventListener('click',flipcard)
    }else{
        cards[chosenids[0]].setAttribute('src','images/blur.png');
        cards[chosenids[1]].setAttribute('src','images/blur.png');
        alert('sorry! try again')
    }
    chosennames=[];
    chosenids=[];
    if(scores==arr.length/2){
        result.innerText='Congratulations! You completed the game'
    }else
    result.innerText=scores
}
createCards()
function flipcard(){
 let present=this.getAttribute('data-id');
 chosennames.push(arr[present].name);
 this.setAttribute('src',arr[present].img)
 chosenids.push(present);
 if(chosennames.length==2){
    setTimeout(gameplay,500);
 }

}