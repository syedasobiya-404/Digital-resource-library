document.addEventListener('DOMContentLoaded', () => {
    // select Dom elements
    const searchInput = document.getElementById('searchInput');
    const menuToggle = document.getElementById('menuToggle');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resourceCards = document.querySelectorAll('.card');
    const sideBar = document.getElementById('sideBar');

    let currentCategory = 'all';
    let searchQuery = '';

    // mobile sidebar menu toggle 
    if (menuToggle && sideBar) {
        menuToggle.addEventListener('click', () => {
            sideBar.classList.toggle('active');
        });
    }


    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentCategory = button.getAttribute('data-category');

            applyFilter();
        })
    })

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLocaleLowerCase().trim();
            applyFilter();
        })
    }


       function applyFilter() {
        resourceCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardTitle = card.querySelector('h3').textContent.toLocaleLowerCase();
            const cardDescription = card.querySelector('p').textContent.toLocaleLowerCase();

            const matchsCategory = currentCategory === 'all' || cardCategory === currentCategory;

            const matchsSearch = cardTitle.includes(searchQuery) || cardDescription.includes(searchQuery);

            if (matchsCategory && matchsSearch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        })
    }
})
