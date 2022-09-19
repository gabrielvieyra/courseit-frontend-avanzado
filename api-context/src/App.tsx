function App() {
  const products: Array<string> = [
    'producto 01',
    'producto 02',
    'producto 03',
    'producto 04',
    'producto 05',
  ];

  return (
    <>
      <h1>Probando</h1>
      <ul>
        {products.map((product, key) => {
          return <li key={key}>{product}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
