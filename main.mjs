// Game Imports
import { getObjectsByPrototype, findClosestByPath, findInRange, getTicks } from '/game/utils';
import { Creep, StructureSpawn, Source , StructureContainer} from '/game/prototypes';
import { MOVE, CARRY, WORK, TOUGH, ATTACK, ERR_NOT_IN_RANGE, RESOURCE_ENERGY } from '/game/constants';
import {RESOURCE_SCORE} from '/arena/constants';
import {ScoreCollector} from '/arena/prototypes';


// My Imports
import {spawnMaster} from "./utils/spawnMaster";


export function loop() {
    console.log('The time is currently', getTicks() )
    // Setting variables
    let mySpawn =  getObjectsByPrototype(StructureSpawn).filter(spawn => spawn.my);
    let enemySpawn = getObjectsByPrototype(StructureSpawn).filter(spawn => !spawn.my);

    // Running the Spawn Master code to create all of the creeps!!!!
    mySpawn.forEach(spawn => {
        spawnMaster(spawn);
    });
}


