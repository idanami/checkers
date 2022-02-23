var turncount =1;
var cellId;
var checkCanMoveAgain=false;
var can_eat;
var targetCell; 
var playerId;
var option1;
var option2;
var option3;
var option4;
var whitepieces = 12; 
var blackpieces = 12;
var moveAgain=false;
function allowDrop(ev) {
  ev.preventDefault();
}
function clickedDrag(ev){
    resetColor();
    var player__id=ev.target.id;
    var playerClass=document.getElementById(player__id);
    var current=playerClass.parentElement.getAttribute("id");
    cellId=current;
    if(!checkCanMoveAgain)
        playerId=player__id;
    if(blackpieces===0)
        alert("the winner is white");
    else if(whitepieces===0)
        alert("the winner is black");
    else if(playerId===player__id){
        if(turncount%2===1&&(playerId>2000&&playerId<2013)){
            if(playerClass.className=="blackcheckerking")
                kingOption(cellId);
            else soldierOption(cellId);}
        else if(turncount%2===0&&(playerId>1000&&playerId<1013)){
            if(playerClass.className=="whitecheckerking")
                kingOption(cellId);
            else soldierOption(cellId);}}
}
//////////////////////////clicked///////////////////////////////////
function clicked(cell_id){
    resetColor();
    var player__id=document.getElementById(cell_id).firstElementChild.getAttribute("id");
    cellId=cell_id; 
    if(!checkCanMoveAgain)
        playerId=player__id;
    var playerClass=document.getElementById(player__id);
    if(blackpieces===0)
        alert("the winner is white");
    else if(whitepieces===0)
        alert("the winner is black");
    else if(playerId===player__id){
        if(turncount%2===1&&(playerId>2000&&playerId<2013)){
            if(playerClass.className=="blackcheckerking")
                kingOption(cellId);
            else soldierOption(cellId);}
        else if(turncount%2===0&&(playerId>1000&&playerId<1013)){
            if(playerClass.className=="whitecheckerking")
                kingOption(cellId);
            else soldierOption(cellId);}}
}
//////////////////////////kingOption///////////////////////////////////
function kingOption(cell_id){
    var cellnum=Number(cell_id);
    var num=cell_id%10;
    var ccurrent=document.getElementById(cellnum);
    var option_1=document.getElementById(cellnum-11);
    var option_2=document.getElementById(cellnum-22);
    var option_3=document.getElementById(cellnum-9);
    var option_4=document.getElementById(cellnum-18);
    var option_5=document.getElementById(cellnum+11);
    var option_6=document.getElementById(cellnum+22);
    var option_7=document.getElementById(cellnum+9);
    var option_8=document.getElementById(cellnum+18);    
        if(turncount%2===1){
            if(option_1!=null){
                if(option_1.children.length===1){
                    if((option_1.firstElementChild.className==="whitechecker"||option_1.firstElementChild.className==="whitecheckerking")&&option_2!=null){
                        if(option_2.children.length===0){
                            option_2.style.backgroundColor="gray";
                            can_eat=true;}}}}
            
            if(option_3!=null){
                if(option_3.children.length===1){
                    if((option_3.firstElementChild.className==="whitechecker"||option_3.firstElementChild.className==="whitecheckerking")&&option_4!=null){
                        if(option_4.children.length===0){
                            option_4.style.backgroundColor="gray";
                            can_eat=true;}}}}
            
                if(option_5!=null){
                if(option_5.children.length===1){
                    if((option_5.firstElementChild.className==="whitechecker"||option_5.firstElementChild.className==="whitecheckerking")&&option_6!=null){
                        if(option_6.children.length===0){
                            option_6.style.backgroundColor="gray";
                            can_eat=true;}}}}   
                
                if(option_7!=null){
                if(option_7.children.length===1){
                    if((option_7.firstElementChild.className==="whitechecker"||option_7.firstElementChild.className==="whitecheckerking")&&option_8!=null){
                        if(option_8.children.length===0){
                            option_8.style.backgroundColor="gray";
                            can_eat=true;}}}}
            if(!can_eat){
                if(option_1!=null){
                    if(option_1.children.length===0)
                    option_1.style.backgroundColor="gray";} 
                if(option_3!=null){
                    if(option_3.children.length===0)
                    option_3.style.backgroundColor="gray";}  
                if(option_5!=null){
                    if(option_5.children.length===0)
                    option_5.style.backgroundColor="gray";} 
                if(option_7!=null){
                    if(option_7.children.length===0)
                    option_7.style.backgroundColor="gray";}
  }
}else{
                if(option_1!=null){
                if(option_1.children.length===1){
                    if((option_1.firstElementChild.className==="blackchecker"||option_1.firstElementChild.className==="blackcheckerking")&&option_2!=null){
                        if(option_2.children.length===0){
                            option_2.style.backgroundColor="gray";
                            can_eat=true;}}}}
            
            if(option_3!=null){
                if(option_3.children.length===1){
                    if((option_3.firstElementChild.className==="blackchecker"||option_3.firstElementChild.className==="blackcheckerking")&&option_4!=null){
                        if(option_4.children.length===0){
                            option_4.style.backgroundColor="gray";
                            can_eat=true;}}}}
            
                if(option_5!=null){
                if(option_5.children.length===1){
                    if((option_5.firstElementChild.className==="blackchecker"||option_5.firstElementChild.className==="blackcheckerking")&&option_6!=null){
                        if(option_6.children.length===0){
                            option_6.style.backgroundColor="gray";
                            can_eat=true;}}}}
                    
                if(option_7!=null){
                if(option_7.children.length===1){
                    if((option_7.firstElementChild.className==="blackchecker"||option_7.firstElementChild.className==="blackcheckerking")&&option_8!=null){
                        if(option_8.children.length===0){
                            option_8.style.backgroundColor="gray";
                            can_eat=true;}}}}
            
            if(!can_eat){
                if(option_1!=null){
                    if(option_1.children.length===0)
                    option_1.style.backgroundColor="gray";} 
                if(option_3!=null){
                    if(option_3.children.length===0)
                    option_3.style.backgroundColor="gray";}  
                if(option_5!=null){
                    if(option_5.children.length===0)
                    option_5.style.backgroundColor="gray";} 
                if(option_7!=null){
                    if(option_7.children.length===0)
                    option_7.style.backgroundColor="gray";}
            }
}
}
//////////////////////////resetColor///////////////////////////////
function resetColor()  {              
                for(var j=10;j<90;j+=10)
                {if(j%20===10)
                  {for(var i=1;i<9;i+=2)
                      {
                        var number = j+i;
                        var cell = document.getElementById(number);
                        cell.style.backgroundColor="aliceblue";  }}
                  else
                  {for(var i=2;i<9;i+=2)
                      {
                        var number = j+i;
                        var cell = document.getElementById(number);
                        cell.style.backgroundColor="aliceblue";
                      }}}}
//////////////////////////soldierOption////////////////////////////
function soldierOption(cell_id){
    var cellnum=Number(cell_id);
    var num=cellnum%10;
    option1=document.getElementById(cellnum-11);
    option2=document.getElementById(cellnum-9);
    option3=document.getElementById(cellnum+11);
    option4=document.getElementById(cellnum+9);
    if(num===1){
        if(turncount%2===1){
            var eat=document.getElementById(cell_id-18);
            if(option2!=null){
                if(option2.children.length===1){
                    if((option2.firstElementChild.className=="whitechecker"||option2.firstElementChild.className=="whitecheckerking")&&eat!=null){
                        if(eat.children.length===0){
                            eat.style.backgroundColor="gray";
                            can_eat=true}}}}
            if(!can_eat&&option2.children.length===0)
                option2.style.backgroundColor="gray";
        }else{
            var eat=document.getElementById(cellnum+22);
            if(option3!=null){
                if(option3.children.length===1){
                    if((option3.firstElementChild.className=="blackchecker"||option3.firstElementChild.className=="blackcheckerking")&&eat!=null){
                        if(eat.children.length===0){
                            eat.style.backgroundColor="gray";
                            can_eat=true;
                        }}}}
            if(!can_eat&&option3.children.length===0)
                option3.style.backgroundColor="gray";
        }}
    if(num===8){
        if(turncount%2===1){
            var eat=document.getElementById(cell_id-22);
            if(option1!=null){
                if(option1.children.length===1){
                    if((option1.firstElementChild.className=="whitechecker"||option1.firstElementChild.className=="whitecheckerking")&&eat!=null){
                        if(eat.children.length===0){
                            eat.style.backgroundColor="gray";
                            can_eat=true}}}}
            if(!can_eat&&option1.children.length===0)
                option1.style.backgroundColor="gray";
        }else{
            var eat=document.getElementById(cellnum+18);
            if(option4!=null){
                if(option4.children.length===1){
                    if((option4.firstElementChild.className=="blackchecker"||option4.firstElementChild.className=="blackcheckerking")&&eat!=null){
                        if(eat.children.length===0){
                            eat.style.backgroundColor="gray";
                            can_eat=true;}}}}
            if(!can_eat&&option4.children.length===0)
                option4.style.backgroundColor="gray";}
    }
    if(num>1&&num<8){
        if(turncount%2===1){
            var eat1=document.getElementById(cell_id-18);
            var eat2=document.getElementById(cell_id-22);
            if(option2!=null){
                if(option2.children.length===1){
                    if((option2.firstElementChild.className=="whitechecker"||option2.firstElementChild.className=="whitecheckerking")&&eat1!=null){
                        if(eat1.children.length===0){
                            eat1.style.backgroundColor="gray";
                            can_eat=true}}}}
            if(option1!=null){
                if(option1.children.length===1){
                    if((option1.firstElementChild.className=="whitechecker"||option1.firstElementChild.className=="whitecheckerking")&&eat2!=null){
                        if(eat2.children.length===0){
                            eat2.style.backgroundColor="gray";
                            can_eat=true}}}}
            if(!can_eat){
                if(option2.children.length===0)
                    option2.style.backgroundColor="gray";  
                if(option1.children.length===0)
                    option1.style.backgroundColor="gray";
            }
        }else{
            var eat1=document.getElementById(cellnum+18);
            var eat2=document.getElementById(cellnum+22);
            if(option4!=null){
                if(option4.children.length===1){
                    if((option4.firstElementChild.className=="blackchecker"||option4.firstElementChild.className=="blackcheckerking")&&eat1!=null){
                        if(eat1.children.length===0){
                            eat1.style.backgroundColor="gray";
                            can_eat=true;
                        }}}}
            if(option3!=null){
                if(option3.children.length===1){
                    if((option3.firstElementChild.className=="blackchecker"||option3.firstElementChild.className=="blackcheckerking")&&eat2!=null){
                        if(eat2.children.length===0){
                            eat2.style.backgroundColor="gray";
                            can_eat=true;}}}}
            
            if(!can_eat){
                if(option4.children.length===0)
                    option4.style.backgroundColor="gray";  
                if(option3.children.length===0)
                    option3.style.backgroundColor="gray";
            }
        }
    }
}
//////////////////////////setMove//////////////////////////////////
function setMove(player){
    var playerId=document.getElementById(player);
    var num=Number(cellId);
    if(can_eat){
        can_eat=false;
        var newTarget=targetCell;
        switch(newTarget){
            case cellId-22:
                setEatMove(cellId-11,player);
                break;
            case cellId-18:
                setEatMove(cellId-9,player);
                break;
            case num+22:
                setEatMove(num+11,player);
                break;
            case num+18:
                setEatMove(num+9,player);
                break;
        }
        if(playerId.className==="blackchecker"||playerId.className==="whitechecker")
            soldierOption(newTarget);
        else    kingOption(newTarget);
        if(can_eat)
            checkCanMoveAgain=true;
        else checkCanMoveAgain=false;
    }else{
        var wantedCell = document.getElementById(targetCell);
        var currentCell = document.getElementById(cellId);
        wantedCell.removeAttribute("onclick");
        wantedCell.removeAttribute("ondrop");
        wantedCell.removeAttribute("ondragover");
        playerId.removeAttribute("onclick");
        wantedCell.appendChild(currentCell.firstChild);
        currentCell.setAttribute("onclick","moveTo("+cellId+")");
        currentCell.setAttribute("ondrop","moveTo("+cellId+")");
        currentCell.setAttribute("ondragover","allowDrop(event)");
        playerId.setAttribute("onclick","clicked("+targetCell+")");
        if(targetCell>80&&wantedCell.firstElementChild.className==="whitechecker")
            playerId.setAttribute("class","whitecheckerking");
        if(targetCell<18&&wantedCell.firstElementChild.className==="blackchecker")
            playerId.setAttribute("class","blackcheckerking");
    }
    if(!checkCanMoveAgain)
        turncount++;
    }
//////////////////////////setEatMove///////////////////////////////
function setEatMove(div_eat,player){
    var wantedCell = document.getElementById(targetCell);
    var currentCell = document.getElementById(cellId);
    var playerId = document.getElementById(player);
    var eat=document.getElementById(div_eat);
    wantedCell.removeAttribute("onclick");
    playerId.removeAttribute("onclick");
    wantedCell.removeAttribute("ondrop");
    wantedCell.removeAttribute("ondragover");
    wantedCell.appendChild(currentCell.firstChild);
    currentCell.setAttribute("onclick","moveTo("+cellId+")");
    currentCell.setAttribute("ondrop","moveTo("+cellId+")");
    currentCell.setAttribute("ondragover","allowDrop(event)");
    eat.setAttribute("onclick","moveTo("+div_eat+")");
    eat.setAttribute("ondrop","moveTo("+div_eat+")");
    eat.setAttribute("ondragover","allowDrop(event)");
    playerId.setAttribute("onclick","clicked("+targetCell+")");
    if((eat.firstElementChild.className=="whitechecker")||(eat.firstElementChild.className=="whitecheckerking"))
        whitepieces--;
    else 
        blackpieces--;
    var currentChild=eat.firstChild;    
    eat.removeChild(currentChild);
    if(targetCell>80&&wantedCell.firstElementChild.className==="whitechecker")
        playerId.setAttribute("class","whitecheckerking");
    if(targetCell<18&&wantedCell.firstElementChild.className==="blackchecker")
        playerId.setAttribute("class","blackcheckerking");  
}
//////////////////////////moveTo///////////////////////////////////
function moveTo(target_Cell){  
    targetCell=target_Cell;
    var cell=document.getElementById(cellId);
    var wantedCell=document.getElementById(target_Cell);
    if(wantedCell.style.backgroundColor=="gray"){
        setMove(playerId);
    }
    resetColor();
    
    var black_p=document.getElementById("bp");
    var whith_p=document.getElementById("wp");
    var player_turn=document.getElementById("pt");
    black_p.innerHTML=blackpieces;
    whith_p.innerHTML=whitepieces;
    if(turncount%2===1)
        player_turn.innerHTML="black";
    else
        player_turn.innerHTML="white";
    if(turncount%2===1){
        for(var i=2001;i<2013;i++){
            var player=document.getElementById(i);
            if(player!=null){
               var idcell= player.parentElement.getAttribute("id");
                soldierOption(idcell);
                kingOption(idcell);}}
        
        resetColor();
    }else{
        for(var i=1001;i<1013;i++){
            var player=document.getElementById(i);
            if(player!=null){
               var idcell= player.parentElement.getAttribute("id");
                soldierOption(idcell);
                kingOption(idcell);}}
        
        resetColor();
    }
    
    if(turncount%2==0){
        var validw=whitepieces;
        for(var i= 1001;i<1013;i++){
            var cellw=document.getElementById(i);
            if(cellw!=null){ 
                var num1=Number(cellw.parentElement.getAttribute("id"));
                var num =num1%10;
                var cell_1=document.getElementById(num1+11);
                var cell_2=document.getElementById(num1+9);
                var cell_3=document.getElementById(num1+22);
                var cell_4=document.getElementById(num1+18);
                if(num===1){
                    if((cell_1.children.length==1)){
                        if(cell_3!=null){
                            if(cell_3.children.length==1)
                                validw--;}else validw--;}}
                
                if(num===8){
                    if(cell_2.children.length==1){
                        if(cell_4.children.length==1)
                            validw--;}}
                
                if(num>1&&num<8){
                    if((cell_1.children.length==1)&&(cell_2.children.length==1)){
                        if(cell_3!=null&&cell_4!=null){
                            if((cell_3.children.length==1)&&(cell_4.children.length==1)){
                                validw--;}}
                        if(cell_3==null&&cell_4==null)
                            validw--;
                        if(cell_4!=null&&(cell_3===null)){
                            if(cell_4.children.length==1)
                                validw--;}  
                        
                        if(cell_3!=null&&(cell_4===null)){
                            if(cell_3.children.length==1)
                                validw--;}}}}}
        if(validw===0)
            alert("black win");
        
    }else if(turncount%2==1){
        var validb=blackpieces;
        for(var i= 2001;i<=2012;i++){
            var cellb=document.getElementById(i);
            if(cellb!=null){    
                var num2=Number(cellb.parentElement.getAttribute("id"));
                var num=num2%10;
                var cell1=document.getElementById(num2-9);
                var cell2=document.getElementById(num2-11);
                var cell3=document.getElementById(num2-18);
                var cell4=document.getElementById(num2-22);
                if(num===1){
                    if(cell1.children.length===1){
                        if(cell3.children.length===1)
                            validb--;}}
                
                if(num===8){
                    if(cell2.children.length===1){
                        if(cell4!=null){
                            if(cell4.children.length===1)
                                validb--;}else validb--;}}
                
                if(num>1&&num<8){
                    if((cell1.children.length==1)&&(cell2.children.length==1)){
                        if(cell3!=null&&cell4!=null){
                            if((cell3.children.length==1)&&(cell4.children.length==1)){  
                                validb--;}}
                        if(cell_3==null&&cell_4==null)
                            validb--;
                        if(cell4!=null&&(cell3===null)){
                            if(cell4.children.length==1){
                                validb--;}} 
                        
                        if(cell3!=null&&(cell4===null)){
                            if(cell3.children.length==1){
                                validb--;}}}}}}
        if(validb===0)
            alert("white win");
    }
}

