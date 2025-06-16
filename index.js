// Ensure your package.json includes: "type": "module"
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory (optional if using default 'views')
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

app.get('/menu', (req, res) => {
  res.render('menu.ejs');
});

app.get('/reservation', (req, res) => {
  res.render('reservation.ejs');
});

app.get('/service', (req, res) => {
  res.render('service.ejs');
});

app.get('/testimonial', (req, res) => {
  res.render('testimonial.ejs');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});