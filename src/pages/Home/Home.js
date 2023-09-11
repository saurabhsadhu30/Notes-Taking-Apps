import React, { useEffect, useState } from 'react'
import popstyle from './Home.module.css'
import Popup from '../../components/popup/Popup';
import Chat from '../../components/Chat/Chat';
import Chatsgroup from '../../components/Chatsgroup/Chatsgroup';
import Intro from '../../components/Intro/Intro';


function Home() {

    const [showpop, setShowpop] = useState(false);
    const [userinfo, setUserinfo] = useState(false);
    const [name, setName] = useState('');
    const [color, setColor] = useState('#0047FF');
    const [groups, setGroups] = useState([]);
    const [pickGroup, setPickGroup] = useState(null);
    const [isMobilescreen, setIsMobilescreen] = useState(false);
    const [text, setText] = useState('')

    const togglepopup = () => {
        setShowpop(!showpop)
    }

    const handleGroupClick = (element) => {
        setUserinfo(true)
        setPickGroup(element);
        checkScreenSize()

    };

    const handleBackClick = () => {
        setPickGroup(null)
        setUserinfo(false)
    }

    const handleCreateGroup = (e) => {
        e.preventDefault();
        const newGroup = {
            id: Date.now().toString(),
            groupname: name,
            profilecolor: color,
            messages: [],
        };
        setGroups([...groups, newGroup]);
        setShowpop(!showpop)
        setName('');
        setColor('');
    }

    const sendMessage = (text) => {
        if (pickGroup) {
            const newMessage = {
                id: Date.now().toString(),
                content: text,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                date: new Date().toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' }),
            };

            const updatedGroups = groups.map((group) => {
                if (group.id === pickGroup.id) {
                    const update = {
                        ...group,
                        messages: [...group.messages, newMessage],
                    };
                    setPickGroup(update)
                    return update
                }
                return group;
            });
            setGroups(updatedGroups);
            setText('')
        }
    };

    const checkScreenSize = () => {
        setIsMobilescreen(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useEffect(() => {
        const storegroup = localStorage.getItem('groups')
        if (storegroup) {
            setGroups(JSON.parse(storegroup))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('groups', JSON.stringify(groups))
    }, [groups])

    return (
        <div className={popstyle.maincontainer}>
            {showpop && <Popup handleCreateGroup={handleCreateGroup} setName={setName} setColor={setColor} />}
            {isMobilescreen ? (
                pickGroup ? (<Chat text={text} setText={setText} sendMessage={sendMessage} pickGroup={pickGroup} groups={groups} handleBackClick={handleBackClick} />) : (<Chatsgroup togglepopup={togglepopup} groups={groups} handleGroupClick={handleGroupClick} />)
            ) : (
                <>
                    <Chatsgroup togglepopup={togglepopup} groups={groups} handleGroupClick={handleGroupClick} pickGroup={pickGroup} />
                    {userinfo && <Chat /> ? <Chat text={text} setText={setText} sendMessage={sendMessage} pickGroup={pickGroup} groups={groups} handleBackClick={handleBackClick} /> : <Intro />
                    }
                </>
            )}
        </div >
    )
}

export default Home