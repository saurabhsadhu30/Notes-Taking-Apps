import React from 'react'
import popstyle from '../../pages/Home/Home.module.css'
import img1 from '../../assets/image-removebg-preview 1.png'
import lockimg from '../../assets/Vector (5).png';

function Intro() {
    return (
        <>
            <div className={popstyle.rightsection}>


                <div>
                    <div className={popstyle.middlediv}>
                        <img src={img1} alt="" />
                        <h1 className={popstyle.h1}>Pocket Notes</h1>
                        <p className={popstyle.p}>Send and receive messages without keeping your phone online. <br />
                            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

                    </div>
                </div>
                <div className={popstyle.bottomdiv}> <img src={lockimg} alt="" /><p className={popstyle.bottom_text}>end-to-end encrypted</p></div>
            </div>
        </>
    )
}

export default Intro