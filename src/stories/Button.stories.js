import { Button } from "../compontents/Button"
/**
 * This default export is the actual story
 */
export default {
    title: "Button",
    component:Button
}

//function to return a component 
export const Red =() =><Button label="Press me" backgroundColor="red"></Button>