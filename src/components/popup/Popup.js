import React from 'react'
import popstyle from './Popup.module.css'


function Popup({ setName, setColor, handleCreateGroup }) {

    return (
        <div className={popstyle.popup_box}>
            <div className={popstyle.box}>
                <h1>Create New Notes group</h1>
                <label htmlFor="">Group Name</label>
                <input type="text" placeholder='Enter your group name....' onChange={(e) => { setName(e.target.value) }} />
                <div className={popstyle.colorbox}>
                    <p>Choose colour</p>
                    <div className={popstyle.choosecolor}>
                        <div className={popstyle.group_logo} style={{ backgroundColor: "#B38BFA" }} onClick={() => { setColor('#B38BFA') }}></div>
                        <div className={popstyle.group_logo} style={{ backgroundColor: "#FF79F2" }} onClick={() => { setColor('#FF79F2') }}></div>
                        <div className={popstyle.group_logo} style={{ backgroundColor: "#43E6FC" }} onClick={() => { setColor('#43E6FC') }}></div>
                        <div className={popstyle.group_logo} style={{ backgroundColor: "#F19576" }} onClick={() => { setColor('#F19576') }}></div>
                        <div className={popstyle.group_logo} style={{ backgroundColor: "#0047FF" }} onClick={() => { setColor('#0047FF') }}></div>
                        <div className={popstyle.group_logo} style={{ backgroundColor: "#6691FF" }} onClick={() => { setColor('#6691FF') }}></div>
                    </div>
                </div>
                <div className={popstyle.create_btn} onClick={handleCreateGroup} ><button>Create</button></div>
            </div>
        </div>
    )
}

export default Popup