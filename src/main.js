// This file contains the JavaScript code that handles interactivity on the website.

// ---- EDIT YOUR PROFILE DATA BELOW ----
const userData = {
    name: 'Your Name',
    bio: 'Short bio or tagline goes here.',
    avatar: 'assets/avatar.png', // Place your avatar image in src/assets/
    socialLinks: [
        { platform: 'GitHub', url: 'https://github.com/yourusername' },
        { platform: 'Twitter', url: 'https://twitter.com/yourusername' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
        // Add or remove links as needed
    ]
};
// ---- EDIT ABOVE THIS LINE ----

document.addEventListener('DOMContentLoaded', () => {
    const profileContainer = document.getElementById('profile-container');

    function createProfileCard(data) {
        const card = document.createElement('div');
        card.className = 'profile-card';

        // Avatar
        if (data.avatar) {
            const avatar = document.createElement('img');
            avatar.src = data.avatar;
            avatar.alt = `${data.name} avatar`;
            avatar.className = 'profile-avatar';
            card.appendChild(avatar);
        }

        const name = document.createElement('h2');
        name.textContent = data.name;

        const bio = document.createElement('p');
        bio.textContent = data.bio;

        const socialLinks = document.createElement('div');
        socialLinks.className = 'social-links';

        data.socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.platform;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'social-btn';
            socialLinks.appendChild(a);
        });

        card.appendChild(name);
        card.appendChild(bio);
        card.appendChild(socialLinks);
        profileContainer.appendChild(card);
    }

    createProfileCard(userData);
});