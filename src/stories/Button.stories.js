import { Button } from "../compontents/Button"
/**
 * This default export is the actual story
 */
export default {
    title: "Components/Button",
    component:Button,
    argTypes:{ handleClick: {action: "handleClick"}} // passing function
}
const Template = args => <Button {...args} /> // setting up template and pass all arguments to add controls functionilty

//function to return a component 
export const Red =Template.bind({})
//adding our props also called controls
Red.args = {
    backgroundColor: "red",
    label: "Press Me",
    size: "md"
}

export const Green =Template.bind({})
Green.args = {
    backgroundColor: "green",
    label: "Press Me",
    size: "md"
}

export const Blue =Template.bind({})
Blue.args = {
    backgroundColor: "blue",
    label: "Press Me",
    size: "md"
}

export const Small =Template.bind({})
Small.args = {
    backgroundColor: "green",
    label: "Press Me",
    size: "sm"
}

export const Large =Template.bind({})
Large.args = {
    backgroundColor: "green",
    label: "Press Me",
    size: "lg"
}