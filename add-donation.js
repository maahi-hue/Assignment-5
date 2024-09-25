// Noakhali-donation
document
  .getElementById("btn-add-donation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input");

    if (typeof addMoney === "number" && addMoney > 0) {
      const balance = getTextFieldValueId("account-balance");
      const newBalance = balance + addMoney;

      document.getElementById("account-balance").innerText = newBalance;

      // add to history
      const div = document.createElement("div");
      div.classList.add("border-inherit");
      div.classList.add("rounded-lg");
      div.classList.add("border-2");
      div.classList.add("text-xl");
      div.classList.add("px-8");
      div.classList.add("py-8");
      div.innerHTML = ` ${addMoney} Taka is Donated for Flood at Noakhali, Bangladesh `;

      // common function
      document.getElementById("history-contents").appendChild(div);
    } else {
      alert("Invalid Donation Amount");
    }
  });

// feni-donation
document
  .getElementById("btn-add-donation2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input2");

    if (typeof addMoney === "number" && addMoney > 0) {
      const balance = getTextFieldValueId("account-balance2");
      const newBalance = balance + addMoney;

      document.getElementById("account-balance2").innerText = newBalance;

      // add to history
      const div = document.createElement("div");
      div.classList.add("border-inherit");
      div.classList.add("rounded-lg");
      div.classList.add("border-2");
      div.classList.add("text-xl");
      div.innerHTML = ` ${addMoney} Taka is Donated for Flood at Feni, Bangladesh `;

      // common function
      document.getElementById("history-contents").appendChild(div);
    } else {
      alert("Invalid Donation Amount");
    }
  });

// quota
document
  .getElementById("btn-add-donation3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input3");

    if (typeof addMoney === "number" && addMoney > 0) {
      const balance = getTextFieldValueId("account-balance3");
      const newBalance = balance + addMoney;

      document.getElementById("account-balance3").innerText = newBalance;

      // add to history
      const div = document.createElement("div");
      div.classList.add("border-inherit");
      div.classList.add("rounded-lg");
      div.classList.add("border-2");
      div.classList.add("text-xl");
      div.innerHTML = ` ${addMoney} Taka is Donated for Quota Movement `;

      // common function
      document.getElementById("history-contents").appendChild(div);
    } else {
      alert("Invalid Donation Amount");
    }
  });
