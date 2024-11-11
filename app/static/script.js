document.addEventListener('DOMContentLoaded', () => {
    const calendarElement = document.getElementById('calendar');
    const dateInput = document.getElementById('date');
    const form = document.getElementById('appointmentForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    // Simple calendar rendering
    function renderCalendar() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let html = '<table><thead><tr>';
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (const day of weekdays) {
    html += `<th>${day}</th>`;
    }
    html += '</tr></thead><tbody><tr>';
    for (let i = 0; i < firstDay; i++) {
    html += '<td></td>';
    }
    for (let day = 1; day <= daysInMonth; day++) {
    html += `<td class="calendar-day">${day}</td>`;
    
    if ((day + firstDay) % 7 === 0) {
    html += '</tr><tr>';
    }
    }
    html += '</tr></tbody></table>';
    calendarElement.innerHTML = html;
    // Add click event to calendar days
    document.querySelectorAll('.calendar-day').forEach(dayElement => {
    dayElement.addEventListener('click', (event) => {
    const selectedDate = new Date(year, month, event.target.innerText);
    dateInput.value = selectedDate.toISOString().split('T')[0];
    confirmationMessage.textContent = '';
    });
    });
    }
    renderCalendar();
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    confirmationMessage.textContent = 'Appointment booked successfully!';
    });
    });