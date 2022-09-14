//Exception refers to an abnormal condition which 
//requires psecial operable techniques.
//exception is an anomaly  that breaks the normal flow of code
//Exception handling is process or method for handling the anomalies 
//in code and executing them.
//NOTE: In exception handling,throw statement is used to raise an exception.
//exception is thrown using throw
//thrown exception is handled by wrapping code into the try..catch block.
//if error is present catch block will execute
//else only try blocks will be executed
/*try{} statement: Here, the code which needs possible error 
testing is kept within the try block. In case any error occur, 
it passes to the catch{} block for taking suitable 
actions and handle the error. Otherwise, it executes the code written within.*/
//_____________________________________________________________________________
/*catch{} statement: This block handles the error of the code by
executing the set of statements written within the block. 
This block contains either the user-defined exception handler or
the built-in handler. This block executes only when any error-prone 
code needs to be handled in the try block.
 Otherwise, the catch block is skipped.*/

 try{
    var arr=[1,2,3,4];
    console.log(arr);
    console.log(b);

}
catch(error){
    console.log(error.message)
}
finally{
    console.log(arr);
}
//in the code shown above b is not defined and will throw error if we execute the
//program normally
//but using try catch we are printing the error message on the screen.
//and finally will execute the code in whatever way the user decides
//_____________________________________________________________________________
try{  
    throw exception; // user can define their own exception  
    }  
    catch(error){  
    console.log(error.message) }  // code for handling exception. 

    try {  
        throw Error(SyntaxError); //user-defined throw statement.  
     }  
     catch (e) {  
       document.write(e.message); // This will generate an error message  
     }  
     //custom error can be generated by passing values inside the throw error scope.
     