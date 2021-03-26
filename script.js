var images=[    
    "Father.jfif",
    "Mother.jfif",
    "Grandmother.jfif",
    "Grandfather.jfif",
    ];
    var i=0;
    function next(){
    document.getElementById("img1").src=images[i]; 
     i++;
      
      if(i==4)
       {i=0;}
    }
