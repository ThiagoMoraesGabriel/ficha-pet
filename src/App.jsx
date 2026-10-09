import PetCard from './components/PetCard';
import './App.css';

export default function App() {
    return (
        <main>
            <h1>Nossos Pets</h1>
                <PetCard nome="Bidu" especie="Cachorro" />
                <PetCard nome="Tom" especie="Gato" />
                <PetCard nome="Jerry" especie="Cachorro" />
                <PetCard nome="Patolino" especie="Pato" />
                <PetCard nome="Pernalonga" especie="Coelho" />
        </main>
    );
}
