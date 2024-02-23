document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const tabs = container.querySelectorAll('.tabs');
    
    function setInitialActiveTab() {
        tabs.forEach(tab => {
            if (tab.dataset.tab === 'chat') {
                tab.classList.add('active');
            }
        });
    }

    // Function to handle tab clicks
    function handleTabClick() {
        const clickedTabId = this.dataset.tab;

        // Remove 'active' class from previously active tab
        const previousActiveTab = container.querySelector('.tabs.active');
        if (previousActiveTab) {
            previousActiveTab.classList.remove('active');
        }

        // Add 'active' class to the clicked tab
        this.classList.add('active');
    }

    setInitialActiveTab();

    container.addEventListener("click", function(event) {
        const clickedTab = event.target.closest('.tabs');
        if (clickedTab) {
            handleTabClick.call(clickedTab);
        }
    });
});

