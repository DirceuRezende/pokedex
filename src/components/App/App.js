import React, { Suspense } from 'react';

const Header = React.lazy(() => import('components/Header'));
const Routes = React.lazy(() => import('routes'));
const Footer = React.lazy(() => import('components/Footer'));

function App() {
  return (
    <div>
      <Suspense fallback="Carregando...">
        <Header />
        <Routes />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
