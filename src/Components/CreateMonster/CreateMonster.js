

const CreateMonster = () => {
    return (
        <form>
            <label htmlFor="monster-name">
            Monster Name:
            <input type="text"/>
            </label>
            <label htmlFor="monster-type">
                <select>
                    <option value="">--Select Monster Type</option>
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
            <label htmlFor="challenge-rating">
            Challenge Rating: (Indicated by a number)
                <input type="text"/>
            </label>
            <label htmlFor="armour-class">
                <input type="text"/>
            </label>
            <label htmlFor="hitpoints">
                <input />
            </label>
            <fieldset>
                <legend>Speed of monster</legend>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="speed">Speed
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
                <label>
                   STR <input type="text"/>
                </label>
                <label>
                   DEX <input type="text"/>
                </label>
                <label>
                   CON <input type="text"/>
                </label>
                <label>
                   INT <input type="text"/>
                </label>
                <label>
                   WIS <input type="text"/>
                </label>
                <label>
                   CHA <input type="text"/>
                </label>
                <label>
                   Proficiencies:  +<input type="text"/>
                </label>
            </fieldset>
            <h4>Damage Types</h4>
            <fieldset>
                <legend>Physical</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Slashing</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Piercing</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Bludgeoning</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Elemental</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Fire</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Cold</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Lightning</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Thunder</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Acid</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Poison</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Force</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Psychic</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Radiant</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Necrotic</legend>
                <div>
                    <input type="radio"/>
                    <label>0 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1/2 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>1 Damage</label>
                </div>
                <div>
                    <input type="radio"/>
                    <label>2 Damage</label>
                </div>
            </fieldset>
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
            <label> Special Abilities:
                <textarea />
            </label>
            <label> Actions:
                <textarea />
            </label>
            <label> Legendary Actions:
                <textarea />
            </label>
            <label> Description:
                <textarea />
            </label>

            <div className="form__buttons">
                <button>PUBLIC</button>
                <button>PRIVATE</button>
            </div>
        </form>
    );
};

export default CreateMonster;
