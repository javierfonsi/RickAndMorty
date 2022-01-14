import React from 'react'
import ResidentInfo from '../residentInfo/ResidentInfo'
import './ResidentList.css'

const ResidentList = ({residents, zero, setZero, ten, setTen}) => {
    const paging = (index) => {
        setZero(0+(10*index))
        setTen(10+(10*index))
    }

    let page = residents?.slice(zero, ten)
    let amountpage = Math.ceil(residents?.length/10)
    let array = [] 
    for (let index = 0; index < amountpage; index++) {
        array.push(index)        
    }


    return (

        <>
            <div className='container'>


                {
                    page?.map(resident =>
                    <ResidentInfo
                        url={resident}
                        key={resident}
                    />
                    )
                }
            </div>
            <div>

                {
                    array?.map((value, index) => 
                        
                        <button onClick={() => paging(index)} key={value}>
                            {index+1}
                        </button>
                    )
                }
            </div>
        </>
    )
}

export default ResidentList
