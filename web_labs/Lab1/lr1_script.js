function ChangeColor(){
	var Elem = document.getElementById("mainCard");
	if(Elem.style.backgroundColor)
          Elem.style.backgroundColor = "";
        else
           Elem.style.backgroundColor = "gray";
}