{
  let r = Math.ceil(100 * Math.random());
  console.log("no to guess :" + r);
  let p;
  let heading=document.getElementById("title");
  heading.innerHTML="Find the number I Guess ";
  
  function val() {
    p = document.getElementById("user_input").value;
    p = Number.parseInt(p);
    console.log(p);
    // console.log(typeof(p));
    
    
    if (p > 100) {
      heading.innerHTML = "Enter no. less than 100";
    } else if (p < 0) {
      heading.innerHTML = "Enter no. greater than 0";
    } else if (p > r) {
      heading.innerHTML = `${p} is Greater than number`;
    } else if (p < r) {
      heading.innerHTML = `${p} is Smaller than number.`;
    }
    
    else if(p==r){
      heading.innerHTML = "Correct Guess";
      let v=document.getElementById('vid');
      v.play();

    }
    }
}