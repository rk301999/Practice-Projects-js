let date = document.getElementById("date");
let calculateBtn = document.querySelector(".input-box button")
let result = document.querySelector("#result");

date.max = new Date().toISOString().split("T")[0]; //2011-10-05T14:48:00.000Z

function calculateAge(){
    const Birthdate = new Date(date.value);
    const day = Birthdate.getDate();
    const month = Birthdate.getMonth()+1;
    const year = Birthdate.getFullYear();
    console.log(Birthdate , day ,month, year);

    const todaydate = new Date();
    const todayday = todaydate.getDate();
    const todaymonth = todaydate.getMonth()+1;
    const todayyear = todaydate.getFullYear();
    console.log(todayday ,todaymonth,todayyear);

    let yeardiff , monthdiff ,daydiff ;
    yeardiff = todayyear - year;
    if(todaymonth>=month){
         monthdiff = todaymonth - month;
    }else{
        yeardiff--;
        monthdiff = 12 + todaymonth - month;
    }
    if(todaydate >= date){
         daydiff = todayday - day ;
    }else{
        monthdiff--;
        daydiff = getDaysInMonths(year,month) + todayday - day;
        }
    if(monthdiff < 0){
        monthdiff = 11;
        yeardiff--;
    }    
    
    function getDaysInMonths(year, month){
        return new Date(year,month , 0).getDate();
    }
    result.innerHTML = `You are ${yeardiff} years , ${monthdiff} months and ${daydiff} days old`

}
calculateBtn.addEventListener("click",calculateAge)