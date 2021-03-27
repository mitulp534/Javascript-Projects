
        console.log("Hello World");
        //alert('fuck you china');


        //just a basic variables
        var f='thicc';
        console.log(f);

        var randomnumber=69;
        console.log(randomnumber);

        

        //user input
       // var question=prompt('do you like hentai?');
        
        // to get any tag or element from html and make changes
      //  document.getElementById('testing').innerHTML=question;

        // numbers in javascript
        var num1=10;
        var num2=6.9;

        //increment num1 by 1
        num1++;
        console.log(num1);

        //decrement num1 by 1
        num1--;
        console.log(num1);

        //creatintg a function
        function fun(){
            console.log('corona is chinese virus');
        }

        //calling function
        fun();
        
        function hobbies(){
            var hname=prompt('WHat is your hobby?');
            var result=" I Love " + hname;
            console.log(result);
        }
        //hobbies();

        //arguments in function
        function sumFun(num1,num2){
            var result= num1+num2;
            console.log(result);
        }
        //sumFun(10,30);

        //while loops

        var num=0;
        while(num<10){
            num=num+1;
            console.log(num);
        }
        


       //for loop
       for(let num=11; num<20;num++){
           console.log(num);
       } 
       
       // Data types
       // var is used to declare a global variable
       // let is used to declare a variable within a block

       let yourAge=22; //number
       let yourName="Mike"; //String
       let name={first: 'chizuru', last:'Mizuhara'}; //object
       let test=false; //booleaan
       let groceries = ['apple','banana','pineappe']; //array
       let random; //undefined
       let nothing=null; //value null

       // Strings in javascript

       let fruit='apple\nbananna';
       console.log(fruit);
       console.log(fruit.length);
       console.log(fruit.indexOf('a'));
       console.log(fruit.slice(2,6));
       console.log(fruit.replace('ban','123'));
       console.log(fruit.toLowerCase(fruit));
       console.log(fruit.toUpperCase(fruit));
       console.log(fruit[2]);

       let fruit1='apple,banana,watermealon,blackberry';
       console.log(fruit1.split(',')); //split by comma
       console.log(fruit1.split('')); // split by character

       //Array

       let fruits2=['banana','apple','orange','pineapple'];
       console.log(fruits2[2]);
       fruits2[0]='pear';
       console.log(fruits2);
       

       for(let i=0;i<fruits2.length;i++){
           console.log(fruits2[i]);
       }

       //array common methods
       console.log('to string', fruits2.toString());
       console.log(fruits2.join('*'));
       console.log(fruits2.pop(),fruits2);
       console.log(fruits2.push('blackberries'),fruits2);
       fruits2[4]='newFruit'; // fruits2[fruits2.length]='newFruit'; it's the same
       console.log(fruits2);
       fruits2.shift(); // remove first element from an array
       console.log(fruits2);

       fruits2.unshift('kiwi'); // add first element to an array
       console.log(fruits2);


       let vegetables =['asparagus','tomato','broccoli'];
       let allGroceries=fruits2.concat(vegetables);
       console.log(allGroceries);
       console.log(allGroceries.reverse());

       let someNumbers=[5,10,52,64,97,69,74];
       console.log(someNumbers.sort());
       console.log(someNumbers.sort(function(a,b){return a-b}));

       let emptyArray=new Array();
       for(let i=0; i<=10;i++){
           emptyArray.push(i);

       }
       console.log(emptyArray);

       //objects

       let student={first:'mike',
       last:'official',
       height:170,
       studentInfo:function(){
           return this.first + " "+ this.last;
       }};
       console.log(student.studentInfo());










  
