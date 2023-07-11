import React from 'react'
import Cell from './Cell'
import { add, differenceInDays, endOfMonth, format, startOfMonth, sub } from 'date-fns'

const Calender = ({value, onChange}) => {

    const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",]


    const startDate = startOfMonth(value)
    const endDate = endOfMonth(value)
    const numDays = differenceInDays(endDate, startDate) +1 
    const prefixDays = startDate.getDay()
    const suffixDays = 6-endDate.getDay()
    console.log(prefixDays)


    const prevMonth = ()=> onChange && onChange(sub(value , {months : 1}))
    const nextMonth = ()=> onChange && onChange(add(value , {months : 1}))
    const prevYear = ()=> onChange && onChange(sub(value , {years : 1}))
    const nextYear = ()=> onChange && onChange(add(value , {years : 1}))

  return (
    <div className='w-[400px] border'>
        <div className='grid grid-cols-7 items-center justify-center text-center'>
            <Cell onClick={prevYear}><button>{'<<'}</button></Cell>
            <Cell onClick ={prevMonth}><button>{'<'}</button></Cell>
            <Cell className='col-span-3'>{format(value, "LLLL yyyy")}</Cell>
            <Cell onClick = {nextMonth}><button>{'>'}</button></Cell>
            <Cell onClick={nextYear}><button>{'>>'}</button></Cell>


            {daysOfWeek.map((day)=>{
                return(<Cell key={day} className='text-sm font-bold'>{day}</Cell>)
                
            })}

            {Array.from({length:prefixDays}).map((_,indx)=>(
              <Cell  key={indx}/>
            ))}

            {Array.from({length:numDays}).map((_, index)=>{
              const date = index+1
              return(<Cell key ={index}>{date}</Cell>)
            })}
            {Array.from({length:suffixDays}).map((_,indx)=>(
              <Cell  key={indx}/>
            ))}
            
            
            

        </div>
      
    </div>
  )
}

export default Calender
