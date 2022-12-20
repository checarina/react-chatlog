import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatMessages = [];
    const entries = props.entries;

    for (const entry of entries) {
        chatMessages.push(
            <ChatEntry
            id = {entry.id}
            sender = {entry.sender}
            body = {entry.body}
            timeStamp = {entry.timeStamp}
            liked = {entry.liked}
            onLike = {props.onLike}
            />
        )
    };
    

    return (
        <section>
            {chatMessages}
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired
};

export default ChatLog;