fetch("http://localhost:3000/api/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Prince",
    email: "newuser@example.com"
  })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
