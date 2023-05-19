import Chance from "chance" ;
const chance = Chance();
const FakeUserdata =() =>{

return chance.name({ middle: true })

}

export default FakeUserdata ;