game = 
{
  wins:0,
  loses:0,
  ties:0,
  matches:0,
};
function rps()
{
  game.matches++;
  let x = Math.floor(Math.random()*100);
  x = x%3;
  if(x == 2)        return "Rock";
  else if(x == 1)   return "Paper";
  else              return "Scissors";
}
function play(mychoice)
{
  let comp = rps();
  let str = `Your choice is ${mychoice} , computer choice is ${comp}. You `;
  str += decide(mychoice,comp);
  alert(`${str}\nmatches = ${game.matches} \nwins = ${game.wins} \nloses = ${game.loses} \nties = ${game.ties}`);
} 
function decide(mychoice,comp)
{
  if(mychoice === comp)
  {
    game.ties++;
    return 'Tie';
  }

  if(mychoice === 'Rock')
  {
    if(comp === 'Paper')
    {
      game.loses++;
      return 'Lose';
    }
    else  
    {
      game.wins++;              
      return 'Win';
    }
  }
  else if(mychoice === 'Paper')
  {
    if(comp === 'Scissors')
    {
      game.loses ++;
      return 'Lose';
    }
    else  
    {
      game.wins++;
      return 'Win'; 
    }
  }
  else
  {
    if(comp === 'Paper')
    {
      game.wins++;
      return 'Win';
    }
    else
    {
      game.loses++;
      return 'Lose';
    }
  }
} 
function reset()
{
  game.wins = game.loses = game.ties = game.matches =0;
  alert('All scores are reset');
}