const endpoint = `${process.env.REACT_APP_AIRTABLE_ENDPOINT}?tableName=${process.env.REACT_APP_AIRTABLE_NAME}`;

function submit(data) {
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      {
        Name: data.name,
        Email: data.email,
        Message: data.message,
      },
    ]),
  }).then((r) => r.json());
}

const contact = { submit };

export default contact;
