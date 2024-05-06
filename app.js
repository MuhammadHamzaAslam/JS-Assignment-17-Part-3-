function January() {
    for (let i = 2024; i <= 2050; i++) {
        var date = new Date(`1 Jan ${i}`)         
        let date2 = date.toString()
        // console.log(date);
        if(date2.slice(0,0+3) == "Sun"){
            alert("Sunday on 1 Jan " +i);
        }
    }
}