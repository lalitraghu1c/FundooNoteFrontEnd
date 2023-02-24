import { InputBase } from '@mui/material'
import React from 'react'
import '../TakeNote3/TakeNote3.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { NoteArchieveApi, NoteTrashApi } from '../../Services/DataService';


function TakeNote3(props) {

    const NoteArchieve = (id) => {
        let nId = {
          "noteID": id
        }
    
        NoteArchieveApi(nId)
          .then(res => {
            console.log(res)
            props.autoRefresh()
          })
          .catch(err => {
            console.log(err)
          })
      }

      const NoteTrash =(id) =>{
        console.log(id)
        let nId = {
          "noteID": id
      }
    
      NoteTrashApi(nId)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }

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
                <DeleteIcon onClick={() => NoteTrash(props.note.noteID)} style={{ color: '#202124' }} fontSize="small" />
                <ArchiveOutlinedIcon onClick={() => NoteArchieve(props.note.noteID)} style={{ color: '#202124' }} fontSize="small" />
                <Button> <MoreVertOutlinedIcon style={{ color: "#202124" }} fontSize="" /> </Button>
            </div>
        </div>
    )
}

export default TakeNote3