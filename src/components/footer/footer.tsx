import style from "./footer.module.css";
import storysetLogo from "../../assets/storyset.svg";
import flaticonLogo from "../../assets/flaticon.svg";

function Footer() {
  return (
    <footer className={style.footer}>
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>
        &copy; {new Date().getFullYear()} D Sherpa.
      </p>
      <div className={style.credit}>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            marginRight: "10px",
            marginLeft: "50px",
          }}
        >
          Credits:
        </p>
        <div className={style.logos}>
          <a
            href="https://storyset.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={storysetLogo}
              alt="Storyset Logo"
              className={style.logo}
            />
          </a>
          <a
            href="https://www.flaticon.com"
            title="line icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={flaticonLogo}
              alt="Flaticon Logo"
              className={style.logo}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
