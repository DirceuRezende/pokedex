import React, { Suspense } from 'react';

const Header = React.lazy(() => import('components/Header'));
const Routes = React.lazy(() => import('routes'));
function App() {
  return (
    <div>
      <Suspense fallback="Carregando...">
        <Header />
        <Routes />
      </Suspense>

    </div>
  );
}

export default App;
