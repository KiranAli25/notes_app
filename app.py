from flask import Flask, render_template, request, redirect, url_for, jsonify
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Initialize DB
def init_db():
    with sqlite3.connect('notes.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS notes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()

init_db()

# Helper to get all notes
def get_notes():
    with sqlite3.connect('notes.db') as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM notes ORDER BY timestamp DESC')
        notes = cursor.fetchall()
    return notes

@app.route('/')
def index():
    notes = get_notes()
    return render_template('index.html', notes=notes)

@app.route('/add', methods=['POST'])
def add_note():
    title = request.form['title']
    content = request.form['content']
    with sqlite3.connect('notes.db') as conn:
        cursor = conn.cursor()
        cursor.execute('INSERT INTO notes (title, content) VALUES (?, ?)', (title, content))
        conn.commit()
    return redirect(url_for('index'))

@app.route('/edit/<int:note_id>', methods=['GET', 'POST'])
def edit_note(note_id):
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        with sqlite3.connect('notes.db') as conn:
            cursor = conn.cursor()
            cursor.execute('UPDATE notes SET title=?, content=?, timestamp=CURRENT_TIMESTAMP WHERE id=?', (title, content, note_id))
            conn.commit()
        return redirect(url_for('index'))
    else:
        with sqlite3.connect('notes.db') as conn:
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM notes WHERE id=?', (note_id,))
            note = cursor.fetchone()
        return render_template('edit.html', note=note)

@app.route('/delete/<int:note_id>')
def delete_note(note_id):
    with sqlite3.connect('notes.db') as conn:
        cursor = conn.cursor()
        cursor.execute('DELETE FROM notes WHERE id=?', (note_id,))
        conn.commit()
    return redirect(url_for('index'))

@app.route('/search')
def search():
    query = request.args.get('q', '')
    with sqlite3.connect('notes.db') as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM notes WHERE title LIKE ? OR content LIKE ?", ('%'+query+'%', '%'+query+'%'))
        results = cursor.fetchall()
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)