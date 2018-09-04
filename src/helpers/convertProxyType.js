const proxyTypes = [
  {
    numberValue: 0,
    stringValue: 'Transparent',
  },
  {
    numberValue: 1,
    stringValue: 'Anonymous',
  },
  {
    numberValue: 2,
    stringValue: 'Elite',
  },
];


export default numberValue => proxyTypes.find(i => i.numberValue === numberValue).stringValue;
