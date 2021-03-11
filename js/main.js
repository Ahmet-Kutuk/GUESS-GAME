let heart = 3;
let random=0;

const guess = () => 
{    
    const number = document.querySelector('#number').value;
    random = parseInt(Math.random()*10)+1;
    
  if(random == number)
    {
        document.querySelector("#result").innerText="YOU WİN!";
        document.querySelector("#guess-btn").classList.add("d-none");
        document.querySelector("#again-btn").classList.remove("d-none");
    }
    else
    {
      
        document.querySelectorAll("#hearts > i")[heart-1].classList.remove("text-danger");
        heart--;

        if(heart>0)
        {
            document.querySelector("#result").innerText="WRONG";
            
            
            console.log(heart);
        }
       
        else
        {
            document.querySelector("#guess-btn").classList.add("d-none");
            document.querySelector("#again-btn").classList.remove("d-none");
            document.querySelector("#result").innerText="Right answer is :"+random;
        }
    }
}
const again = () => 
{
    heart=3;
    for(let i =0; i<3;i++)
    {
        let element =document.querySelectorAll("#hearts >i")[i];
        element.classList.add("text-danger");
    }
    document.querySelector("#guess-btn").classList.remove("d-none");
    document.querySelector("#again-btn").classList.add("d-none");
    document.querySelector("#result").innerText="";
}

document.querySelector("#guess-btn").addEventListener("click",guess);
document.querySelector("#again-btn").addEventListener("click",again);