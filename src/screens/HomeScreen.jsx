import React from 'react'
import { ScrollView, } from 'react-native';

import PlantProfilesChoose from '../components/PlantsProfiles/PlantProfilesChoose';

const HomeScreen = () => {

    return (
        <ScrollView style={{ height: "100%"}}>
            <PlantProfilesChoose/>
        </ScrollView >
    )
}
export default HomeScreen;