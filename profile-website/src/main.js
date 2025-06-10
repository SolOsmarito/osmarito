// This file contains the JavaScript code that handles interactivity on the website.

document.addEventListener('DOMContentLoaded', () => {
    const profileContainer = document.getElementById('profile-container');

    // Sample user data
    const userData = {
        name: 'John Doe',
        bio: 'Web Developer and Tech Enthusiast',
        socialLinks: {
            github: 'https://github.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe'
        }
    };

    // Function to create profile card
    function createProfileCard(data) {
        const card = document.createElement('div');
        card.className = 'profile-card';

        const name = document.createElement('h2');
        name.textContent = data.name;

        const bio = document.createElement('p');
        bio.textContent = data.bio;

        const socialLinks = document.createElement('div');
        socialLinks.className = 'social-links';

        for (const [platform, url] of Object.entries(data.socialLinks)) {
            const link = document.createElement('a');
            link.href = url;
            link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
            link.target = '_blank';
            socialLinks.appendChild(link);
        }

        card.appendChild(name);
        card.appendChild(bio);
        card.appendChild(socialLinks);
        profileContainer.appendChild(card);
    }

    createProfileCard(userData);
});