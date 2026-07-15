import { profile } from "../data/cv";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__name">
        {profile.firstName} {profile.lastName}
      </div>
      <p className="footer__tag">Biomedical Engineering · Portfolio</p>
      <p className="footer__copy">© {year} · Designed with care</p>
    </footer>
  );
}
