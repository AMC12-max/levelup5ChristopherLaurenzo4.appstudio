
seeCustomer.onshow=function(){
 drpCompany.clear()
  let query = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query)
  
  if (req1.status == 200) { 
    let results = JSON.parse(req1.responseText)
   
    if (results.length == 0)
        txtResponse.value("Failure")
    else {        
   let message = ""
        for (i = 0; i <= results.length - 1; i++){
            message = message + results[i][0] + "\n"
            drpCompany.addItem(results[i][0])
        }
     } 
  } else{
      NSB.MsgBox("Failure")
  }
  hamMenuu.clear()
  hamMenuu.addItem("Sign out") 
  hamMenuu.addItem("See Customer")
  hamMenuu.addItem("Delete Customer")
  hamMenuu.addItem("Edit Customer")
  hamMenuu.addItem("Add Customer")
}



   if (typeof(s) == "object"){  
    return                     
    }else {
      drpCompany.value = s   
      let query2 = "SELECT * FROM customer WHERE name=" + '"' + drpCompany.selection + '"' 
      req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query2)
      
 
drpCompany.onclick=function(){   
      if (req2.status == 200) { 
          let results2 = JSON.parse(req2.responseText)
        
          if (results2.length == 0){
              txtResponse.value("Failure")
          }else {        
              console.log("the parsed JSON is " + results2)
     let message2 = ""
              for (i = 1; i <= 2; i++)
                  message2 = message2 + results2[0][i] + "\n"
              for (i =3; i <=5; i++)
                  message2 = message2 + results2[0][i] + ", "
              txtResponse.value = message2
          } 
      }else{
        NSB.MsgBox("Failure")
      }
   }
}

hamMenuu.onclick=function(){
    if (typeof(s) == "object") { // do nothing
       return
    }
    switch(s) {
      case "Sign Out":
          hamMenuu.hide()
          break
      case "See Customer":
          // do something
          ChangeForm(seeCustomer)
          break
       case "Edit Customer":
          ChangeForm(deleteUpdateCustomer)
          break
       case "Delete Customer":
          ChangeForm(deleteUpdateCustomer)
          break
      case "Add Customer":
          ChangeForm(addCustomer)
          break
     }
}


  





