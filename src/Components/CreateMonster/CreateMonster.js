import { useState } from "react";
import "./CreateMonster.scss"

const CreateMonster = ({createdMonster, setCreatedMonster}) => {
    const [abilityScores, setAbilityScores] = useState({})
    let mod = 0;
    // const abilityMods = {"1": , "2": , }
    console.log(createdMonster)
    console.log(abilityScores)
const handleChange = (e) => {
    setCreatedMonster({
        ...createdMonster,
        [e.target.id]: e.target.value
    })
}
const handleAbilityChange = (e) => {
    setAbilityScores( {
        ...abilityScores,
        [e.target.id]: e.target.value
    })
    mod = Math.floor(((e.target.value) - 10) / 2)
    
}
    return (
        <form>
            <label htmlFor="monster_name">
            Monster Name:
            <input type="text" id="monster_name" value={createdMonster.monster_name} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="monster_type">
                <select id="monster_type" value={createdMonster.monster_type} onChange={e => handleChange(e)}>
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
                <select id="monster_size" value={createdMonster.monster_size} onChange={e => handleChange(e)}>
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
                <input type="text" id="challenge_rating" value={createdMonster.challenge_rating} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="proficiency">
                Proficiencies: +<input type="text" id="proficiency" value={createdMonster.proficiency} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="armour-class">
                <input type="text" id="armour_class" value={createdMonster.armour_class} onChange={e => handleChange(e)}/> AC
            </label>
            <label htmlFor="hitpoints">
                <input type="text" id="hitpoints" value={createdMonster.hitpoints} onChange={e => handleChange(e)}/>
            </label>
            <label>
                Skills <input type="text" value={createdMonster.skills} />
            </label>
            <fieldset>
                <legend>Speed of monster</legend>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="speed">Speed
                    <input type="text" /> in ft.
                    </label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="climbing-speed">Climbing speed
                    <input type="text" /> in ft.
                    </label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="swim-speed">Swim speed
                    <input type="text" /> in ft.
                    </label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="burrow-speed">Burrow speed
                    <input type="text" /> in ft.
                    </label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="swim-speed">Flying speed
                    <input type="text" /> in ft.
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Senses</legend>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="blightsight">Blindsight
                    <input type="text" /> in ft.
                    </label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="darkvision">Darkvision
                    <input type="text" /> in ft.
                    </label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="Tremorsense">Tremorsense
                    <input type="text" /> in ft.
                    </label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="truesight">Truesight
                    <input type="text" /> in ft.
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Ability Scores</legend>
                <label htmlFor="str">
                   STR <input type="text" id="str" value={abilityScores.str} onChange={e => handleAbilityChange(e)}/> +{mod}
                </label>
                <label htmlFor="dex">
                   DEX <input type="text" id="dex" value={abilityScores.dex} onChange={e => handleAbilityChange(e)}/> +{mod}
                </label>
                <label htmlFor="con">
                   CON <input type="text" id="con" value={abilityScores.con} onChange={e => handleAbilityChange(e)}/> +{mod}
                </label>
                <label htmlFor="int">
                   INT <input type="text" id="int" value={abilityScores.int} onChange={e => handleAbilityChange(e)}/> +{mod}
                </label>
                <label htmlFor="wis">
                   WIS <input type="text" id="wis" value={abilityScores.wis} onChange={e => handleAbilityChange(e)}/> +{mod}
                </label>
                <label htmlFor="cha">
                   CHA <input type="text" id="cha" value={abilityScores.cha} onChange={e => handleAbilityChange(e)}/> +{mod}
                </label>
            </fieldset>
            <div className="form__damage">
                <h4>Damage Types</h4>
                <div className="form__damage-types">
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
                <textarea id="special_abilities" value={createdMonster.special_abilities} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="actions"> Actions:
                <textarea id="actions" value={createdMonster.actions} onChange={e => handleChange(e)}/>
            </label>
            <label htmlFor="is_legendary">
                <input type="checkbox" id="is_legendary" onChange={e => handleChange(e)}/> Legendary Creature?
            </label>
            <label htmlFor="legendary_actions"> Legendary Actions:
                <textarea id="legendary_actions" onChange={e => handleChange(e)} disabled/>
            </label>
            <label htmlFor="description"> Description:
                <textarea id="description" value={createdMonster.description} onChange={e => handleChange(e)}/>
            </label>

            <div className="form__buttons">
                <button>PUBLIC</button>
                <button>PRIVATE</button>
            </div>
        </form>
    );
};

export default CreateMonster;
