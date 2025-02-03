// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Handle form submission for registration
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Land registered successfully!');
});

// Handle search functionality
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const parcelId = document.getElementById('search-parcel-id').value;
    if (parcelId) {
        document.getElementById('search-results').innerHTML = `<p>Results for Parcel ID: ${parcelId}</p>`;
    } else {
        alert('Please enter a valid Parcel ID.');
    }
});