let key = 1;
const flags = [];

function create(flagvalues) {
  const flag = { id: key++, ...flagvalues };

  flags.push(flag);

  return flag;
}

function readAll() {
  return flags;
}

module.exports = { create, readAll };
