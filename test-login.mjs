fetch("http://localhost:3000/api/custom-login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "newuser@example.com"
  })
})
.then(async res => {
  const text = await res.text();
  console.log("RAW RESPONSE:", text);
})
.catch(console.error);
