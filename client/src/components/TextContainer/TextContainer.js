import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h3>ReatTime Chat Application <span role="img" aria-label="emoji">💬</span></h3>
            <h5>Created with React, Express, Node and Socket.io <span role="img" aria-label="emoji">❤️</span></h5>
        </div>
        {
            users
            ? (
                <div>
                    <h3>Active people:</h3>
                    <div className="activeContainer">
                        <h4>
                            {users.map(({name}) => (
                                <div key={name} className="activeItem">
                                    {name}
                                    <img alt="Online" src={onlineIcon}/>
                                </div>
                            ))}
                        </h4>
                    </div>
                </div>
            )
            : null
        }
    </div>
);

export default TextContainer;