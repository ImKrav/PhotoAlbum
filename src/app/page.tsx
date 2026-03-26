export default function Home() {
  return (
    <div>
      <main>
        <header>
          <h1>
            Photo Album MiniApp
          </h1>
          <p>
            Lista de albumes y galeria de imagenes consumidas desde API.
          </p>
        </header>

        <section>
          <h2>
            Estado de datos
          </h2>
          <div>
            <span>
              Loading: pendiente
            </span>
            <span>
              Data: pendiente
            </span>
            <span>
              Error: sin error
            </span>
          </div>
        </section>

        <section>
          <aside>
            <h2>Albumes</h2>
            <p>
              Aqui se mostrara la lista de albumes obtenidos desde el endpoint.
            </p>

            <div>
              <article>
                <h3>Album #1</h3>
                <p>Titulo del album...</p>
              </article>
              <article>
                <h3>Album #2</h3>
                <p>Titulo del album...</p>
              </article>
              <article>
                <h3>Album #3</h3>
                <p>Titulo del album...</p>
              </article>
            </div>
          </aside>

          <section>
            <h2>Galeria</h2>
            <p>
              Al seleccionar un album, aqui apareceran sus imagenes.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
