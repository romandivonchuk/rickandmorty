import React from 'react'
import Character from '../character';
import PanelOther from '../panelOther';
import Todo from '../todo';
import {useSelector} from 'react-redux';
const PageController = () => {
    const category = useSelector(state=> state.category)
   
    if (category === "Characters") {
        return (
            <div>
                <Character/>
            </div>
    )}
    
    if (category === "Episodes" || category === "Locations") {
        return (
            <div>
                <PanelOther/>
            </div>
    )} else {

        return (
            <div>
                <Todo/>
            </div>
    )}
}

export default PageController
