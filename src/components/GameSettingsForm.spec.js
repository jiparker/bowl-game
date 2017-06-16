import React from 'react';
import {shallow} from 'enzyme';
import GameSettingsForm from './GameSettingsForm';
import TextInput from './TextInput';
describe('< />', () => {

  it('should contain <TextInput/> component', () => {
    const setupWorkstations = () => {};
    const setIterationCount = () => {};
    const runIterations = () => {};
    const gameData = {
      workstationCount: 5
    };

    const wrapper = shallow(<GameSettingsForm setupWorkstations={setupWorkstations} setIterationCount={setIterationCount} runIterations={runIterations} gameData={gameData}/>);

    const allInputs = wrapper.find(TextInput);
    expect(allInputs.length).toEqual(2);
    expect(allInputs.at(0).props().name).toEqual('workstationCount');
    expect(allInputs.at(0).props().placeholder).toEqual('enter number');
  });
});
