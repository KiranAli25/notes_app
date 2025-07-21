// Dark mode toggle with enhanced functionality
const toggleBtn = document.getElementById('darkModeToggle');
const toggleIcon = document.getElementById('toggleIcon');
const toggleText = document.getElementById('toggleText');

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
  document.body.classList.add('dark-mode');
  updateToggleButton(true);
}

toggleBtn.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  updateToggleButton(isDarkMode);
});

function updateToggleButton(isDarkMode) {
  if (isDarkMode) {
    toggleIcon.textContent = '☀️';
    toggleText.textContent = 'Light Mode';
  } else {
    toggleIcon.textContent = '🌙';
    toggleText.textContent = 'Dark Mode';
  }
}

// Enhanced search functionality with axios
let searchTimeout;

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim();
  
  // Clear previous timeout
  clearTimeout(searchTimeout);
  
  // Add loading state
  const tbody = document.querySelector('#notesTable tbody');
  if (tbody) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 2rem;"><div class="loading"></div> Searching...</td></tr>';
  }
  
  // Debounce search requests
  searchTimeout = setTimeout(() => {
    if (query === '') {
      // If search is empty, reload the page to show all notes
      window.location.reload();
      return;
    }
    
    // Use axios for HTTP requests
    axios.get(`/search?q=${encodeURIComponent(query)}`)
      .then(response => {
        updateNotesTable(response.data);
      })
      .catch(error => {
        console.error('Search error:', error);
        const tbody = document.querySelector('#notesTable tbody');
        if (tbody) {
          tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 2rem; color: var(--danger-color);">Error loading search results</td></tr>';
        }
      });
  }, 300); // 300ms debounce
});

function updateNotesTable(results) {
  const tbody = document.querySelector('#notesTable tbody');
  if (!tbody) return;
  
  if (results.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 2rem; color: var(--text-secondary);">No notes found matching your search</td></tr>';
    return;
  }
  
  tbody.innerHTML = '';
  results.forEach(note => {
    const row = document.createElement('tr');
    row.setAttribute('data-id', note[0]);
    row.innerHTML = `
      <td class="note-title">${escapeHtml(note[1])}</td>
      <td class="note-content">${escapeHtml(note[2])}</td>
      <td class="note-timestamp">${escapeHtml(note[3])}</td>
      <td class="note-actions">
        <a href="/edit/${note[0]}" class="btn btn-warning">✏️ Edit</a>
        <a href="/delete/${note[0]}" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this note?')">🗑️ Delete</a>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Form submission enhancement
const noteForm = document.getElementById('noteForm');
if (noteForm) {
  noteForm.addEventListener('submit', (e) => {
    const submitBtn = noteForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Adding Note...';
    submitBtn.disabled = true;
    
    // Form will submit normally, but we can enhance UX
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to top when adding new notes
  const addNoteSection = document.querySelector('.form-section');
  if (addNoteSection) {
    addNoteSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Add focus effects to form inputs
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'translateY(0)';
    });
  });
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
  }
  
  // Ctrl/Cmd + N to focus title input
  if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
    e.preventDefault();
    const titleInput = document.getElementById('title');
    if (titleInput) titleInput.focus();
  }
});

// Add tooltips for keyboard shortcuts
if (searchInput) {
  searchInput.title = 'Press Ctrl+K to focus search';
}