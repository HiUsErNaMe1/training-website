function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-success">Зовнішній вигляд</h3>
          <p>Куниця — це спритний хижак середнього розміру з довгим тілом, пухнастим хутром та переважно деревним способом життя.</p>
        </section>
        <section>
          <h3 className="h3 text-success">Особливості будови</h3>
          <ul>
            <li>Довжина тіла 36–65 см, вага 300–5500 грамів.</li>
            <li>Її лапи короткі, п'ятипалі, з гострими кігтями, що частково втягуються.</li>
            <li>Довгий пухнастий хвіст допомагає куниці зберігати рівновагу, особливо під час пересування по деревах.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img src="/images/PineMarten1.jpg" alt="Куниця" className="img-fluid rounded my-4"/>
          <figcaption className="text-muted">Куниця</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;