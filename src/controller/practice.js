export const getPractice = (req, res) => {
  res.status(201).send("Get: /practice");
};

export const postPractice = (req, res) => {
  res.status(201).send("POST: /practice");
};

export const putPractice = (req, res) => {
  res.status(201).send("PUT: /practice/:id");
};

export const deletePractice = (req, res) => {
  res.status(201).send("DELETE: /practice/:id");
};
