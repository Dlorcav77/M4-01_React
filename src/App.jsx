import Header from './Header'
import Card from './Card';
import Footer from './Footer';

const App = () => {
    return (
      <>
        <Header title="Galeria de Imagenes con React"/>
        <div className='galeria'>
          <Card img="https://es.vitejs.dev/logo-with-shadow.png" 
                title="Vite"
                des="Es una herramienta para Frontend, creada por Evan You, mismo creador de Vuejs, esta herramienta nos permitirá crear aplicaciones de Javascript"/>
          <Card />
        </div>
        <Footer title="Galeria de Imagenes"/>
      </>
    );
};

export default App;