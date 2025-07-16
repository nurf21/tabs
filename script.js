document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab
      this.classList.add('active');

      // Get tab content ID from data attribute
      const tabId = this.getAttribute('data-tab');

      // Hide all tab content
      document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
      });

      // Show selected tab content
      document.getElementById(tabId).classList.add('active');
    });
  });
});