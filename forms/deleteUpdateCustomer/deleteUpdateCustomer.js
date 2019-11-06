deleteUpdateCustomer.onshow=function(){
  drpCompany2.clear()
  let query2 = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query2)
  
  if (req1.status == 200) { 
    let results = JSON.parse(req1.responseText)
    
    //get array
    if (results.length == 0)
        txtResponse1.value("Failure")
    else {        
        let message = ""
        for (i = 0; i <= results.length - 1; i++){
            message = message + results[i][0] + "\n"
            drpCompany2.addItem(results[i][0])
        }
     } 
  } else{
      NSB.MsgBox("Failure")
  }
  hamMenu.clear()

  hamMenu.addItem("See Customer")
  hamMenu.addItem("Delete Customer")
  hamMenu.addItem("Edit Customer")
  hamMenu.addItem("Add Customer")
}




drpCompany2.onclick=function(){
    if (typeof(s) == "object"){ 
    return                    
    }else {
      drpCompany2.value = s  
      
      //get information from the database
      let query3 = "SELECT * FROM customer WHERE name=" + '"' + drpCompany2.selection + '"' 
      req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query3)
      
      
      if (req2.status == 200) { //transit worked.
          let results2 = JSON.parse(req2.responseText)
        
          //get the array
          if (results2.length == 0){
              txtResponse1.value("Failure")
          }else {        
              console.log("the parsed JSON is " + results2)
              let message2 = ""
              for (i = 1; i <= 2; i++)
                  message2 = message2 + results2[0][i] + "\n"
              for (i =3; i <=5; i++)
                  message2 = message2 + results2[0][i] + ", "
          } 
      }else{
        NSB.MsgBox("Failure")
      }
   }
}

hamMenu.onclick=function(s){
    if (typeof(s) == "object") {
       return
    }
    switch(s) {
      case "See Customer":
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
} }else if (rdoUpdateDelete.value == 1){
   let oldName = drpCompany2.selection
   let newName = inptNewName.value
   let query4 = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
   
   req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query4)
 hamMenu.onclick=function(s){ 
   if (req2.status == 200) { 
        if (req2.responseText == 500) {  
            var result2 = JSON.parse(req2.responseText)
            
            let query5 = "SELECT name FROM customer"
            req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query5)
            
            if (req3.status == 200) { 
               let results3 = JSON.parse(req3.responseText)
               //get array
               if (results3.length == 0)
                     txtResponse1.value("Failure")
                else {        
                   console.log("the parsed JSON is for result3 is " + results3)
                   let message2 = ""
                   for (i = 1; i <= results3.length-1; i++)
                     message2 = message2 + results3[i] + "\n"
                     
                  txtResponse1.value=message2
                 } 
           }else
               NSB.MsgBox("Failure")
            
      } else
          NSB.MsgBox("Failure")

    } 
  }
}

hamMenu.onclick=function(s){
      if (typeof(s) == "object") { // do nothing
       return
    }
    switch(s) {
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

  






  

