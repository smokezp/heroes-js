let heroes = [];

function generateHero(newHeroName) {
  let container = $('#main-container');
  let i = heroes.push({name: newHeroName});
  i--;
  let div = "<tr id='" + 'hero' + i + "'>" +
      "<td><div class='name'>" + newHeroName + "</div></td>" +
      "<td><button onClick='Edit(" + i + ")'>Редактировать</button></td>" +
      "<td><button onClick='Delete(" + i + ")'>Удалить</button></td>" +
      "</tr>";
  $(container).append(div);

}

function Edit(i) {
  let container = $('#action-container');
  container.empty();
  let hero = heroes[i];

  let div = "<div id='hero-edit'>" +
      "<input class='hero-name' type='text' value='" + hero.name + "'>" +
      "<button onClick='Update(" + i + ")'>Save</button>" +
      "<button onClick=\"Hide('edit')\">Cancel</button>" +
      "</div>";

  container.append(div);
}

function Store() {
  let heroName = $('#hero-create').find('.hero-name').val();
  generateHero(heroName);
  Hide('create');
}

function Create() {
  let container = $('#action-container');
  container.empty();
  let div = "<div id='hero-create'>" +
      "<input class='hero-name' type='text'>" +
      "<button onClick='Store()'>Save</button>" +
      "<button onClick=\"Hide('create')\">Cancel</button>" +
      "</div>";

  container.append(div);
}

function Update(i) {
  let newHeroName = $('#hero-edit').find('.hero-name').val();
  heroes[i].name = newHeroName;
  $('#hero' + i).find('.name')[0].innerHTML = newHeroName;
  Hide('edit');
}

function Hide(target) {
  $('#hero-' + target).remove();
}

function Delete(i) {
  delete heroes[i];
  $('#hero' + i).remove();
}

$(document).ready(function () {

  let defaultHeroes = [
    {
      "name": "dsfsdfsdf"
    }, {
      "name": "sddss2222d"
    }
  ];

  defaultHeroes.map((hero, i) => {
    generateHero(hero.name);
  });
});