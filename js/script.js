document.addEventListener('DOMContentLoaded', () => {
    const containerDetails = {
        id: '1a2b3c4d5e',
        name: 'my-container',
        image: 'nginx:latest',
        status: 'running',
        ports: '80:80'
    };

    const allContainers = [
        { id: '1a2b3c4d5e', name: 'my-container' },
        { id: '2b3c4d5e6f', name: 'db-container' },
        { id: '3c4d5e6f7g', name: 'app-container' }
    ];

    if (document.getElementById('container-details')) {
        const containerDetailsDiv = document.getElementById('container-details');
        containerDetailsDiv.innerHTML = `
            <div class="card">
                <h3>${containerDetails.name}</h3>
                <p><strong>ID:</strong> ${containerDetails.id}</p>
                <p><strong>Image:</strong> ${containerDetails.image}</p>
                <p><strong>Status:</strong> ${containerDetails.status}</p>
                <p><strong>Ports:</strong> ${containerDetails.ports}</p>
            </div>
        `;
    }

    if (document.getElementById('containers-list')) {
        const containersListDiv = document.getElementById('containers-list');
        allContainers.forEach(container => {
            const containerCard = document.createElement('div');
            containerCard.className = 'card';
            containerCard.innerHTML = `
                <h3>${container.name}</h3>
                <p><a href="index.html?id=${container.id}">View Details</a></p>
            `;
            containersListDiv.appendChild(containerCard);
        });
    }
});
