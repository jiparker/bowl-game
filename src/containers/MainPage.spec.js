import React from 'react';
import {shallow} from 'enzyme';
import {MainPage} from './MainPage';
import GameSettingsForm from '../components/GameSettingsForm';

describe('<MainPage />', () => {
  it('should contain <GameSettingsForm />', () => {
    const actions = {
      setupWorkstations: () => {},
      runIterations: () => {},
      setIterationCount: () => {}
    };
    const gameData = {};
    const wrapper = shallow(<MainPage actions={actions} gameData={gameData}/>);

    expect(wrapper.find(GameSettingsForm).length).toEqual(1);
  });
});
