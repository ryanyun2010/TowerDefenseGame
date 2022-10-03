/**
 * Adds the waves to the waves array
 * @type {function}
 */
function setupWaves(){
  // wave 1 
  // 3 Tier 1s
  // 5 Tier 1s
    waves.push(new Wave([
      {"enemy":new Tier1Enemy(path),"time":10},
      {"enemy":new Tier1Enemy(path),"time":30},
      {"enemy":new Tier1Enemy(path),"time":40},
      {"enemy":new Tier1Enemy(path),"time":150},
      {"enemy":new Tier1Enemy(path),"time":170},
      {"enemy":new Tier1Enemy(path),"time":190},
      {"enemy":new Tier1Enemy(path),"time":210},
      {"enemy":new Tier1Enemy(path),"time":230},
    ]));
  // wave 2
  // 8 Tier 1s
  waves.push(new Wave([
    {"enemy":new Tier1Enemy(path),"time":10},
    {"enemy":new Tier1Enemy(path),"time":30},
    {"enemy":new Tier1Enemy(path),"time":45},
    {"enemy":new Tier1Enemy(path),"time":70},
    {"enemy":new Tier1Enemy(path),"time":84},
    {"enemy":new Tier1Enemy(path),"time":107},
    {"enemy":new Tier1Enemy(path),"time":130},
    {"enemy":new Tier1Enemy(path),"time":160},
  ]));
  // wave 3
  // 3 Tier 1s
  // 1 Tier 2 Bases
  // 2 Tier 2 Tanks
  waves.push(new Wave([
    {"enemy":new Tier1Enemy(path),"time":5},
    {"enemy":new Tier1Enemy(path),"time":15},
    {"enemy":new Tier1Enemy(path),"time":25},
    {"enemy":new Tier2BaseEnemy(path),"time":60},
    {"enemy":new Tier2TankEnemy(path),"time":100},
    {"enemy":new Tier2TankEnemy(path),"time":140},
  ]));
  
  // wave 4
  // 5 tier 1s closely packed
  // followed by 2 tier 2 tanks
  // followed by 2 tier 2 speeds
    waves.push(new Wave([
      {"enemy":new Tier1Enemy(path),"time":5},
      {"enemy":new Tier1Enemy(path),"time":10},
      {"enemy":new Tier1Enemy(path),"time":15},
      {"enemy":new Tier1Enemy(path),"time":20},
      {"enemy":new Tier1Enemy(path),"time":25},
      {"enemy":new Tier2TankEnemy(path),"time":40},
      {"enemy":new Tier2TankEnemy(path),"time":45},
      {"enemy":new Tier2SpeedEnemy(path),"time":60},
      {"enemy":new Tier2SpeedEnemy(path),"time":65},
    ]));
}