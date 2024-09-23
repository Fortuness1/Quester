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
