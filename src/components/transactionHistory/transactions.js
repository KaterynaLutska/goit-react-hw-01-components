const colorPicker = [
  { type: 'invoice', color: 'rgba(220, 128, 128, 0.755)' },
  { type: 'payment', color: 'rgba(109, 143, 194, 0.427)' },
  { type: 'withdrawal', color: 'rgba(112, 194, 137, 0.427)' },
  { type: 'deposit', color: 'rgba(179, 93, 159, 0.427)' },
];

function colors(typeName) {
  let color;
  colorPicker.find(el => {
    if (typeName === el.type) {
      color = el.color;
    }
    return color;
  });
  return color;
}

export default colors;
