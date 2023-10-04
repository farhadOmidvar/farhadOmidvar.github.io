var  nav = document.getElementById('nav');
	window.onscroll = function () {
		if (window.pageYOffset > 200){
			nav.style.background = "black";
            nav.style.marginTop ="0";
		}
		else{
			nav.style.background = "transparent";
            nav.style.marginTop = "30px";
		}
	}


var i = 1;
var j = 1;
    function typer(){
        var name = "FARHAD OMIDVAR";
        if( i <= name.length ){ 
            var txt = name.substring(0,i);
            document.getElementById("name").innerHTML = txt;
            setTimeout("typer()",200);
            i++;
        }
        else{ 
            i = 1;
            document.getElementById("name").innerHTML = name;
        }
      
    }

    function typer1(){
        var title = "Business Intelligence Analyst";
        if( j <= title.length ){ 
            var txt2 = title.substring(0,j);
            document.getElementById("title").innerHTML = txt2;
            setTimeout("typer1()",200);
            j++;
        }
        else{ 
            j = 1;
            document.getElementById("title").innerHTML = title;
        }
    }

    
    
window.onload = typer();
window.onload = typer1();

    
