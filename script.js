// let clock=()=>{
//     let date=new Date()
//     console.log(date)
// }
// clock()

//___________________________________________________________

// let clock=()=>{
//     let date=new Date();
//     let month_num=date.getMonth();
//     let day=date.getDay();
//     let hours=date.getHours();
//     let minutes=date.getMinutes();
//     let seconds=date.getSeconds();

//     if(day<=9) day='0'+day;
//     if(hours<=9) hours='0'+hours;
//     if(minutes<=9) minutes='0'+minutes;
//     if(seconds<=9) seconds='0'+seconds;

//     let date_time='min'+'-'+minutes+' '+'second'+'-'+seconds;
//     console.log(date_time);
//     setTimeout(()=>{
//         clock()
//     },1000);
// };
// clock()

//1000-1 second

//_________________________________________________

let clock=()=>{
    let date=new Date();
    let month_num=date.getMonth();
    let day=date.getDay();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let a=date.getDate();

    if(day<=9) day='0'+day;
    if(hours<=9) hours='0'+hours;
    if(minutes<=9) minutes='0'+minutes;
    if(seconds<=9) seconds='0'+seconds;

    let month=[
        'Jan',
        'Feb',
        'March',
        'Aip',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    let date_time=
    'Today'+' '+a+' '+
    month[month_num]+','+
    '  '+hours+
    ':'+minutes+
    ':'+seconds;

    let element=document.getElementById('time')
    element.innerHTML=date_time
    setTimeout('clock()',1000);
};
 clock();