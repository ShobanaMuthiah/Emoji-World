//get elements by its id
const main = document.getElementById("main");
const emoji = document.getElementById("emoji");
const input = document.getElementById("input");
const getemo = document.getElementById("getemoji");
const err = document.getElementById("err");

const get = async () => {
  //the loader might be display till the data will fetch data and display it at the same time the hidden property might be disabled.
  document.getElementById("loader").classList.remove("hidden");
  //fetching data and performs asynchronous function operation
  const apiUrl = await fetch("https://emojihub.yurace.pro/api/all");
  const data1 = await apiUrl.json();
  const data = data1.slice(0, 1000); //getting data from 0th index to 1000th index elements
  // console.log(data);
  // const d=data.data;
  data.forEach((ele) => {
    //the loader will be hidden when the data display in the screen
    document.getElementById("loader").classList.add("hidden");
    emoji.innerHTML += ` <div class="col-auto me-auto col-sm-3 col-md-2 mb-4">
<div class="card">    
    <div class="card-body">
       <div class="emo"> ${ele.htmlCode[0]}</div>
        <button class="btn btn-primary but">View Details</button>
    </div>
</div>
</div>`;
    let button = document.querySelectorAll("button"); //getting all the button elements
    button.forEach((btn, ind) => {
      btn.addEventListener("click", () => {
        alert(
          `Name: ${data[ind].name}\nCategory: ${data[ind].category}\nGroup: ${data[ind].group}`
        );
      });
    });
  });
};
get(); //calling the function
getemo.addEventListener("click", async () => {
  emoji.innerHTML = "";
  err.innerHTML="";
  const val = input.value;

  //fetching data by its group value
  const apiurl = await fetch(
    `https://emojihub.yurace.pro/api/all/group/${val}`
  );
  const data1 = await apiurl.json();
  try {
    if (input.value === null || input.value === "") {
      throw new Error("Insert a value");
      //When the input field is not contain any input values it throws error message
    }
    data1.forEach((el) => {
      err.innerHTML=""
      emoji.innerHTML += ` <div class=" col-auto me-auto col-sm-3 col-md-2 mb-4">
    <div class="card">
        
        <div class="card-body">
           <div class="emo"> ${el.htmlCode[0]}</div>
            <button class="btn btn-primary but">View Details</button>
        </div>
    </div>
    </div>`;
      let button1 = document.querySelectorAll("button");
      button1.forEach((btn, ind) => {
        btn.addEventListener("click", () => {
          alert(
            `Name: ${data1[ind].name}\nCategory: ${data1[ind].category}\nGroup: ${data1[ind].group}`
          );
        });
      });
    });
  } catch (error) {
    if (error instanceof TypeError) {
      //if any error occurs the following error message will be displayed in the screen
      emoji.innerHTML = "";
      err.innerHTML = "Invalid Input Name";
    } else {
      emoji.innerHTML = "";
      err.innerHTML = `${error.message}`;
    }
  }
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  get(); //calling the function to reset
  input.value = ""; //empty input
});
