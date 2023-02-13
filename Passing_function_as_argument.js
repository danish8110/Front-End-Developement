/*-------When we want to pass a function as an argument-------*/

        var factorial = function fact(n){
          var ans=1;
          for(var i=1;i<=n;i++){
            ans*=i;
          }
          return ans;
        }
        //console.log(factorial(5));
        
   /*    <-----Passing Factorial Function Expression as an argument------>    */     
        
        function ncr(n,r,factorial){
          return factorial(n)/(factorial(r)*factorial(n-r));
        }
        console.log(ncr(5,2,factorial));
