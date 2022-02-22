import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Test for the component <HookApp />', () => {
    test('should rendar and match with the snapshot', () => {
        const wrapper = shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();
    });
});