import React, { Suspense } from 'react';

const Header = React.lazy(() => import('components/Header'));
const Routes = React.lazy(() => import('routes'));
function App() {
  return (
    <>
      <Suspense fallback="Carregando...">
        <Header />
        <Routes />
      </Suspense>

    </>
  );
}

export default App;
