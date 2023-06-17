import './footer.css';
export function Footer() {
    const fullYear = new Date().getFullYear;

    return (
        <footer>
            <p>&copy; {fullYear} Todos os direitos reservados. <span>Falconi</span>.</p>
        </footer>
    )
}