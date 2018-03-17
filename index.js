module.exports = function ShowClassInName(dispatch) {
    
    const ClassNames = [
        'Warrior', 'Lancer', 'Slayer', 'Berserker', 'Sorcerer', 'Archer', 'Priest', 'Mystic', 'Reaper', 'Gunner', 'Brawler', 'Ninja', 'Valkyrie'
    ];
    
    dispatch.hook('S_SPAWN_USER', (event) => {
        let job = (event.templateId  - 10101) % 100;
        
        event.name = event.name + ' (' + JobNames[job] + ')';       // Show name and class... "Adam (Warrior)"
        //event.name = event.name + ' - ' + JobNames[job];            // Show name and class... "Adam - Warrior"
        //event.name = event.name + ' (' + JobNames[job] + ')';       // Show only the class... "Warrior"
        
        return true;
    });
}
