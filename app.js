window.onload =function(){

    show(0);
}

var Quesitions= [{
id:1,
Quesition:"Who is inventor of Javascript?",
answer: "Bredan Eich",
options:[
    "Dannis Ritche",
    "Bredan Eich",
    "james gosling",
    "Rosuum"
]
},


{
    id:2,
Quesition:"Who is inventor of Apple?",
answer: "Steve job",
options:[
    "Dannis Ritche",
    "steve job",
    "james gosling",
    "Rosuum"
]

},



{
    id:3,
    Quesition:"Who is inventor of google?",
    answer: "larry pages",
    options:[
        "Dannis Ritche",
        "steve job",
        "larry pages",
        "Rosuum"
    ]


},



{
    
    id:4,
    Quesition:"Who is inventor of sumsung?",
    answer: "lee buying chul",
    options:[
        "Dannis Ritche",
        "steve job",
        "larry pages",
        "lee buying chul"

    ]
      
    
}
   
]


var ques_count=0;
function next()
{
    ques_count++;
 console.log(ques_count);    
 show( ques_count);
}

function show(e)
{
    var que=document.getElementById("ques")
    que.innerHTML=`<h1>  ${Quesitions[e].Quesition} </h1>
    
    <ul class="list">

    <li class="option"> ${Quesitions[e].options[0]} </li>
    <li class="option"> ${Quesitions[e].options[1]} </li>
    <li class="option"> ${Quesitions[e].options[2]} </li>
    <li class="option"> ${Quesitions[e].options[3]} </li>

</ul>`
    
active(); 
}

function active()
{
    let option1 = document.querySelectorAll("li.option")

    for(let i=0 ; i< option1.length ; i++)
    {
            option1[i].onclick= function()
            {
                for(let j=0;j<option1.length;j++)
                {

                    if(option1[j].classList.contains("active"))
                    
                    {
                        option1[j].classList.remove("active");
                    }
                    
                }
            
                option1[i].classList.add("active");
    }

}



}

function show1()
{
  var count=0;
  var right=document.getElementById('1');
 
  var m=document.getElementsByName("Dannis Ritche");
  var s=document.getElementsByName("Bredan Eich");
  var n=document.getElementsByName("james gosling");
  var o=document.getElementsByName("Rosuum");
   
  if(s.select == true)
  {
      count++;
      alert("Quesiton 1 is right");
  }
  else
  {
      alert("Quesition 1 is wrong");
  }
  
  
  
  var right=document.getElementById('2');
  
  var s=document.getElementsByName("Dannis Ritche");
  var m=document.getElementsByName("steve job");
  var n=document.getElementsByName("james gosling");
  var o=document.getElementsByName("Rosuum");
  
  if(m.selected == true)
  {
      count++;
      alert("Quesiton 2 is right");
  }
  else
  {
      alert("Quesition 2 is wrong");
  }
  
  
  var right=document.getElementById('3');
  var m=document.getElementsByName("Dannis Ritche");
  var s=document.getElementsByName("steve job");
  var n=document.getElementsByName("larry pages");
  var o=document.getElementsByName("Rosuum");

  if(n.selected == true)
  {
      count++;
      alert("Quesiton 3 is right");
  }
  else
  {
      alert("Quesition 3 is wrong");
  }
  
  
  var right=document.getElementById('4');
 
  var m=document.getElementsByName("Dannis Ritche");
  var s=document.getElementsByName("steve job");
  var n=document.getElementsByName("larry pages");
  var o=document.getElementsByName("Rlee buying chul");

  if(o.selected == true)
  {
      count++;
      alert("Quesiton 4 is right");
  }
  else
  {
      alert("Quesition 4 is wrong");
  }
  
  
  alert(" Result is  = " + count + " / 4 ");

}