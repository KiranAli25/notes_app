# 📝 Notes Web App

A beautiful, modern web application for managing notes with a sleek dark/light mode interface. Built with Flask, SQLite, and modern CSS with smooth animations.

![Notes App Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=Notes+Web+App)

## ✨ Features

### 🎨 **Beautiful Modern Design**
- **Gradient backgrounds** with glassmorphism effects
- **Smooth animations** and hover effects throughout
- **Responsive design** that works on all devices
- **Custom scrollbars** that match the theme
- **Modern typography** using Inter font

### 🌙 **Dark Mode Support**
- **Persistent dark mode** - your preference is saved
- **Dynamic toggle button** with icon changes (🌙/☀️)
- **Smooth transitions** between light and dark themes
- **Proper color variables** for consistent theming

### 📝 **Note Management**
- **Create, edit, and delete** notes with ease
- **Rich text content** support
- **Automatic timestamps** for all notes
- **Confirmation dialogs** for destructive actions

### 🔍 **Advanced Search**
- **Real-time search** with debouncing (300ms delay)
- **Search by title or content**
- **Loading states** with spinner animation
- **Error handling** with user-friendly messages
- **Keyboard shortcut**: `Ctrl+K` to focus search

### ⌨️ **Keyboard Shortcuts**
- `Ctrl+K` - Focus search input
- `Ctrl+N` - Focus new note title input

### 🚀 **Performance & UX**
- **Axios integration** for HTTP requests
- **Form validation** with visual feedback
- **Loading states** for all interactions
- **XSS protection** with HTML escaping
- **Accessibility improvements** with proper focus styles

## 🛠️ Technology Stack

- **Backend**: Flask (Python)
- **Database**: SQLite
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **HTTP Client**: Axios
- **Fonts**: Google Fonts (Inter)
- **Icons**: Emoji icons for better UX

## 📁 File Structure

```
notes_app/
├── app.py                 # Main Flask application
├── notes.db              # SQLite database (includes sample data)
├── README.md             # Project documentation
├── requirements.txt      # Python dependencies
├── static/              # Static assets
│   ├── style.css        # Main stylesheet with dark mode
│   └── script.js        # JavaScript functionality
├── templates/           # HTML templates
│   ├── index.html       # Main page template
│   └── edit.html        # Edit note template
└── venv/               # Virtual environment (optional)
```

**Note**: This is a complete, display-ready project. All files are included so you can see the full implementation and run it immediately.

## 🚀 Installation & Setup

### Prerequisites
- Python 3.7 or higher
- pip (Python package installer)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/notes_app.git
cd notes_app
```

### Step 2: Install Dependencies
```bash
pip install -r requirements.txt
```

**Alternative**: If you prefer to use a virtual environment:
```bash
python -m venv venv
venv\Scripts\activate  # On Windows
# or
source venv/bin/activate  # On macOS/Linux
pip install -r requirements.txt
```

### Step 3: Run the Application
```bash
python app.py
```

### Step 4: Access the App
Open your browser and navigate to:
```
http://localhost:5000
```

## 📖 Usage

### Creating a Note
1. Navigate to the "Add a New Note" section
2. Enter a title for your note
3. Write your content in the text area
4. Click "Add Note" to save

### Editing a Note
1. Find the note you want to edit in the notes list
2. Click the "✏️ Edit" button
3. Modify the title and/or content
4. Click "💾 Update Note" to save changes

### Deleting a Note
1. Find the note you want to delete
2. Click the "🗑️ Delete" button
3. Confirm the deletion in the popup dialog

### Searching Notes
1. Use the search box in the "Search Notes" section
2. Type to search by title or content
3. Results update in real-time as you type
4. Use `Ctrl+K` to quickly focus the search box

### Dark Mode
1. Click the dark mode toggle button in the header
2. The theme switches instantly with smooth animations
3. Your preference is automatically saved for future visits

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Success**: Green gradient for positive actions
- **Danger**: Red gradient for delete actions
- **Warning**: Orange gradient for edit actions
- **Dark Mode**: Deep blues and grays with proper contrast

### Animations
- **Hover effects** on buttons and table rows
- **Focus animations** on form inputs
- **Slide-in animations** for new content
- **Smooth transitions** for theme switching

### Responsive Design
- **Mobile-first** approach
- **Flexible layouts** that adapt to screen size
- **Touch-friendly** buttons and interactions
- **Optimized typography** for all devices

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Main page with all notes |
| POST | `/add` | Create a new note |
| GET | `/edit/<id>` | Edit note page |
| POST | `/edit/<id>` | Update note |
| GET | `/delete/<id>` | Delete note |
| GET | `/search?q=<query>` | Search notes (JSON) |

## 🐛 Troubleshooting

### Common Issues

**Flask not found error:**
```bash
pip install flask
```

**Database issues:**
- The `notes.db` file includes sample data to demonstrate the app
- Delete `notes.db` and restart the app to reset the database
- The database will be automatically recreated with the correct schema

**Static files not loading:**
- Ensure files are in the `static/` folder (not `templates/static/`)
- Check browser console for 404 errors
- The static files are already in the correct location in this project

**Dark mode not working:**
- Clear browser cache and localStorage
- Check JavaScript console for errors
- The dark mode functionality is fully implemented and tested

**Port already in use:**
```bash
# If port 5000 is busy, you can specify a different port:
python app.py --port 8080
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Flask** for the web framework
- **Google Fonts** for the Inter font
- **Axios** for HTTP requests
- **CSS Grid & Flexbox** for modern layouts

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the troubleshooting section above
- Review the browser console for errors

## 🎯 Project Goals

This project demonstrates:
- **Modern web development** with Flask and Python
- **Beautiful UI/UX design** with CSS3 and JavaScript
- **Responsive design** principles
- **Dark mode implementation** with persistent preferences
- **Real-time search** functionality
- **Clean code structure** and best practices

Perfect for portfolios, learning, or as a starting point for larger applications!

---

**Made with ❤️ and ☕ by [Your Name]** 
