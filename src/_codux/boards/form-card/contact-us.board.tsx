import { createBoard } from '@wixc3/react-board';
import { FormCard } from '../../../components/form-card/form-card';
import logo from '../../../assets/logo.png';

export default createBoard({
    name: 'Contact-Us Form',
    Board: () => <FormCard formType="contact" logoURL={logo} />,
    environmentProps: {
        windowHeight: 600,
        windowWidth: 800,
    },
});
