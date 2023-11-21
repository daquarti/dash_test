document.addEventListener('DOMContentLoaded', function() {
    var dashboardUrl = 'https://lookerstudio.google.com/reporting/38b04dbc-feb1-439d-b3f4-784cab1b1d1e'; 
    var container = document.getElementById('dashboard-container');

    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', dashboardUrl);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('frameborder', '0');

    container.appendChild(iframe);
});
