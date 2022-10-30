export const getPratice = (req, res) => {
  res.status(201).send("Get: /practice");
};

export const postPratice = (req, res) => {
  res.status(201).send("POST: /practice");
};

export const putPratice = (req, res) => {
  res.status(201).send("PUT: /practice/:id");
};

export const deletePratice = (req, res) => {
  res.status(201).send("DELETE: /practice/:id");
};
