const container = document.querySelector('.container-cards');


const recurses = async () => {
  const respuesta = await axios.get(
    'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories'
  );

  console.log(respuesta.data.communityCategories);
  return respuesta.data.communityCategories;
};

const cards = async () => {
  const info = await recurses();

  info.forEach((item) => {
    container.innerHTML += `
    <div class="categories__cards">
        <img class="card-image--background" src="${item.logo}" alt="imagen">
        <h3 class="card-title">${item.name}</h3>
    </div>`;
  });
};

cards();