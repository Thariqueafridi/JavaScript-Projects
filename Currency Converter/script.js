let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')

// Call API and get the list of currencies

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))


// Work for showing List in Dropdown

function displayDropDown(res){
    //console.log(Object.entries(res)[2][0])
    let curr = Object.entries(res)
    for(let i=0;i<curr.length;i++){
      let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
      select[0].innerHTML += opt
      select[1].innerHTML += opt
    }
  }

//next Add event listener to the  Convert Button.


btn.addEventListener('click',()=>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value
    if(curr1===curr2)
      alert("Choose different currencies")
    else
      convert(curr1,curr2,inputVal)
  });

  //After all give three values as input and Call API for the Result
  
  function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
      document.getElementById('result').value = Object.values(data.rates)[0]
    });
  
  }



