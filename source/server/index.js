const express = require("express");

const port = process.env.PORT || 8080;
const path = require('path')

const app = express();
const webFolderPath = path.join(__dirname, "../web");

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.redirect("encounter.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use("/", express.static(webFolderPath));


/*
app.use(express.static(webFolderPath, { 
  index: false, // Disable serving index.html by default
  //extensions: ['html', 'htm'] // Specify extensions to serve
}));

// Allow subfolders to be accessible
app.use(express.static(webFolderPath, {
  //extensions: ['html', 'htm'], // Specify extensions to serve
  index: false, // Disable serving index.html by default
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache'); // Optionally set headers for HTML files
    }
  }
}));/***/