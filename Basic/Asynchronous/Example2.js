function showTime() {
    let dateTime=new Date();
    let time=dateTime.toLocaleTimeString();

    console.log(time);

    let check=setTimeout(showTime,3000)
    clearTimeout(check)
}

showTime();