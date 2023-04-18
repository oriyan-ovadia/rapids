import { createRoot } from 'react-dom/client';
import { Home } from '@/components/pages/Home';
import { tokensCss } from './styles/tokens';
import { globalCss } from './styles/global';
import { Head } from './components/shared/App/Head';

const container = document.getElementById('app');
const root = createRoot(container);

function App() {
    return (
        <>
            <Head />
            <Home></Home>
        </>
    );
}

root.render(<App />);
