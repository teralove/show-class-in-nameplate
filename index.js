module.exports = function ShowClassInName(dispatch) {
    
    const JobNames = [
        'Warrior', 'Lancer', 'Slayer', 'Berserker', 'Sorcerer', 'Archer', 'Priest', 'Mystic', 'Reaper', 'Gunner', 'Brawler', 'Ninja', 'Valkyrie'
    ];
    
    dispatch.hook('S_SPAWN_USER', (event) => {
        let job = (event.templateId  - 10101) % 100;
        event.guild = JobNames[job];
        return true;
    });
}
