# Sample Projects 2

A modern, interactive web application preview with real-time features and persistent storage.

## 🚀 Features

- **Real-time Clock**: Live updating date and time display
- **Interactive Counter**: Increment, decrement, and reset functionality with local storage persistence
- **Note Taking**: Save and manage quick notes that persist across sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful dark theme with smooth animations and transitions

## 📦 Getting Started

### Option 1: Using Python

Simply open `index.html` in your browser, or run a local server:

```bash
python3 server.py
```

The application will open automatically at `http://localhost:8000`

### Option 2: Using Node.js

```bash
node server.js
```

Then visit `http://localhost:8000` in your browser

### Option 3: Direct File Access

Simply open `index.html` directly in your web browser:

```bash
# On Linux/Mac
open index.html

# Or just double-click index.html in your file explorer
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks required, pure ES6+
- **LocalStorage API**: Client-side data persistence

## 📁 Project Structure

```
.
├── index.html      # Main HTML file
├── style.css       # Stylesheet with modern design
├── app.js          # Application logic and interactivity
├── server.py       # Python HTTP server (optional)
├── server.js       # Node.js HTTP server (optional)
└── README.md       # This file
```

## 💡 Usage

### Counter Feature
- Click the `+` button to increment
- Click the `-` button to decrement
- Click `Reset` to set the counter back to zero
- Your counter value is automatically saved and restored

### Note Taking Feature
- Type your note in the text area
- Click `Save Note` to persist it to local storage
- Click `Clear` to remove the note
- Notes are automatically restored when you revisit the page

## 🎨 Customization

The application uses CSS custom properties (variables) for easy theme customization. Edit the `:root` section in `style.css`:

```css
:root {
    --primary-color: #6366f1;
    --background: #0f172a;
    --surface: #1e293b;
    /* ... more variables */
}
```

## 🌐 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📝 License

MIT License - Feel free to use this project for learning and development!

## 🤝 Contributing

This is a sample project, but feel free to fork and modify it for your own use!

---

**Enjoy your running preview! 🎉**
