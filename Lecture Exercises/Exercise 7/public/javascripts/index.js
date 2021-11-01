
const getPterosaur = async () => {
  const pterosaurResponse = await fetch("/api/pterosaur");
  const pterosaurInfo = await pterosaurResponse.json();
  document.getElementById("results").innerHTML = pterosaurInfo
    .map(pterosaur => getPterosaurHtml(pterosaur))
    .join("");
}

const getPterosaurHtml = (pterosaur) => {
  return `
    <h2>${pterosaur.Genus}</h2>
    <img src="${pterosaur.img}" />
  `;
}

const sendData = async (e) => {
  e.preventDefault();
  let data = {
    "fname": document.getElementById("fname").value,
    "lname": document.getElementById("lname").value
  };
  const userData = await fetch("/api/userData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  document.getElementById("status").innerHTML = "Sent";
}
