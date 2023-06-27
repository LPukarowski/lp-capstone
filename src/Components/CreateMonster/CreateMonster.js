import { useState } from "react";
import "./CreateMonster.scss"
import '../../partials/global.scss'

const CreateMonster = ({createdMonster, setCreatedMonster}) => {
    const [abilityScores, setAbilityScores] = useState({});
    const [checked, setChecked] = useState(false);
    const [monsterSpeed, setMonsterSpeed] = useState({});
    const [monsterSense, setMonsterSense] = useState({});
    const [monsterImmune, setMonsterImmune] = useState([]);
    const [monsterSkills, setMonsterSkills] = useState([]);
    const [damageImmune, setDamageImmune] = useState([]);
    const [damageResist, setDamageResist] = useState([]);
    const [damageVulnerable, setDamageVulnerable] = useState([]);
    console.log(monsterSpeed)

    const handleSubmit = (e, bool) => {
        
    }
    const includesKey = (key, obj) => {
       const arr = Object.keys(obj);
        if (arr.includes(key)) {
            return true;
        } else {
            return false;
        }
    }
    const handleSpeed = ({target}) => {
        const key = target.name;
        
        if (includesKey(key, monsterSpeed)){
            setMonsterSpeed(current => {
                const copy = {...current};
                delete copy[key];
                return copy;
            });

        } else {
            setMonsterSpeed({...monsterSpeed, [key]: 0})
        }
    }
    const handleSpeedValue = (e) => {
        if (includesKey(e.target.name, monsterSpeed))
        setMonsterSpeed({...monsterSpeed, [e.target.name]: e.target.value})
    }
    const handleSenses = (e) => {
        const key = e.target.name;

        if (includesKey(key, monsterSense)) {
            setMonsterSense(current => {
                const copy = {...current};
                delete copy[key];
                return key;
            });
        } else {
            setMonsterSense({...monsterSense, [key]: 0})
        }
    }

    const handleSensesValue = (e) => {
        if (includesKey(e.target.name, monsterSense)) {
            setMonsterSense({...monsterSense, [e.target.name]: e.target.value})
        }
    }
    const options = [];
    for (let i = 1; i <= 30; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }

    const handleImmune = (e) => {
        if (damageImmune.find(ele => ele === e.target.value)) {
            const immune = damageImmune.filter(ele => ele !== e.target.value)
            setDamageImmune([...immune])
        } else {
            setDamageImmune([...damageImmune, e.target.value])
            setDamageResist(damageResist.filter(ele => ele !== e.target.value))
            setDamageVulnerable(damageVulnerable.filter(ele => ele !== e.target.value))
        }
    }
    const handleResist = (e) => {
        if (damageResist.find(ele => ele === e.target.value)) {
            const resist = damageResist.filter(ele => ele !== e.target.value)
            setDamageResist([...resist])
        } else {
            setDamageResist([...damageResist, e.target.value])
            setDamageImmune(damageImmune.filter(ele => ele !== e.target.value))
            setDamageVulnerable(damageVulnerable.filter(ele => ele !== e.target.value))
        }
    }
    const handleVulnerable = (e) => {
        if (damageVulnerable.find(ele => ele === e.target.value)) {
            const vulnerable = damageVulnerable.filter(ele => ele !== e.target.value)
            setDamageVulnerable([...vulnerable])
        } else {
            setDamageVulnerable([...damageVulnerable, e.target.value])
            setDamageImmune(damageImmune.filter(ele => ele !== e.target.value))
            setDamageResist(damageResist.filter(ele => ele !== e.target.value))
        }
    }
    const handleNormal = (e) => {
        setDamageImmune(damageImmune.filter(ele => ele !== e.target.value))
        setDamageResist(damageResist.filter(ele => ele !== e.target.value))
        setDamageVulnerable(damageVulnerable.filter(ele => ele !== e.target.value))
    }
    const handleSkill = (e) => {
        if (monsterSkills.find(ele => ele === e.target.value)) {
            setMonsterSkills(monsterSkills.filter(ele => ele !== e.target.value))
        } else {
            setMonsterSkills([...monsterSkills, e.target.value])
        }
    }
    const handleCondition = (e) => {
        if (monsterImmune.find(ele => ele === e.target.value)) {
            setMonsterImmune(monsterImmune.filter(ele => ele !== e.target.value))
        } else {
            setMonsterImmune([...monsterImmune, e.target.value])
        }
    }
const handleChange = (e) => {
    setCreatedMonster({
        ...createdMonster,
        [e.target.id]: e.target.value
    });
}
const handleAbilityChange = (e) => {
    setAbilityScores( {
        ...abilityScores,
        [e.target.id]: e.target.value
    });
}

const modifier = (num) => {
    const mod = Math.floor(((num) - 10) / 2)

    if (mod > 0){
        return '+' + mod;
    } else {
        return mod.toString();
    }
}
    return (
        <form className="monster body-text" spellCheck='false' autoComplete="off">
            <div className="monster__info">
                <div className="monster__info-name">
                    <label htmlFor="monster_name" className="monster__name">
                    Monster Name:
                    </label>
                    <input className='input monster__name-input' type="text" id="monster_name" value={createdMonster.monster_name} onChange={e => handleChange(e)}/>
                </div>
                <div className="monster__select">
                    <label htmlFor="monster_type">
                        <select className='input monster__select-input' id="monster_type" value={createdMonster.monster_type} onChange={e => handleChange(e)}>
                            <option value="">--Select Monster Type--</option>
                            <option value="aberration">Aberration</option>
                            <option value="beast">Beast</option>
                            <option value="celestial">Celestial</option>
                            <option value="construct">Construct</option>
                            <option value="dragon">Dragon</option>
                            <option value="elemental">Elemental</option>
                            <option value="fey">Fey</option>
                            <option value="fiend">Fiend</option>
                            <option value="giant">Giant</option>
                            <option value="humanoid">Humanoid</option>
                            <option value="monstrosity">Monstrosity</option>
                            <option value="ooze">Ooze</option>
                            <option value="plant">Plant</option>
                            <option value="undead">Undead</option>
                        </select>
                    </label>
                    <label htmlFor="monster_size">
                        <select className='input monster__select-input' id="monster_size" value={createdMonster.monster_size} onChange={e => handleChange(e)}>
                            <option value="">--Select Monster Size--</option>
                            <option value="tiny">Tiny</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="huge">Huge</option>
                            <option value="gargantuan">Gargantuan</option>
                        </select>
                    </label>
                </div>
                <div className="monster__cr">
                    <div className="monster__cr-prof">
                        <fieldset className="monster__challenge">
                            <legend>Challenge Rating</legend>
                            <select className='input monster__challenge-input' id="challenge_rating" value={createdMonster.challenge_rating} onChange={e => handleChange(e)}>
                                <option value="0">0</option>
                                <option value="1/8">1/8</option>
                                <option value="1/4">1/4</option>
                                <option value="1/2">1/2</option>
                                {options}
                            </select>    
                        </fieldset>
                        <fieldset className="monster__challenge">
                            <legend>Proficiency Bonus</legend>
                            <p className="monster__prof">+{(createdMonster.challenge_rating)<=4? 2:(Math.floor(2 + (createdMonster.challenge_rating - 1)/4))}</p>
                        </fieldset>
                        <fieldset className="monster__hitpoint">
                            <legend>Hit Points</legend>
                            <input className='input monster__hitpoint-input' type="text" id="hitpoints" value={createdMonster.hitpoints} onChange={e => handleChange(e)}/>
                        </fieldset>
                    </div>
                    <div className="monster__ac">
                        <label htmlFor="armour-class" className="monster__ac-label">
                            <input className='input monster__ac-input' type="text" id="armour_class" value={createdMonster.armour_class} onChange={e => handleChange(e)}/> AC
                        </label>
                    </div>
                </div>
                
            </div>
            <div className="monster__speed-senses">
                <fieldset>
                    <legend>Speed of monster</legend>
                    <div className="monster__speeds">
                        <div>
                            <input type="checkbox" className="checkbox" name="speed" onChange={e => handleSpeed(e)}/>
                            <label htmlFor="speed">Speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" name="speed"  onChange={e => handleSpeedValue(e)}/>ft.
                        </div>
                    </div>
                    <div className="monster__speeds">
                        <div>
                            <input type="checkbox" className="checkbox" name='climbing_speed' onChange={e => handleSpeed(e)}/>
                            <label htmlFor="climbing-speed">Climbing speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" name='climbing_speed' onChange={e => handleSpeedValue(e)}/>ft.
                        </div>
                    </div>
                    <div className="monster__speeds">
                        <div>
                            <input type="checkbox" className="checkbox" name='swim_speed' onChange={e => handleSpeed(e)}/>
                            <label htmlFor="swim-speed">Swim speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" name='swim_speed' onChange={e => handleSpeedValue(e)}/>ft.
                        </div>
                    </div>
                    <div className="monster__speeds">
                        <div>
                            <input type="checkbox" className="checkbox" name='burrow_speed' onChange={e => handleSpeed(e)}/>
                            <label htmlFor="burrow-speed">Burrow speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" name='burrow_speed' onChange={e => handleSpeedValue(e)}/>ft.
                        </div>
                    </div>
                    <div className="monster__speeds">
                        <div>
                            <input type="checkbox" className="checkbox" name='flying_speed' onChange={e => handleSpeed(e)}/>
                            <label htmlFor="swim-speed">Flying speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" name='flying_speed' onChange={e => handleSpeedValue(e)}/>ft.
                        </div>
                    </div>
                </fieldset>
                <fieldset className="monster__senses">
                    <legend>Senses</legend>
                    <div className="monster__senses-div">
                        <div>
                            <input className="checkbox" type="checkbox" name="blindsight" onChange={e => handleSenses(e)}/>
                            <label htmlFor="blightsight">Blindsight</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" name="blindsight" onChange={e => handleSensesValue(e)}/>ft.
                        </div>
                    </div>
                    <div className="monster__senses-div">
                        <div>
                            <input className="checkbox" type="checkbox" name="darkvision" onChange={e => handleSenses(e)}/>
                            <label htmlFor="darkvision">Darkvision</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" name="darkvision" onChange={e => handleSensesValue(e)}/>ft.
                        </div>
                    </div>
                    <div className="monster__senses-div"> 
                        <div>
                            <input className="checkbox" type="checkbox" name="tremorsense" onChange={e => handleSenses(e)}/>
                            <label htmlFor="Tremorsense">Tremorsense</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" name="tremorsense" onChange={e => handleSensesValue(e)}/>ft.
                        </div>
                    </div>
                    <div className="monster__senses-div">
                        <div>
                            <input className="checkbox" type="checkbox" name="truesight" onChange={e => handleSenses(e)}/>
                            <label htmlFor="truesight">Truesight</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" name="truesight" onChange={e => handleSensesValue(e)}/>ft.
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="monster__divider">
                <fieldset className="monster__ability-scores ">
                    <legend>Ability Scores</legend>
                    <fieldset className="monster__modifier">
                       <legend>STRENGTH</legend> 
                       <input className='input monster__ability' type="text" id="str" value={abilityScores.str} 
                       onChange={e => handleAbilityChange(e)}/> 
                       <p>{abilityScores.str? modifier(abilityScores.str): 0}</p>
                    </fieldset>
                    <fieldset className="monster__modifier">
                       <legend>DEXTERITY</legend> 
                       <input className='input monster__ability' type="text" id="dex" value={abilityScores.dex} 
                       onChange={e => handleAbilityChange(e)}/> 
                       <p>{abilityScores.dex? modifier(abilityScores.dex): 0}</p>
                    </fieldset>
                    <fieldset className="monster__modifier">
                       <legend>CONSTITUTION</legend> 
                       <input className='input monster__ability' type="text" id="con" value={abilityScores.con} 
                       onChange={e => handleAbilityChange(e)}/> 
                       <p>{abilityScores.con? modifier(abilityScores.con): 0}</p>
                    </fieldset>
                    <fieldset className="monster__modifier">
                       <legend>INTELLIGENCE</legend> 
                       <input className='input monster__ability' type="text" id="int" value={abilityScores.int} 
                       onChange={e => handleAbilityChange(e)}/> 
                       <p>{abilityScores.int? modifier(abilityScores.int): 0}</p>
                    </fieldset>
                    <fieldset className="monster__modifier">
                       <legend>WISDOM</legend> 
                       <input className='input monster__ability' type="text" id="wis" value={abilityScores.wis} 
                       onChange={e => handleAbilityChange(e)}/> 
                       <p>{abilityScores.wis? modifier(abilityScores.wis): 0}</p>
                    </fieldset>
                    <fieldset className="monster__modifier">
                       <legend>CHARISMA</legend> 
                       <input className='input monster__ability' type="text" id="cha" value={abilityScores.cha} 
                        onChange={e => handleAbilityChange(e)}/> 
                       <p>{abilityScores.cha? modifier(abilityScores.cha): 0}</p>
                    </fieldset>
                </fieldset>
                <fieldset className="monster__conditions">
                    <legend>Condition Immunities</legend>
                    <div>
                        <input type="checkbox" className='checkbox' value='blinded' onChange={e => handleCondition(e)}/>
                        <label>Blinded</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='charmed' onChange={e => handleCondition(e)}/>
                        <label>Charmed</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='deafened' onChange={e => handleCondition(e)}/>
                        <label>Deafened</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='frightened' onChange={e => handleCondition(e)}/>
                        <label>Frightened</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='grappled' onChange={e => handleCondition(e)}/>
                        <label>Grappled</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='paralyzed' onChange={e => handleCondition(e)}/>
                        <label>Paralyzed</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='petrified' onChange={e => handleCondition(e)}/>
                        <label>Petrified</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='poisoned' onChange={e => handleCondition(e)}/>
                        <label>Poisoned</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='prone' onChange={e => handleCondition(e)}/>
                        <label>Prone</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='restrained' onChange={e => handleCondition(e)}/>
                        <label>Restrained</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='stunned' onChange={e => handleCondition(e)}/>
                        <label>Stunned</label>
                    </div>
                </fieldset>
                <fieldset className='monster__skills'>
                    <legend>Skills (Proficiencies)</legend>
                    <div>
                        <input type='checkbox' className='checkbox' value='acrobactics' onChange={e => handleSkill(e)}/>
                        <label>Acrobactics</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='animal handling' onChange={e => handleSkill(e)}/>
                        <label>Animal Handling</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='arcana' onChange={e => handleSkill(e)}/>
                        <label>Arcana</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='athletics' onChange={e => handleSkill(e)}/>
                        <label>Athletics</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='deception' onChange={e => handleSkill(e)}/>
                        <label>Deception</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='history' onChange={e => handleSkill(e)}/>
                        <label>History</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='insight' onChange={e => handleSkill(e)}/>
                        <label>Insight</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='intimidation' onChange={e => handleSkill(e)}/>
                        <label>Intimidation</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='investigation' onChange={e => handleSkill(e)}/>
                        <label>Investigation</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='medicine' onChange={e => handleSkill(e)}/>
                        <label>Medicine</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='nature' onChange={e => handleSkill(e)}/>
                        <label>Nature</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='perception' onChange={e => handleSkill(e)}/>
                        <label>Perception</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='performance' onChange={e => handleSkill(e)}/>
                        <label>Performance</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='persuasion' onChange={e => handleSkill(e)}/>
                        <label>Persuasion</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='religion' onChange={e => handleSkill(e)}/>
                        <label>Religion</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='sleight of hand' onChange={e => handleSkill(e)}/>
                        <label>Sleight of Hand</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='stealth' onChange={e => handleSkill(e)}/>
                        <label>Stealth</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='survival' onChange={e => handleSkill(e)}/>
                        <label>Survival</label>
                    </div>
                </fieldset>
            </div>    
            <div className="monster__damages">
                <h4>Damage Types</h4>
                <div className="monster__damages-types">
                    <fieldset className='monster__damages-input'>
                        <legend>Physical</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="physical" value='physical'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="physical" value='physical'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="physical" value='physical' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="physical" value='physical'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Slashing</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="slashing" value='slashing'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="slashing" value='slashing'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="slashing" value='slashing' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="slashing" value='slashing'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Piercing</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="piercing" value='piercing'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="piercing" value='piercing'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="piercing" value='piercing' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="piercing" value='piercing'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Bludgeoning</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="bludgeoning" value='bludgeoning'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="bludgeoning" value='bludgeoning'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="bludgeoning" value='bludgeoning' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="bludgeoning" value='bludgeoning'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Elemental</legend>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleImmune(e)} name="elemental" value='elemental'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleResist(e)} name="elemental" value='elemental'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleNormal(e)} name="elemental" value='elemental' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleVulnerable(e)} name="elemental" value='elemental'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Fire</legend>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleImmune(e)} name="fire" value='fire'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleResist(e)} name="fire" value='fire'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleNormal(e)} name="fire" value='fire' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleVulnerable(e)} name="fire" value='fire'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Cold</legend>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleImmune(e)} name="cold" value='cold'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleResist(e)} name="cold" value='cold'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleNormal(e)} name="cold" value='cold' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleVulnerable(e)} name="cold" value='cold'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Lightning</legend>
                        <div>
                            <input type="radio" className="checkbox" onChange={e => handleImmune(e)} name="lightning" value='lightning'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="lightning" value='lightning'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="lightning" value='lightning' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="lightning" value='lightning'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Thunder</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="thunder" value='thunder'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="thunder" value='thunder'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="thunder" value='thunder' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="thunder" value='thunder'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Acid</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="acid" value='acid'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="acid" value='acid'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="acid" value='acid' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="acid" value='acid'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Poison</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="poison" value='poison'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="poison" value='poison'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="poison" value='poison' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="poison" value='poison'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Force</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="force" value='force'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="force" value='force'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="force" value='force' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="force" value='force'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Psychic</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="psychic" value='psychic'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="psychic" value='psychic'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="psychic" value='psychic' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="psychic" value='psychic'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Radiant</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="radiant" value='radiant'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="radiant" value='radiant'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="radiant" value='radiant' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="radiant" value='radiant'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Necrotic</legend>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleImmune(e)} name="necrotic" value='necrotic'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleResist(e)} name="necrotic" value='necrotic'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleNormal(e)} name="necrotic" value='necrotic' defaultChecked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' onChange={e => handleVulnerable(e)} name="necrotic" value='necrotic'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <label htmlFor="special_abilities"> Special Abilities:
                <textarea className='input monster__descriptions' id="special_abilities" value={createdMonster.special_abilities} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="actions"> Actions:
                <textarea className='input monster__descriptions' id="actions" value={createdMonster.actions} onChange={e => handleChange(e)}/>
            </label>
            <div>
                <label htmlFor="is_legendary">
                    <input type="checkbox" id="is_legendary" className="checkbox" value={createdMonster.is_legendary} onChange={e => checked? setChecked(false): setChecked(true)}/> Legendary Creature?
                </label>
                <label htmlFor="legendary_actions">
                    <textarea className='input monster__descriptions' id="legendary_actions" onChange={e => handleChange(e)} placeholder="Legendary Actions" value={createdMonster.legendary_actions} disabled={!checked}/>
                </label>
            </div>
            <label htmlFor="description">
                <textarea className='input monster__descriptions' id="description" placeholder="Description of Monster" value={createdMonster.description} onChange={e => handleChange(e)}/>
            </label>

            <div className="monster__buttons">
                <button className="button monster__buttons-input" onClick={e => handleSubmit(e, true)}>PUBLIC</button>
                <button className="button monster__buttons-input"onClick={e => handleSubmit(e, false)}>PRIVATE</button>
            </div>
        </form>
    );
};

export default CreateMonster;
