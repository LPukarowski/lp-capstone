import { useState } from "react";
import "./CreateMonster.scss"
import '../../partials/global.scss'

const CreateMonster = ({createdMonster, setCreatedMonster}) => {
    const [abilityScores, setAbilityScores] = useState({})
    let mod = 0;
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
    mod = Math.floor(((e.target.value) - 10) / 2)
}
    return (
        <form className="monster body-text" spellCheck='false'>
            <label htmlFor="monster_name">
            Monster Name:
            <input className='input' type="text" id="monster_name" value={createdMonster.monster_name} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="monster_type">
                <select className='input' id="monster_type" value={createdMonster.monster_type} onChange={e => handleChange(e)}>
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
                <select className='input' id="monster_size" value={createdMonster.monster_size} onChange={e => handleChange(e)}>
                    <option value="">--Select Monster Size--</option>
                    <option value="tiny">Tiny</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="huge">Huge</option>
                    <option value="gargantuan">Gargantuan</option>
                </select>
            </label>
            <label htmlFor="challenge_rating">
                Challenge Rating:
                <input className='input' type="text" id="challenge_rating" value={createdMonster.challenge_rating} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="proficiency">
                Proficiencies: +<input className='input' type="text" id="proficiency" value={createdMonster.proficiency} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="armour-class">
                <input className='input' type="text" id="armour_class" value={createdMonster.armour_class} onChange={e => handleChange(e)}/> AC
            </label>
            <label htmlFor="hitpoints">
                <input className='input' type="text" id="hitpoints" value={createdMonster.hitpoints} onChange={e => handleChange(e)}/>
            </label>
            <label>
                Skills <input className='input' type="text" value={createdMonster.skills} />
            </label>
            <div className="monster__speed-senses">
                <fieldset>
                    <legend>Speed of monster</legend>
                    <div>
                        <input type="checkbox" checked/>
                        <label htmlFor="speed">Speed
                        <input className='input' type="text" />ft.
                        </label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label htmlFor="climbing-speed">Climbing speed
                        <input className='input' type="text" />ft.
                        </label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label htmlFor="swim-speed">Swim speed
                        <input className='input' type="text" />ft.
                        </label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label htmlFor="burrow-speed">Burrow speed
                        <input className='input' type="text" />ft.
                        </label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label htmlFor="swim-speed">Flying speed
                        <input className='input' type="text" />ft.
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Senses</legend>
                    <div>
                        <input className="#" type="checkbox"/>
                        <label htmlFor="blightsight">Blindsight
                        <input className='input' type="text" />ft.
                        </label>
                    </div>
                    <div>
                        <input className="#" type="checkbox"/>
                        <label htmlFor="darkvision">Darkvision
                        <input className='input' type="text" />ft.
                        </label>
                    </div>
                    <div>className='input' 
                        <input className="#" type="checkbox"/>
                        <label htmlFor="Tremorsense">Tremorsense
                        <input className='input' type="text" />ft.
                        </label>
                    </div>
                    <div>
                        <input className="#" type="checkbox"/>
                        <label htmlFor="truesight">Truesight
                        <input className='input' type="text" />ft.
                        </label>
                    </div>
                </fieldset>
            </div>
            <fieldset className="monster__ability-scores">
                <legend>Ability Scores</legend>
                <label htmlFor="str">
                   STR 
                   <input className='input' type="text" id="str" value={abilityScores.str} 
                   onChange={e => handleAbilityChange(e)}/> 
                   {abilityScores.str? Math.floor(((abilityScores.str) - 10) / 2): 0}
                </label>
                <label htmlFor="dex">
                   DEX 
                   <input className='input' type="text" id="dex" value={abilityScores.dex} 
                   onChange={e => handleAbilityChange(e)}/> 
                   {abilityScores.dex? Math.floor(((abilityScores.str) - 10) / 2): 0}
                </label>
                <label htmlFor="con">
                   CON 
                   <input className='input' type="text" id="con" value={abilityScores.con} 
                   onChange={e => handleAbilityChange(e)}/> 
                   {abilityScores.con? Math.floor(((abilityScores.str) - 10) / 2): 0}
                </label>
                <label htmlFor="int">
                   INT 
                   <input className='input' type="text" id="int" value={abilityScores.int} 
                   onChange={e => handleAbilityChange(e)}/> 
                   {abilityScores.int? Math.floor(((abilityScores.str) - 10) / 2): 0}
                </label>
                <label htmlFor="wis">
                   WIS 
                   <input className='input' type="text" id="wis" value={abilityScores.wis} 
                   onChange={e => handleAbilityChange(e)}/> 
                   {abilityScores.wis? Math.floor(((abilityScores.str) - 10) / 2): 0}
                </label>
                <label htmlFor="cha">
                   CHA 
                   <input className='input' type="text" id="cha" value={abilityScores.cha} 
                    onChange={e => handleAbilityChange(e)}/> 
                   {abilityScores.cha? Math.floor(((abilityScores.str) - 10) / 2): 0}
                </label>
            </fieldset>
            <div className="monster__damage">
                <h4>Damage Types</h4>
                <div className="monster__damage-types">
                    <fieldset>
                        <legend>Physical</legend>
                        <div>
                            <input type="radio" name="physical"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="physical"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="physical" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="physical"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Slashing</legend>
                        <div>
                            <input type="radio" name="slashing"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="slashing"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="slashing" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="slashing"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Piercing</legend>
                        <div>
                            <input type="radio" name="piercing"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="piercing"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="piercing" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="piercing"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Bludgeoning</legend>
                        <div>
                            <input type="radio" name="bludgeoning"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="bludgeoning"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="bludgeoning" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="bludgeoning"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Elemental</legend>
                        <div>
                            <input type="radio" name="elemental"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="elemental"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="elemental" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="elemental"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Fire</legend>
                        <div>
                            <input type="radio" name="fire"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="fire"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="fire" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="fire"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Cold</legend>
                        <div>
                            <input type="radio" name="cold"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="cold"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="cold" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="cold"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Lightning</legend>
                        <div>
                            <input type="radio" name="lightning"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="lightning"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="lightning" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="lightning"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Thunder</legend>
                        <div>
                            <input type="radio" name="thunder"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="thunder"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="thunder" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="thunder"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Acid</legend>
                        <div>
                            <input type="radio" name="acid"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="acid"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="acid" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="acid"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Poison</legend>
                        <div>
                            <input type="radio" name="poison"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="poison"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="poison" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="poison"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Force</legend>
                        <div>
                            <input type="radio" name="force"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="force"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="force" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="force"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Psychic</legend>
                        <div>
                            <input type="radio" name="psychic"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="psychic"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="psychic" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="psychic"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Radiant</legend>
                        <div>
                            <input type="radio" name="radiant"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="radiant"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="radiant" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="radiant"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Necrotic</legend>
                        <div>
                            <input type="radio" name="necrotic"/>
                            <label>Immune</label>
                        </div>
                        <div>
                            <input type="radio" name="necrotic"/>
                            <label>Resistant</label>
                        </div>
                        <div>
                            <input type="radio" name="necrotic" checked/>
                            <label>Normal</label>
                        </div>
                        <div>
                            <input type="radio" name="necrotic"/>
                            <label>Vulnerable</label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <fieldset>
                <legend>Condition Immunities</legend>
                <div>
                    <input type="checkbox"/>
                    <label>Blinded</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Charmed</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Deafened</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Frightened</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Grappled</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Paralyzed</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Petrified</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Poisoned</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Prone</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Restrained</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Stunned</label>
                </div>
            </fieldset>
            <label htmlFor="special_abilities"> Special Abilities:
                <textarea className='input' id="special_abilities" value={createdMonster.special_abilities} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="actions"> Actions:
                <textarea className='input' id="actions" value={createdMonster.actions} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="is_legendary">
                <input type="checkbox" id="is_legendary" onChange={e => handleChange(e)}/> Legendary Creature?
            </label>
            <label htmlFor="legendary_actions"> Legendary Actions:
                <textarea className='input' id="legendary_actions" onChange={e => handleChange(e)} disabled/>
            </label>
            <label htmlFor="description"> Description:
                <textarea className='input' id="description" value={createdMonster.description} onChange={e => handleChange(e)}/>
            </label>

            <div className="form__buttons">
                <button>PUBLIC</button>
                <button>PRIVATE</button>
            </div>
        </form>
    );
};

export default CreateMonster;
