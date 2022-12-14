import { createBoard } from '@wixc3/react-board';
import { LandingPage } from '../../../components/landing-page/landing-page';

export default createBoard({
    name: 'Landing Page',
    Board: () => <LandingPage />,
    environmentProps: {
        windowWidth: 1280,
        windowHeight: 1080,
        canvasMargin: {
            top: 1,
            left: 1,
            bottom: 1,
            right: 1,
        },
    },
});
