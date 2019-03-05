const phrases = ['hello there', 'how are you'];


function getRandomPhrase() {
    random =  Math.floor(Math.random()*phrases.length);
    let randPhrase = phrases[random];
    return  randPhrase;
  }
 // console.log(getRandomPhrase());
randPhrase = getRandomPhrase()

function loadPhrase(){
    let test=   document.getElementById('phrase').firstElementChild;
       for (let i = 0; i < randPhrase.length; i++) {
           letter = '';
           if(randPhrase[i]==" "){
               letter = `<li class="letter_hide show ${randPhrase[i]}">${randPhrase[i]}</li>`;
           }else{
               letter = `<li class="letter ${randPhrase[i]}">${randPhrase[i]}</li>`;
           }
           test.insertAdjacentHTML('beforeEnd', letter)
       }
    
   }