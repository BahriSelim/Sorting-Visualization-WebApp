let spikes=[];
let showbutt=document.getElementById("shownumber")


function randomint(min,max){
    return(Math.floor(Math.random() * (max - min + 1)) + min);
}

function show(n,x,y){
    let container=document.getElementById("container")
    container.innerHTML="";
    
    for(let i=0;i<n;i++){
        let heights=spikes[i];

        let bar=document.createElement("div")
        bar.classList.add("bar");
        container.appendChild(bar)
        bar.style.height=`${heights}px`
        
        if(i==x){
            bar.style.backgroundColor="blue"

        }
        else if(i==y){
            bar.style.backgroundColor="red"
        }

        if(showbutt.checked){
            let textnumb=document.createElement("span")
            bar.appendChild(textnumb)
            textnumb.innerHTML=heights
            textnumb.style.textAlign="centre"
        }
    }



}

function bubble(n){
    let delay=0;
    let container=document.getElementById("container")
    for(let i=0;i<n;i++){
        for(let j=0;j<n-1;j++){

            setTimeout(()=>{
                show(n,j,j+1);
                if (spikes[j]<spikes[j+1]){
                    
                    x=spikes[j]
                    spikes[j]=spikes[j+1]
                    spikes[j+1]=x
                    
                    setTimeout(() => show(n), 250)
                }
            },delay)
            delay+=500
        }
    }
    setTimeout(()=>{
        show(n,-1,-1)
    },delay)
}
function selection(n) {
    let delay = 0; // Initialize a delay for visual updates
    let container=document.getElementById("container")
    for (let i = 0; i < spikes.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < spikes.length; j++) {
            setTimeout(() => {
                show(n, j, lowest); 
                if (spikes[lowest] > spikes[j]) {
                    lowest = j;
                }
            }, delay);
            delay += 500; 
        }
        setTimeout(() => {
            if (i !== lowest) {
                
                [spikes[i], spikes[lowest]] = [spikes[lowest], spikes[i]];
            }
            show(n, i, lowest);
        }, delay);
        delay += 500; 
    }
    setTimeout(()=>{
        show(n,-1,-1)
    },delay)
}

function randomise(){
    let n=parseInt(document.getElementById("count").value);
    for(let i=n-1;i>0;i--){ 
        j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        x=spikes[i];
        spikes[i]=spikes[j]
        spikes[j]=x
    }
    container.innerHTML = "";
    
    for(let i=0;i<n;i++){
        let heights=spikes[i];
        let bar=document.createElement("div");
        bar.classList.add("bar");
        bar.style.height="0px"
        container.appendChild(bar);
        if(showbutt.checked){
            let textnumb=document.createElement("span")
            bar.appendChild(textnumb)
            textnumb.innerHTML=heights
            textnumb.style.textAlign="centre"
        }
        
    }
    for(let i=0;i<n;i++){
        setTimeout(()=>{
            let bar=container.children[i];
            bar.style.height=`${spikes[i]}px`;
            let showbutt=document.getElementById("shownumber");

        },i*50)
    }
    
}

function main(){

    spikes=[];
    let n=parseInt(document.getElementById("count").value);
    let min=parseInt(document.getElementById("min").value)
    let max=parseInt(document.getElementById("max").value);
    
    let container=document.getElementById("container")
    container.innerHTML = "";
    
    for(let i=0;i<n;i++){
        let number=randomint(min,max);
        spikes.push(number);
    }
    for(let i=0;i<n;i++){

        let heights=spikes[i];
        let bar=document.createElement("div");
        bar.classList.add("bar");
        bar.style.height="0px";
        container.appendChild(bar);

        setTimeout(()=>{
            let b=container.children[i];
            b.style.height=`${spikes[i]}px`;

        },50)

        if(showbutt.checked){
            let textnumb=document.createElement("span")
            bar.appendChild(textnumb)
            textnumb.innerHTML=heights
            textnumb.style.textAlign="centre"
        }
    }


}

function sort(){
    let algo=document.getElementById("s");

    let n=parseInt(document.getElementById("count").value);
    if(algo.value=="bubble"){
        bubble(n)

  
    }
    else if(algo.value=="selection"){
        selection(n)
    }
}

