let count=0;

function increaseCount() {
    count+=1;
    console.log(count);
    let check = setTimeout(increaseCount, 3000);
    if(count==5)
        clearTimeout(check)
}
increaseCount();