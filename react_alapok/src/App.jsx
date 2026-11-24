export default function App(){
  return(
    <main>
      <Header/>
      <StudentList/>
      <Footer/>
    </main>
  )
}

function StudentList(){
  return(
  <>
    <StudentCard/>
    <StudentCard/>
    <StudentCard/>
  </>
  )
}

function Header(){
  return(
    <>
      <h1>Tanulói kurzuskatalógus</h1>
      <hr />
    </>
  )
}

function StudentCard(){
  return(
    <>
      <h1>Ákos</h1>
      <p>Informatika</p>
      <p>React</p>
    </>
    
  )
}

function Footer(){
  return(
    <>
      <footer>2026 Frontend</footer>
    </>
  )
}







/* export default function Udvozlet(){
  return(
    <>
      <h1>Üdvözlet</h1>
      <p>Ez a JavaScriptből került az oldalra</p>   
    </>
    
  )
} */





/* export default function StudentCard(){
  return(
    <card>
      <h1>Mészáros Ákos</h1>
      <h2>13. évfolyam</h2>
      <h3>React</h3>
      <h4>Videójátékok</h4>
    </card>
  );
} */