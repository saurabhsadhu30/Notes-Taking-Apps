import React from 'react'
import popstyle from '../../pages/Home/Home.module.css'

function Chatsgroup({ togglepopup, groups, handleGroupClick, pickGroup }) {

    return (
        <>
            <div className={popstyle.leftsection}>
                <h2 className={popstyle.h2}>Pocket Notes</h2>
                <div className={popstyle.groupsection}>
                    <button className={popstyle.create_btn} onClick={togglepopup}>+ Create Notes group</button>
                    <div className={popstyle.groups} >
                        {groups.map((element) => {
                            return <div className={popstyle.group} key={element.id} onClick={() => handleGroupClick(element)} style={{
                                backgroundColor: pickGroup === element ? '#F7ECDC' : 'white',
                            }}>
                                <div className={popstyle.group_logo} style={{ backgroundColor: element.profilecolor }}>{element.groupname.slice(0, 2).toUpperCase()}</div>
                                <p > {element.groupname}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatsgroup