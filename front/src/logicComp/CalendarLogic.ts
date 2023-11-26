interface MonthsIT{
    Days:number,
    Name:string
}

export const Months:MonthsIT[]=[
    {Days:31,Name:"January"},
    {Days:28,Name:"February"},
    {Days:31,Name:"March"},
    {Days:30,Name:"April"},
    {Days:31,Name:"May"},
    {Days:30,Name:"June"},
    {Days:31,Name:"July"},
    {Days:31,Name:"August"},
    {Days:30,Name:"September"},
    {Days:31,Name:"October"},
    {Days:30,Name:"November"},
    {Days:31,Name:"December"},
]

export function NameToInt(monthName:string):number{
    let indReturn = 99
    Months.map((month,index)=>{
        if(monthName==month.Name) indReturn = index;
    })
    return  indReturn
}