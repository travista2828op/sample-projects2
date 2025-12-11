const STORAGE_KEYS = {
    COUNTER: 'sample-projects-counter',
    NOTE: 'sample-projects-note'
};

function updateClock() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    timeElement.textContent = `${dateString} at ${timeString}`;
}

function initCounter() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');

    let count = parseInt(localStorage.getItem(STORAGE_KEYS.COUNTER) || '0', 10);
    counterElement.textContent = count;

    function updateCounter(newCount) {
        count = newCount;
        counterElement.textContent = count;
        localStorage.setItem(STORAGE_KEYS.COUNTER, count.toString());
        
        counterElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counterElement.style.transform = 'scale(1)';
        }, 200);
    }

    incrementBtn.addEventListener('click', () => {
        updateCounter(count + 1);
    });

    decrementBtn.addEventListener('click', () => {
        updateCounter(count - 1);
    });

    resetBtn.addEventListener('click', () => {
        updateCounter(0);
    });
}

function initNotepad() {
    const noteInput = document.getElementById('note-input');
    const saveBtn = document.getElementById('save-note');
    const clearBtn = document.getElementById('clear-note');
    const savedNoteElement = document.getElementById('saved-note');

    const savedNote = localStorage.getItem(STORAGE_KEYS.NOTE);
    if (savedNote) {
        noteInput.value = savedNote;
        displaySavedNote(savedNote);
    }

    function displaySavedNote(text) {
        if (text) {
            savedNoteElement.textContent = `💾 Saved: ${text}`;
            savedNoteElement.classList.add('show');
        } else {
            savedNoteElement.classList.remove('show');
        }
    }

    saveBtn.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            localStorage.setItem(STORAGE_KEYS.NOTE, noteText);
            displaySavedNote(noteText);
            
            saveBtn.textContent = '✓ Saved!';
            setTimeout(() => {
                saveBtn.textContent = 'Save Note';
            }, 2000);
        }
    });

    clearBtn.addEventListener('click', () => {
        noteInput.value = '';
        localStorage.removeItem(STORAGE_KEYS.NOTE);
        savedNoteElement.classList.remove('show');
    });

    noteInput.addEventListener('input', () => {
        if (noteInput.value !== localStorage.getItem(STORAGE_KEYS.NOTE)) {
            saveBtn.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                saveBtn.style.animation = '';
            }, 500);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
    
    initCounter();
    initNotepad();
    
    console.log('%c🚀 Sample Projects 2 is running!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%cWelcome to the preview!', 'color: #10b981; font-size: 14px;');
});
