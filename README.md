# Determinant-Solver

In a bid to translate a little machine learning maths into javascript, I thought I'd start off by making a program that solves any nxn determinant via recursion. To break it down a little further it:

1. Takes an nxn array.
2. Performs a bunch of error checks to validate input.
3. If no errors are returned it passes the array into a function that performs the calculation.
4. Called using an error first callback 
    
    e.g
    ```
    
    det( [[1,3],[2,4]], (err,res) => {
      if(err){
          console.log(err)
      }
      else {
        console.log(res); //returns -2
      }
     });
     
      
    
    det( [[3,2,1],[2,-1,-3],[-1,2,-4]], (err,res) => {
       if(err){
          console.log(err)
      }
      else {
        console.log(res); //returns 55
      }
    });



Mindblowing stuff
