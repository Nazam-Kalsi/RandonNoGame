{
  let r = Math.ceil(100 * Math.random());
  console.log("no to guess :" + r);
  let p;

   let heading=document.getElementById('title').innerText='Guess a number';

  do {
    p = prompt("enter no.");
    p = Number.parseInt(p);

      if(p>100)
      {
        console.log(`Enter no. b/w 0 and 100`);
      }
      else if(p<0)
      {
        console.log(`Enter no. greater then 0`);

      }
      else if ((p > r)) 
    {
      console.log(`${p} is Greater then number`);
    } 

    else if ((p < r)) 
    {
      console.log(`${p} is Smaller then number.`);
    }
    
   
  } while(p != r);
 
    {
      console.log("correct Guess");
    }

}

