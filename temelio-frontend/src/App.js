import React from 'react';
import NonprofitForm from './components/NonprofitForm';
import NonprofitList from './components/NonprofitList';
import Bulkemails from './components/Bulkemails';
import Emaillogs from './components/Emaillogs';


function App() {

  const [refresh, setRefresh] = React.useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Calibri, sans-serif',
      textDecorationStyle: 'wavy'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px',
        fontSize: '2.5em',
        borderBottom: '2px solid #3498db',
        paddingBottom: '15px',
        backgroundColor: '#e6f2ff' // Added background color
      }}>Temelio Nonprofit Management</h1>
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <NonprofitForm refreshNonprofits={handleRefresh} />
        <NonprofitList key={refresh} />
        <Bulkemails />
        <Emaillogs />
      </div>
    </div>
  );
}

export default App;
