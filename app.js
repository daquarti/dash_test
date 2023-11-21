document.addEventListener('DOMContentLoaded', function() {
    var dashboardUrl = 'https://lookerstudio.google.com/s/nj_udY1Wfzc'; 
    var container = document.getElementById('dashboard-container');

    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', dashboardUrl);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('frameborder', '0');

    container.appendChild(iframe);
});
