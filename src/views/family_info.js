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

  const familyInfo = document.createElement('div');
  familyInfo.classList.add('family-info');
  this.container.appendChild(familyInfo);

  const instrumentInfo = document.createElement('div');
  instrumentInfo.classList.add('instrument-info');
  this.container.appendChild(instrumentInfo);

  const familyName = document.createElement('h1');
  familyName.textContent = family.name;
  familyInfo.appendChild(familyName);

  const familyDescription = document.createElement('p');
  familyDescription.textContent = family.description;
  familyInfo.appendChild(familyDescription);

  const familyListTitle = document.createElement('h2');
  familyListTitle.textContent = "Instruments include:";
  instrumentInfo.appendChild(familyListTitle);

  const familyInstrumentList = this.instrumentList(family.instruments);
  instrumentInfo.appendChild(familyInstrumentList);
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
