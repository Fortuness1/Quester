const iconButton = document.querySelector("#iconEye");
const typePass = document.querySelector("#password");
const deleteButton = document.querySelector(".delete-button");
const modalDelete = document.querySelector(".modal-delete");
const modalConfirm = document.querySelector(".modal-confirm");
const cancelButton = document.querySelector("#cancel-button");
const confirmButton = document.querySelector(".confirm-button");
const confirmModalButton = document.querySelector("#confirm-modal-button");

iconButton.addEventListener("click", olhoSenha);

function olhoSenha() {
  if (typePass.type === "password") {
    typePass.setAttribute("type", "text");
    iconButton.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else if (typePass.type === "text") {
    typePass.setAttribute("type", "password");
    iconButton.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
}

deleteButton.onclick = () => {
  modalDelete.showModal();
};

cancelButton.onclick = () => {
  modalDelete.close();
};

confirmButton.onclick = () => {
  modalConfirm.showModal();
};

confirmModalButton.onclick = () => {
  modalConfirm.close();
};

const userName = document.getElementById("surname");
const name = document.getElementById("name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

function setDataUser(surname, nameUser, lastNameUser, emailUser, passwordUser) {
  userName.value = surname;
  name.value = nameUser;
  lastName.value = lastNameUser;
  email.value = emailUser;
  password.value = passwordUser;
}

document.addEventListener("DOMContentLoaded", async function () {
  const userID = {
    _id: "66e4e9d5d51ddb637ef723bf",
  };

  try {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userID),
    });

    const data = await response.json();

    const messageDiv = document.getElementById("message");
    if (response.ok) {
      setDataUser(
        data.surname,
        data.name,
        data.last_name,
        data.email,
        data.password
      );
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Erro na requisição.";
    messageDiv.style.color = "red";
  }
});

confirmButton.addEventListener("click", async () => {
  const userUpdate = {
    _id: "66e4e9d5d51ddb637ef723bf",
    name: name.value,
    last_name: lastName.value,
    surname: userName.value,
    email: email.value,
    password: password.value,
  };
  try {
    const response = await fetch("http://localhost:3000/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUpdate),
    });
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
});

/*
const getPhoto = async (idUSer) => {
  try {
    const response = await fetch(
      `http://localhost:3000/profile-photo/${idUSer}`,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (response.ok) {
      const blob = await response.blob();
      const imgURL = URL.createObjectURL(blob);
      const imgElement = document.getElementById("teste");
      imgElement.src = imgURL;
      return imgURL;
    } else {
      console.error("Erro ao enviar o arquivo:", response.statusText);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};
*/
