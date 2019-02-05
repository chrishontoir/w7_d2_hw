const instrumentData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const FamilyInfo = require('./views/family_info.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const dropDown = new SelectView(selectElement);
  dropDown.bindEvents();

  const infoContainer = document.querySelector('div#instrument-family');
  const instrumentFamilyInfo = new FamilyInfo(infoContainer);
  instrumentFamilyInfo.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentData);
  instrumentFamilies.bindEvents();
});
