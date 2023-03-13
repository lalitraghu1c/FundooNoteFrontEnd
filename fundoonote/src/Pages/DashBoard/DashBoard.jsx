import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import './DashBoard.css';
import TakeNote1 from '../../Components/TakeNote1/TakeNote1'
import TakeNote2 from '../../Components/TakeNote2/TakeNote2'
import TakeNote3 from '../../Components/TakeNote3/TakeNote3'
import { getListApi } from '../../Services/DataService'
import MiniDrawer from '../../Components/Drawer/Drawer';

function DashBoard() {
    const [Switch, setSwitch] = useState(false)
    const [DataList, setDataList] = useState([])
    const [headerState, setHeaderState] = useState(false)
    const [newBar, setNewBar] = useState("Notes")


    const ListenToTakeNote1 = () => {
        setSwitch(true)
    }
    const ListenToTakeNote2 = () => {
        setSwitch(false)
    }

    const getListMethod = () => {
        getListApi()
            .then(response => {
                console.log(response)
                // setDataList(response.data.data)
                let noteArray = [];
                if (newBar === "Notes") {
                    // noteArray = response.data.data;
                    noteArray = response.data.data.filter((note) => {
                        if (note.archive === false && note.trash == false ) {
                            return note;
                        }
                    })
                }
                else if (newBar === "Archive") {
                    noteArray = response.data.data.filter((note) => {
                        if (note.archive === true && note.trash == false) {
                            return note;
                        }
                    })
                }
                else if (newBar === "Trash") {
                    noteArray = response.data.data.filter((note) => {
                        if (note.archive === false && note.trash == true) {
                            return note;
                        }
                    })
                }
                setDataList(noteArray)
            })
            .catch(error => {
                console.log(error)
                console.log('Notes List')
            })
    }

    const autoRefresh = () => {
        getListMethod()
    }

    useEffect(() => {
        getListMethod()
    }, [newBar])
    const headerPart = () => {
        setHeaderState(!headerState)
    }
    const selectText = (label) => {
        console.log(label)
        setNewBar(label)
    }
    return (
        <div className="box">
            <div>
                <Header headerPart={headerPart} />
                <MiniDrawer headerState={headerState} selectText={selectText} />
                {
                    Switch ? <TakeNote2 ListenToTakeNote2={ListenToTakeNote2} autoRefresh={autoRefresh} /> : <TakeNote1 ListenToTakeNote1={ListenToTakeNote1} />
                }
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', width: '65vw', position: 'relative', left: '20%' }}>
                    {
                        DataList.map(note => (
                            <TakeNote3 ListenToTakeNote2={ListenToTakeNote2} note={note} autoRefresh={autoRefresh} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard
