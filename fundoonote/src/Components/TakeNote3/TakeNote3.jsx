import { InputBase } from '@mui/material'
import React, { useState } from 'react'
import '../TakeNote3/TakeNote3.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { NoteArchieveApi, NoteTrashApi, NotePinApi, NoteColorApi, NoteUpdateApi } from '../../Services/DataService';
import ColorPopper from '../ColorPopper/ColorPopper';
import TakeNote2 from '../TakeNote2/TakeNote2';


function TakeNote3(props) {

  // for modal

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (obj) => {
    setOpen(true);
    console.log(obj)
  }
  const handleClose = () => setOpen(false);


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

  const NoteTrash = (id) => {
    console.log(id)
    let nId = {
      "noteID": id
    }

    NoteTrashApi(nId)
      .then(res => {
        console.log(res)
        props.autoRefresh()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const NotePin = (id) => {
    let nId = {
      "noteID": id
    }

    NotePinApi(nId)
      .then(res => {
        console.log(res)
        props.autoRefresh()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const listenToColorPopper2 = (popperColor) => {
    let nId = {
      "noteID": props.note.noteID,
      "color": popperColor
    }

    NoteColorApi(nId)
      .then(res => {
        console.log(res)
        props.autoRefresh()
      })
      .catch(err => {
        console.log(err)
      })
  }

  //takeNote2.jsx

  const [noteData, setNoteData] = useState({ title: props.note.title, note: props.note.note, color: props.note.color })
  const Submit = () => {
    props.ListenToTakeNote2()

    if (noteData.title || noteData.note) {
      console.log("Api calling for update note")
      let noteID = props.note.noteID
      let nId = {
        "title": noteData.title,
        "note": noteData.note,
        "color": noteData.color
      }
      console.log(nId, "update value")
      NoteUpdateApi(nId, noteID)
        .then(res => {
          console.log(res)
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

  const listenToColorPopper1 = (popperColor) => {
    setNoteData(preState => ({ ...preState, color: popperColor }))
  }

  return (
    <div style={{ backgroundColor: props.note.color }} className="maincontainer3">
      <div className="title3">
        <div onClick={() => handleOpen(props.note)} className="input3">
          {props.note.title}
        </div>
        <div className="labelicon3">
          <PushPinOutlinedIcon onClick={() => NotePin(props.note.noteID)} style={{ color: '#202124' }} fontSize="small" />
        </div>
      </div>
      <div onClick={() => handleOpen(props.note)} className="takenote3">
        {props.note.note}
      </div>
      <div className="bottomicon3">
        <AddAlertOutlinedIcon style={{ color: '#202124' }} fontSize="" />
        <PersonAddAltOutlinedIcon style={{ color: "#202124" }} fontSize="" />
        <ColorPopper listenToColorPopper2={listenToColorPopper2} action="update" />
        <DeleteIcon onClick={() => NoteTrash(props.note.noteID)} style={{ color: '#202124' }} fontSize="small" />
        <ArchiveOutlinedIcon onClick={() => NoteArchieve(props.note.noteID)} style={{ color: '#202124' }} fontSize="small" />
        <MoreVertOutlinedIcon style={{ color: "#202124" }} fontSize="" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-note"
      >
        <div style={{ backgroundColor: noteData.color }} className="maincontainer2">
          <div className="title2">
            <div className="input2">
              <InputBase value={noteData.title} onChange={TakeNote2Title} placeholder='Title' />
            </div>
            <div className="labelicon2">
              <PushPinOutlinedIcon />
            </div>
          </div>
          <div className="takenote2">
            <InputBase value={noteData.note} onChange={TakeNote2Description} placeholder='Take a note...' />
          </div>
          <div className="bottomicon2">
            <div className="noteicon2">
              <AddAlertOutlinedIcon style={{ color: '#202124' }} fontSize="small" />
              <PersonAddAltOutlinedIcon style={{ color: "#202124" }} fontSize="small" />
              <ColorPopper listenToColorPopper1={listenToColorPopper1} action="update" />
              <AddPhotoAlternateOutlinedIcon style={{ color: "#202124" }} fontSize="small" />
              <ArchiveOutlinedIcon style={{ color: "#202124" }} fontSize="small" />
              <MoreVertOutlinedIcon style={{ color: "#202124" }} fontSize="small" />
              <UndoOutlinedIcon style={{ color: "#202124" }} fontSize="small  " />
              <RedoOutlinedIcon style={{ color: "#202124" }} fontSize="small" />
            </div>
            <div className="icontext2">
              <Button onClick={Submit} sx={{ textTransform: 'none' }} style={{ color: "#202124" }}>CLOSE</Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default TakeNote3