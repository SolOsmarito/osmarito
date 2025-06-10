import React from 'react';

const ProfileCard = ({ name, bio, socialLinks }) => {
    return (
        <div className="profile-card">
            <h2>{name}</h2>
            <p>{bio}</p>
            <div className="social-links">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.platform}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProfileCard;