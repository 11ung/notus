const domainsOfCare = {
  name: 'Domains of Care',
  text: 'Sample Text Re: domains of care',
  options: ['E-measures', 'Access of Care', 'Experience of Care', 'Utilization & Risk Adjusted Utilization', 'Healthcare Descriptive Info'],
  value: ['em', 'aoc', 'eoc', 'urau', 'hdi'],
  function: '',
}

const starRating = {
  name: 'Star Rating',
  text: 'Sample Text Re: Star Ratings',
  options: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
  value: ['1', '2', '3', '4', '5'],
  function: '',
}

const ncqaBonus = {
  name: 'NCQA Accreditation Bonus',
  text: 'Sample Text Re: NCQA',
  options: ['Accredited/Provisional', 'Interim', 'In-Process', 'Scheduled', 'None'],
  value: ['accredited', 'interim', 'inprocess', 'scheduled', 'none'],
  function: '',
}

const measureTypes = {
  name: 'Measure Types',
  text: 'Sample Text Re: Measures',
  options: ['Process', 'Outcome', 'Patient Experience (CPA,CPC)'],
  value: ['process', 'outcome', 'experience'],
  function: '',
}

const subMeasures = {
  name: 'Sub-Measures',
  text: 'Sample Text Re: submeasures',
  options: ['Show ONLY scores with sub or child measures'],
  function: '',
}

const filterDrawerItemData = {
  domainsOfCare,
  starRating,
  ncqaBonus,
  measureTypes,
  subMeasures,
};

export default filterDrawerItemData;
