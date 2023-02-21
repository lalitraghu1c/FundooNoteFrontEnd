import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import TakeNote1 from '../../Components/TakeNote1/TakeNote1'
import TakeNote2 from '../../Components/TakeNote2/TakeNote2'
import TakeNote3 from '../../Components/TakeNote3/TakeNote3'
import { getListApi } from '../../Services/DataService'

function DashBoard() {
    const [Switch, useSwitch] = useState(false)
    const [DataList, useDataList] = useState([])
    const ListenToTakeNote1 = () => {
        useSwitch(true)
    }
    useEffect(() => {
        getListApi()
            .then(response => {
                console.log(response)
                useDataList(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        },[])
        console.log(DataList)

        return (
            <div>
                <Header />
                {
                    Switch ? <TakeNote2 /> : <TakeNote1 ListenToTakeNote1={ListenToTakeNote1} />
                }
                <div style={{width:'70%',height:'100%', border:'solid green', display:'flex', flexWrap:'wrap'}}>
                {
                    DataList.map(note =>(
                        <TakeNote3 />
                    ))
                }
                </div>
            </div>
        )
    }

export default DashBoard
