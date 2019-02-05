const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:all-data', (event) => {
    const allFamilies = event.detail;
    this.populate(allFamilies);
    console.log(allFamilies);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:option-change', selectedIndex);
    console.log(selectedIndex);
  });
};

SelectView.prototype.populate = function(familyData) {
  familyData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
