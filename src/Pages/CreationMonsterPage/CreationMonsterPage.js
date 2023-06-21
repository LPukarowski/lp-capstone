import CreateMonster from "../../Components/CreateMonster/CreateMonster";

const CreationMonsterPage = ({createdMonster, setCreatedMonster}) => {
    return (
        <div>
            <CreateMonster 
                createdMonster={createdMonster} 
                setCreatedMonster={setCreatedMonster} 
            />
        </div>
    );
};

export default CreationMonsterPage;