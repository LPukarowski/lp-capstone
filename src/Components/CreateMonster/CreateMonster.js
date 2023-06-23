import { useState } from "react";
import "./CreateMonster.scss"
import '../../partials/global.scss'

const CreateMonster = ({createdMonster, setCreatedMonster}) => {
    const [abilityScores, setAbilityScores] = useState({})
    console.log(createdMonster)
    console.log(abilityScores)
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
        <form className="monster body-text" spellCheck='false'>
            <div className="monster__info">
                <label htmlFor="monster_name" className="monster__name">
                Monster Name:
                <input className='input monster__name-input' type="text" id="monster_name" value={createdMonster.monster_name} onChange={e => handleChange(e)}/>
                </label>
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
                            <input className='input monster__challenge-input' type="text" id="challenge_rating" value={createdMonster.challenge_rating} onChange={e => handleChange(e)}/>
                        </fieldset>
                        <fieldset className="monster__challenge">
                            <legend>Proficiency Bonus</legend>
                            <input className='input monster__challenge-input' type="text" id="proficiency" value={createdMonster.proficiency} onChange={e => handleChange(e)}/>
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
                            <input type="checkbox" className="checkbox className='checkbox'" checked/>
                            <label htmlFor="speed">Speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" />ft.
                        </div>
                    </div>
                    <div className="monster__speeds">
                        <div>
                            <input type="checkbox" className="checkbox className='checkbox'"/>
                            <label htmlFor="climbing-speed">Climbing speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" />ft.
                        </div>
                    </div>
                    <div className="monster__speeds">
                        <div>
                            <input type="checkbox" className="checkbox className='checkbox'"/>
                            <label htmlFor="swim-speed">Swim speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" />ft.
                        </div>
                    </div>
                    <div className="monster__speeds">
                        <div>
                            <input type="checkbox" className="checkbox className='checkbox'"/>
                            <label htmlFor="burrow-speed">Burrow speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" />ft.
                        </div>
                    </div>
                    <div className="monster__speeds">
                        <div>
                            <input type="checkbox" className="checkbox className='checkbox'"/>
                            <label htmlFor="swim-speed">Flying speed</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" />ft.
                        </div>
                    </div>
                </fieldset>
                <fieldset className="monster__senses">
                    <legend>Senses</legend>
                    <div className="monster__senses-div">
                        <div>
                            <input className="checkbox" type="checkbox"/>
                            <label htmlFor="blightsight">Blindsight</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" />ft.
                        </div>
                    </div>
                    <div className="monster__senses-div">
                        <div>
                            <input className="checkbox" type="checkbox"/>
                            <label htmlFor="darkvision">Darkvision</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" />ft.
                        </div>
                    </div>
                    <div className="monster__senses-div"> 
                        <div>
                            <input className="checkbox" type="checkbox"/>
                            <label htmlFor="Tremorsense">Tremorsense</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" />ft.
                        </div>
                    </div>
                    <div className="monster__senses-div">
                        <div>
                            <input className="checkbox" type="checkbox"/>
                            <label htmlFor="truesight">Truesight</label>
                        </div>
                        <div>
                            <input className='input input-length' type="text" />ft.
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
                        <input type="checkbox" className='checkbox' value='blinded'/>
                        <label>Blinded</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='charmed'/>
                        <label>Charmed</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='deafened'/>
                        <label>Deafened</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='frightened'/>
                        <label>Frightened</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='grappled'/>
                        <label>Grappled</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='paralyzed'/>
                        <label>Paralyzed</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='petrified'/>
                        <label>Petrified</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='poisoned'/>
                        <label>Poisoned</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='prone'/>
                        <label>Prone</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='restrained'/>
                        <label>Restrained</label>
                    </div>
                    <div>
                        <input type="checkbox" className='checkbox' value='stunned'/>
                        <label>Stunned</label>
                    </div>
                </fieldset>
                <fieldset className='monster__skills'>
                    <legend>Skills (Proficiencies)</legend>
                    <div>
                        <input type='checkbox' className='checkbox' value='acrobactics'/>
                        <label>Acrobactics</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='animal handling'/>
                        <label>Animal Handling</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='arcana'/>
                        <label>Arcana</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='athletics'/>
                        <label>Athletics</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='deception'/>
                        <label>Deception</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='history'/>
                        <label>History</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='insight'/>
                        <label>Insight</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='intimidation'/>
                        <label>Intimidation</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='investigation'/>
                        <label>Investigation</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='medicine'/>
                        <label>Medicine</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='nature'/>
                        <label>Nature</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='perception'/>
                        <label>Perception</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='performance'/>
                        <label>Performance</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='persuasion'/>
                        <label>Persuasion</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='religion'/>
                        <label>Religion</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='sleight of hand'/>
                        <label>Sleight of Hand</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='stealth'/>
                        <label>Stealth</label>
                    </div>
                    <div>
                        <input type='checkbox' className='checkbox' value='survival'/>
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
                            <input type="radio" className='checkbox' name="physical" value='physical'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="physical" value='physical'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="physical" value='physical' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="physical" value='physical'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Slashing</legend>
                        <div>
                            <input type="radio" className='checkbox' name="slashing" value='slashing'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="slashing" value='slashing'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="slashing" value='slashing' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="slashing" value='slashing'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Piercing</legend>
                        <div>
                            <input type="radio" className='checkbox' name="piercing" value='piercing'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="piercing" value='piercing'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="piercing" value='piercing' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="piercing" value='piercing'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Bludgeoning</legend>
                        <div>
                            <input type="radio" className='checkbox' name="bludgeoning" value='bludgeoning'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="bludgeoning" value='bludgeoning'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="bludgeoning" value='bludgeoning' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="bludgeoning" value='bludgeoning'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Elemental</legend>
                        <div>
                            <input type="radio" className="checkbox" name="elemental" value='elemental'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" name="elemental" value='elemental'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" name="elemental" value='elemental' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" name="elemental" value='elemental'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Fire</legend>
                        <div>
                            <input type="radio" className="checkbox" name="fire" value='fire'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" name="fire" value='fire'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" name="fire" value='fire' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" name="fire" value='fire'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Cold</legend>
                        <div>
                            <input type="radio" className="checkbox" name="cold" value='cold'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" name="cold" value='cold'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" name="cold" value='cold' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className="checkbox" name="cold" value='cold'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Lightning</legend>
                        <div>
                            <input type="radio" className="checkbox" name="lightning" value='lightning'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="lightning" value='lightning'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="lightning" value='lightning' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="lightning" value='lightning'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Thunder</legend>
                        <div>
                            <input type="radio" className='checkbox' name="thunder" value='thunder'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="thunder" value='thunder'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="thunder" value='thunder' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="thunder" value='thunder'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Acid</legend>
                        <div>
                            <input type="radio" className='checkbox' name="acid" value='acid'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="acid" value='acid'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="acid" value='acid' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="acid" value='acid'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Poison</legend>
                        <div>
                            <input type="radio" className='checkbox' name="poison" value='poison'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="poison" value='poison'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="poison" value='poison' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="poison" value='poison'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Force</legend>
                        <div>
                            <input type="radio" className='checkbox' name="force" value='force'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="force" value='force'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="force" value='force' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="force" value='force'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Psychic</legend>
                        <div>
                            <input type="radio" className='checkbox' name="psychic" value='psychic'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="psychic" value='psychic'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="psychic" value='psychic' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="psychic" value='psychic'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Radiant</legend>
                        <div>
                            <input type="radio" className='checkbox' name="radiant" value='radiant'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="radiant" value='radiant'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="radiant" value='radiant' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="radiant" value='radiant'/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset className='monster__damages-input'>
                        <legend>Necrotic</legend>
                        <div>
                            <input type="radio" className='checkbox' name="necrotic" value='necrotic'/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="necrotic" value='necrotic'/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="necrotic" value='necrotic' checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" className='checkbox' name="necrotic" value='necrotic'/>
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
                    <input type="checkbox" id="is_legendary" className="checkbox" onChange={e => handleChange(e)}/> Legendary Creature?
                </label>
                <label htmlFor="legendary_actions">
                    <textarea className='input monster__descriptions' id="legendary_actions" onChange={e => handleChange(e)} placeholder="Legendary Actions" disabled/>
                </label>
            </div>
            <label htmlFor="description">
                <textarea className='input monster__descriptions' id="description" placeholder="Description of Monster" value={createdMonster.description} onChange={e => handleChange(e)}/>
            </label>

            <div className="monster__buttons">
                <button className="button monster__buttons-input">PUBLIC</button>
                <button className="button monster__buttons-input">PRIVATE</button>
            </div>
        </form>
    );
};

export default CreateMonster;
