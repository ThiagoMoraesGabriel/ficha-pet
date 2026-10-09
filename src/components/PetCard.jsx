export default function PetCard(props) {
    return (
        <div className="pet-card">
            <h2>Nome: {props.nome}</h2>
            <p>Espécie: {props.especie}</p>
        </div>

    )
}
