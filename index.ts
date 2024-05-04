#! /usr/bin/env node
import inquirer from "inquirer"
let mybalance=20000;
let pincode= 7564;
let pinans = await inquirer.prompt(
   [ {
        name:"pin",
        message:"Enter your passcode",
        type:"number"  
}]
)
//console.log(pinans);
if (pinans.pin === pincode)
    
{ 
    console.log("correct pincode")

    let operations = await inquirer.prompt(
[{
        name:"wc",
        message:"What you want to do?",
        type:"list",
        choices:["WithdrawCash", "CheckBalance"]
    }]
    );
    if  (operations.wc=="WithdrawCash")
        { 
     let amountans = await inquirer.prompt
           (
                [{
                    name:"amount",
                    message:"Enter your amount",
                    type:"number"
                 }
                ]
            )
            if(amountans.amount<=mybalance)
            {
            console.log("Operations performed Successfully");
            console.log("Your remaining balance is:", mybalance-amountans.amount);
            }
            else
            console.log("Limit Exceed!!!");
         
        }
        if  (operations.wc=="CheckBalance")
            { console.log("Your Current balance is:",mybalance);

            }

          } 
           else 
    console.log("you enter wrong passcode!!");
