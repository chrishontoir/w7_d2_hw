const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('InstrumentFamilies:all-data', this.data);
  console.log(this.data);

  PubSub.subscribe('SelectView:option-change', (event) => {
    const selectedFamilyIndex = event.detail;
    this.publishSelectedFamily(selectedFamilyIndex);
  });
};

InstrumentFamilies.prototype.publishSelectedFamily = function(selectedIndex) {
  const selectedFamily = this.data[selectedIndex];
  PubSub.publish('InstrumentFamilies:selected-family', selectedFamily);
  console.log(selectedFamily);
};

module.exports = InstrumentFamilies;
