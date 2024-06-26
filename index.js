const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./userModel');

const app = express();
const PORT = process.env.PORT || 3000;

const fakeData = {
  username: 'sent128',
  nickname: 'Sent',
  firstname: 'Nuttapong',
  lastname: 'Akaranaruenart',
  position: 'Full Stack Developer',
  nationality: 'Thailand',
  telephonenumber: "0841096962",
  startingdate: new Date(),
  address: 'Regent Home 18, F Buliding, Chaengwattana St.',
  subdistrict: 'Anusawari',
  district: 'Bang Khen',
  province: 'Bangkok',
  postalcode: '10220',
  facebook: 'https://www.facebook.com/sent128/',
  line: '@sent128',
  instagram: 'https://www.instagram.com/sent128/',
  education: [
    {
      year: 2014,
      institutionName: 'Rajamangala university of technology krungthep',
    },
    {
      year: 2009,
      institutionName: 'Suankularb wittayalai school',
    },
  ],
  experience: [
    {
      company: 'Urbanice.app',
      position: 'Frontend Developer',
      startYear: 2021,
      endYear: 2024,
    },
    {
      company: 'GO Venture Development',
      position: 'Co-Founder',
      startYear: 2020,
      endYear: 2021,
    },
  ],
  skills: [
    {
      name: 'React',
      level: 9,
    },
    {
      name: 'Vue',
      level: 7,
    },
    {
      name: 'Angular',
      level: 7,
    },
  ],
  interests: [
    'Games',
    'Travel',
  ],
  guild: [
    'K-Pop',
    'T-Pop',
  ]
}

// mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.get('/api/users/:id', async (req, res) => {
  try {
    // const user = await User.findById(req.params.id);
    // if (!user) {
    //   return res.status(404).send();
    // }
    // res.send(user);
    res.send(fakeData);
    
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});