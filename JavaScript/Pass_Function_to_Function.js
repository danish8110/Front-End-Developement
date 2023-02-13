
/*<-------Passing Function to the Function-------->*/

            var add = function (a,b){
              return a+b;
            }
            
            var subtract = function (a,b){         <------------|
              a-b;                                              |
            }                                                   |
                                                                |
            var op = function (func){                -----------|  
              var a = 5;      
              var b = 8;
              return(a,b);
            }
            
            console.log(op(subtract));
