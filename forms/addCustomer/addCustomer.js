
addCustomer.onshow=function(){
    lstCompany.clear()
    let query = "SELECT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll5497&query=" + query)
    
  if (req1.status == 200) { 
    results = JSON.parse(req1.responseText)
    
    //get the array
    if (results.length == 0)
        MSB.MsgBox("Failure")
    else {        
        //console.log("the parsed JSON is " + results)
        let message = ""
        for (i = 0; i <= results.length - 1; i++){
            message = results[i][0] 
            lstCompany.addItem(message)
        }
     } 
  } else{
      NSB.MsgBox("Failure")
  }
  hamMenu1.clear()
  hamMenu1.addItem("Sign out") 
  hamMenu1.addItem("See Customer")
  hamMenu1.addItem("Delete Customer")
  hamMenu1.addItem("Edit Customer")
  hamMenu1.addItem("Add Customer")
}

hamMenu1.onclick=function(){
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
}

btnAdd.onclick=function(){
  let newName2 = inptName.value
  let newCity2 = inptCity.value
  let newStreet2 = inptStreet.value
  let newState2 = inptState.value
  let newZipCode2 = inptZC.value
  let queryInsert = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('"+newName2+"', '"+newStreet2+"', '"+newCity2+"','"+ newState2+"'," +newZipCode2+")"

    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + queryInsert)

    if (req2.status == 200) {
        if (req2.responseText == 500) {  
            lstCompany.clear()
            let message = ""
            let queryNew="SELECT name FROM customer"
            req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + queryNew)
                if (req3.status==200){
                  results=JSON.parse(req3.responseText)
                  
                  let message = ""
                  for (i=0; i <= results.length-1; i++){
                      message = results[i][0] 
                      lstCompany.addItem(message)
                  }
                    
                 let query4 = "SELECT * FROM customer WHERE name=" + '"' + newNameA + '"'
                     
                      req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query4)
       if (req4.status == 200) { //transit worked.
                               results = JSON.parse(req4.responseText)
                               
                               let message2 = ""
                               for (i = 1; i <= 5; i++)
                                   message2 = message2 + results[0][i] + ", "
                               modData.value = message2
                               modData.footer= newNameA
                      }      
                      
                      modData.toggle()
               }
            
        }else{
            NSB.MsgBox("Failure")
        }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
}

  



  


  

