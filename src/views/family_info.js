const PubSub = require('../helpers/pub_sub.js');

const FamilyInfo = function(container) {
  this.container = container;
}

FamilyInfo.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:selected-family', (event) => {
    selectedFamilyInfo = event.detail;
    this.render(selectedFamilyInfo);
    console.log(selectedFamilyInfo);
  });
};

FamilyInfo.prototype.render = function(family) {
  this.container.innerHTML = '';

  const familyName = document.createElement('h1');
  familyName.textContent = family.name;
  this.container.appendChild(familyName);

  const familyDescription = document.createElement('p');
  familyDescription.textContent = family.description;
  this.container.appendChild(familyDescription);

  const familyListTitle = document.createElement('h2');
  familyListTitle.textContent = "Instruments include:";
  this.container.appendChild(familyListTitle);

  const familyInstrumentList = this.instrumentList(family.instruments);
  this.container.appendChild(familyInstrumentList);
}

FamilyInfo.prototype.instrumentList = function(instruments) {
  const list = document.createElement('ul');

  instruments.forEach((instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  });
  return list;
};


module.exports = FamilyInfo;
