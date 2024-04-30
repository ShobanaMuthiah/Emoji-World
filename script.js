const main=document.getElementById("main");
const emoji=document.getElementById("emoji");
const input=document.getElementById("input");
const getemo=document.getElementById("getemoji");

const get=async ()=>{
const apiUrl=await fetch("https://emojihub.yurace.pro/api/all");
const data1=await apiUrl.json();
const data=data1.slice(0,1000);
// console.log(data);
// const d=data.data;
data.forEach(ele => {
emoji.innerHTML+= ` <div class="col-auto me-auto col-sm-3 col-md-2 mb-4">
<div class="card">    
    <div class="card-body">
       <div class="emo"> ${ele.htmlCode[0]}</div>
        <button class="btn btn-primary">View Details</button>
    </div>
</div>
</div>`
let button=document.querySelectorAll("button")
button.forEach((btn,ind)=>{
    btn.addEventListener("click",()=>{
        alert(`Name: ${data[ind].name}\nCategory: ${data[ind].category}\nGroup: ${data[ind].group}`)

    })
})
}
);

}
get();
getemo.addEventListener("click",

async ()=>{
    emoji.innerHTML="";
    const val=input.value;
    // const value=val.json();
    const apiurl=await fetch(`https://emojihub.yurace.pro/api/all/group/${val}`);
    const data1=await apiurl.json();
    // console.log(ele.data1);
    // const d=data.data;
    data1.forEach(el => {

        // console.log(el);
    emoji.innerHTML+= ` <div class=" col-auto me-auto col-sm-3 col-md-2 mb-4">
    <div class="card">
        
        <div class="card-body">
           <div class="emo"> ${el.htmlCode[0]}</div>
            <button class="btn btn-primary">View Details</button>
        </div>
    </div>
    </div>`
    let button1=document.querySelectorAll("button")
    button1.forEach((btn,ind)=>{
        btn.addEventListener("click",()=>{
            alert(`Name: ${data1[ind].name}\nCategory: ${data1[ind].category}\nGroup: ${data1[ind].group}`)
    
        })
    })    
    });
    }

)

const reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
emoji.innerHTML='';   
    input.value='';
get();    
})