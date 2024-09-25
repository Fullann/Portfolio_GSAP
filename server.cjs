const express = require('express');
const path = require('path');

const app = express();

// Serve les fichiers statiques du dossier 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Redirection des routes vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
