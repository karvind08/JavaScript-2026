var list = [1,2,3,4,5];
for(let i=0,j=list.length-1;i<j;i++,j--){
    let t =list[i];
    list[i] = list[j];
    list[j] = t;
}
 console.log(list);