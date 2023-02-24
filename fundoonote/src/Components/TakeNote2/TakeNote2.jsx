import { InputBase } from '@mui/material'
import React, { useState } from 'react'
import '../TakeNote2/TakeNote2.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { createNewNoteApi } from '../../Services/DataService';


function TakeNote2(props) {
    const [noteData, setNoteData] = useState({ title: '', note: '' })
    const Submit = () => {
        props.ListenToTakeNote2()

        if (noteData.title || noteData.note) {
            console.log("Api calling for create note")
            createNewNoteApi(noteData)
                .then(response => {
                    console.log(response)
                    props.autoRefresh()
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }


    const TakeNote2Title = (e) => {
        setNoteData(preState => ({ ...preState, title: e.target.value }))
    }

    const TakeNote2Description = (e) => {
        setNoteData(preState => ({ ...preState, note: e.target.value }))
    }

    return (
        <div className="maincontainer2">
            <div className="title2">
                <div className="input2">
                <InputBase onChange={TakeNote2Title} placeholder='Title' />
                </div>
                <div className="labelicon2">
                    <PushPinOutlinedIcon />
                </div>
            </div>
            <div className="takenote2">
                <InputBase onChange={TakeNote2Description} placeholder='Take a note...' />
            </div>
            <div className="bottomicon2">
                <div className="noteicon2">
                    <Button> <AddAlertOutlinedIcon style={{ color: '#202124' }} fontSize="small" /> </Button>
                    <Button> <PersonAddAltOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </Button>
                    <Button> <ColorLensOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </Button>
                    <Button> <AddPhotoAlternateOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </Button>
                    <Button> <ArchiveOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </Button>
                    <Button> <MoreVertOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </Button>
                    <Button> <UndoOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </Button>
                    <Button> <RedoOutlinedIcon style={{ color: "#202124" }} fontSize="small" /> </Button>
                </div>
                <div className="icontext2">
                    <Button onClick={Submit} sx={{ textTransform: 'none' }} style={{ color: "#202124" }}>CLOSE</Button>
                </div>
            </div>
        </div>
    )
}

export default TakeNote2