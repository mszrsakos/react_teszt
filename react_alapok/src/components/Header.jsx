export default function Header() {
    return (
        <>
            <section class="card">
                <h2>Kiss Péter</h2>
                <img
                    src="profile.jpg"
                    alt="Profilkép">
                    <p>
                        Frontend fejlesztő
                    </p>
                </img>
            </section>

            <div class="courses">
                <h1>Kurzusok</h1>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            </div>

            <div class="container" />
            <label for="name">
                Név
            </label>
            <input
                type="text"
                id="name"
            ></input>

            <hr />
            <img
                src="student.jpg"
                alt="tanuló">
            </img>

        </>
    )
}









