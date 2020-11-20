import AFRAME from 'aframe';
import { Painting } from '../../components/Painting/Painting.models';
import NeuralNetworkComponent from './NeuralNetwork.models';
import Paintings from '../../../public/data/paintings.json';

AFRAME.registerComponent<NeuralNetworkComponent>('neural-network', {
    init() {
        const paintingsData = (Paintings as Painting[]);
    },


});
