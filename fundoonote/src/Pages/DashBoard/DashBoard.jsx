import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import './DashBoard.css';
import TakeNote1 from '../../Components/TakeNote1/TakeNote1'
import TakeNote2 from '../../Components/TakeNote2/TakeNote2'
import TakeNote3 from '../../Components/TakeNote3/TakeNote3'
import { getListApi } from '../../Services/DataService'

function DashBoard() {
    const [Switch, setSwitch] = useState(false)
    const [DataList, setDataList] = useState([])

    const ListenToTakeNote1 = () => {
        setSwitch(true)
    }
    const ListenToTakeNote2 = () => {
        setSwitch(false)
    }

    useEffect(() => {
        getListApi()
            .then(response => {
                console.log(response)
                setDataList(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    console.log(DataList)

    return (
        <div className="box">
            <div>
                <Header />
                {
                    Switch ? <TakeNote2 ListenToTakeNote2={ListenToTakeNote2}/> : <TakeNote1  ListenToTakeNote1={ListenToTakeNote1} />
                }
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', width: '65vw', position: 'relative', left:'20%'}}>
                    {
                        DataList.map(note => (
                            <TakeNote3 note={note} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard
