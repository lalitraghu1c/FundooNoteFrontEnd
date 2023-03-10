import React from 'react'
import "../Header/Header.css"
import { Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { connect } from 'react-redux' //HOC


function Header(props) {
    const menuOpen=()=>{
        props.headerPart()
    }
    return (
        <div className='header-box'>
            <div className='inner-header'>
                <div className='main-menu'>
                    <Button color="inherit" onClick={menuOpen}><MenuIcon /></Button>
                </div>
                <div className='keeplogo'>
                    <img className='keepimg' src='https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png' alt="Google Keep Logo" />
                    <a className='keep-txt' href=''>{props.label}</a>
                </div>
                <div className='searchBar'>
                    <div className='icon-search'><SearchIcon fontSize="medium" color="action" /></div>
                    <div className='inner-search'><InputBase placeholder="Search" /></div>
                </div>
                <div className='five-icons'>
                    <div className='ref-set-icon'>
                        <Button variant="text" color="inherit" size="small"><RefreshIcon size="small" /></Button>
                        <Button variant="text" color="inherit"><ViewAgendaOutlinedIcon /></Button>
                        <Button variant="text" color="inherit"><SettingsIcon /> </Button>
                    </div>
                    <div className='app-acc-icon'>
                        <Button color="inherit"><AppsIcon /></Button>
                        <Button variant="text" color="inherit"><AccountCircleRoundedIcon /></Button>
                    </div>
                </div>
            </div>
        </div >
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        label : state.DrawerReducer.title //stores in label
    }
}

export default connect (mapStateToProps) (Header)
