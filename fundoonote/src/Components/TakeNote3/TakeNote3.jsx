import { InputBase } from '@mui/material'
import React from 'react'
import '../TakeNote3/TakeNote3.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function TakeNote3(props) {
    return (
        <div className="maincontainer3">
            <div className="title3">
                <div className="input3">
                    {props.note.title}
                </div>
                <div className="labelicon3">
                    <PushPinOutlinedIcon />
                </div>
            </div>
            <div className="takenote3">
                    {props.note.note}
            </div>
            <div className="bottomicon3">
                <Button> <AddAlertOutlinedIcon style={{ color: '#202124' }} fontSize="" /> </Button>
                <Button> <PersonAddAltOutlinedIcon style={{ color: "#202124" }} fontSize="" /> </Button>
                <Button> <ColorLensOutlinedIcon style={{ color: "#202124" }} fontSize="" /> </Button>
                <Button> <AddPhotoAlternateOutlinedIcon style={{ color: "#202124" }} fontSize="" /> </Button>
                <Button> <ArchiveOutlinedIcon style={{ color: "#202124" }} fontSize="" /> </Button>
                <Button> <MoreVertOutlinedIcon style={{ color: "#202124" }} fontSize="" /> </Button>
            </div>
        </div>
    )
}

export default TakeNote3