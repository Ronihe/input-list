const express = require('express');
const cors = require('cors');
const APIError = require('./APIError');
const Input = require('./Input');

const app = express();
app.use(cors());
app.use(express.json());

// get all the inputs
app.get('/inputs', async function(req, res, next) {
  try {
    const inputs = await Input.getAll();
    return res.json({ inputs });
  } catch (err) {
    return next(err);
  }
});

// create one input

app.post('/inputs', async function(req, res, next) {
  try {
    const input = await Input.create(req.body);
    return res.status(201).json({ input });
  } catch (err) {
    return next(err);
  }
});

/** 404 handler */

app.get('*', function(req, res, next) {
  const err = new APIError(404, `${req.path} is not found`);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

// global error handler
app.use(function(err, req, res, next) {
  // console.error(error);

  // all errors that get to here get coerced into API Errors
  if (!(err instanceof APIError)) {
    err = new APIError(err.status, err.message);
  }

  return res.status(err.status).json(err);
});

module.exports = app;

app.listen(3001, () => console.log('Server started on 3001'));
