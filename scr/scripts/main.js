function clock(){
    let hours = window.document.getElementById('hours');
    let date = window.document.getElementById('date');
    let local = window.document.getElementById('local');

        setInterval(()=>{
            let getDate = new Date();
            let dayWeek = getDate.toLocaleDateString('pt-BR',{weekday: 'long'});
            let formatDayWeek = dayWeek.charAt(0).toLocaleUpperCase()+dayWeek.slice(1);
            let day = getDate.getDate().toString().padStart(2,0);
            let month = getDate.toLocaleDateString('pt-BR', {month: 'long'});
            let year = getDate.getFullYear().toString();
        


            let ClockSecond = getDate.getSeconds().toString().padStart(2,0);
            let ClockMinute = getDate.getMinutes().toString().padStart(2,0);
            let ClockHour = getDate.getHours().toString().padStart(2,0);
            hours.innerText = `${ClockHour}:${ClockMinute}:${ClockSecond}`;
            date.innerText = `${formatDayWeek}, ${day} de ${month} de ${year}`;
        }, 1000);


        

}

clock();