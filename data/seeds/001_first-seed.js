const profiles = [{
  name: 'Imen',
  lastname: 'litheb'
},
{
  name: 'Aymen',
  lastname: 'grala'
}, {
  name: 'Feres',
  lastname: 'el kufti'
},
{
  name: 'Nadia',
  lastname: 'mufti el'
}, {
  name: 'Mohamed',
  lastname: 'ali benrahma'
}
];
exports.seed = function (knex) {
  return knex('profiles').del().then(() => {
    return knex('profiles').insert(profiles)
  })
};