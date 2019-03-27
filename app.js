var express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());
app.post('/users/authenticate', function (req, res) {
  res.json(
      { id: 1,
        username: "Admin",
        password: "string",
        image: "string;",
        token: "string",
        role: "Admin",
      }
    );
});

app.post('/users/register', function (req, res) {

  res.json(
    { id: 1,
      username: "Admin",
      password: "string",
      image: "string;",
      token: "string",
      role: "Admin",
    }
  );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
