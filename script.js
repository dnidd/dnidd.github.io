function updateDateTime() {
    const now = new Date();

    const gbLang = 'en-GB';

    const year = now.toLocaleDateString(gbLang, {
        year: 'numeric'
    });

    const weekday = now.toLocaleDateString(gbLang, {
        weekday: 'long',
        // year: 'numeric',
        // month: 'long',
        // day: 'numeric'
    });


    const date = now.toLocaleDateString(gbLang, {
        // weekday: 'long',
        // year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const time = now.toLocaleTimeString(gbLang, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById('year').textContent = year;
    document.getElementById('weekday').textContent = weekday;
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

updateDateTime();
setInterval(updateDateTime, 1000);