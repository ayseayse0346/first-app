// bir dosyada export default bir tane yapılır. bu yüzden gallery function genel aldık ve index js de bu basıldı profile ise gallery de aldık. 



function Profile() {
  return (
   <img 
   src="https://i.imgur.com/MK3eW3Am.jpg" 
   alt="Katherine Johnson" 
   />
  );
}


export default function Gallery(){
  return(
    <section>
    <h1 className="header" style={{color:"pink"}}>Amazing Scients</h1>
    <Profile/>
    <Profile/>
    </section>
  )
}
// css özelliklerini istersek className vererek index.css klasöründe verebiliriz.İstersek style attribute ile yukarıdaki gibi dubble süslü ve camelCase şeklinde verebilriz.
