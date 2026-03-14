import React from 'react'

export const SavingsGoalCard = ({ data }) => {
  return ( <>
    <div>
        <p>test</p>
        { data.map( (dataSaving) =>  {
            return ( 
            <div key={dataSaving}>
                {dataSaving.name}
            </div>
            )
        })}
    </div>

    </>
  )
}
