
var number = 13
var y= 1
var x=[];
x[0]=0
x[1]=1
while(x[y]<number){
    y=y+1
    x[y]= x[y-2]+x[y-1] 
}
for (let i=1; i<=y; i++)  {
   if(x[i]==number){
    console.log(`O numero ${number} está na sequência de Fibonacci`)
   }
}
