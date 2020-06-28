var workHours=["9am", "10am", "11am", "12pm", "1pm", "2pm,", "3pm","4pm", "5pm"]


function display(){
//   <div class="row">
//   <div class="col-sm-1 text-right">9 am</div>
//   <div class="col-sm-10"><textarea id="textarea" class="form-control" placeholder="Enter your task" ></textarea></div>
//   <div class="col-sm-1 text-left"><button class="saveBtn">Save</button></div>
  
  
// </div>


for (let index = 0; index < workHours.length; index++) {
 

  var row=document.createElement("div")
  row.setAttribute("class","row")

   
  var col1=document.createElement("div")
  col1.setAttribute("class","col-sm-1 text-right")
  col1.textContent=workHours[index]
  row.appendChild(col1)

  var col2=document.createElement("div")
  col2.setAttribute("class","col-sm-10")

  var textarea=document.createElement("textarea")
  textarea.setAttribute("class", "form-control")

  col2.appendChild(textarea)
  row.appendChild(col2)


  var col3=document.createElement("div")
  col3.setAttribute("class","col-sm-1 text-left")
  var saveBtn=document.createElement("button")
  saveBtn.setAttribute("class","saveBtn")
  saveBtn.textContent="save"
  saveBtn.onclick=function(){
    alert("test")
  }
  col3.appendChild(saveBtn)
  row.appendChild(col3)
document.querySelector(".time-block").appendChild(row)

}
}


display()