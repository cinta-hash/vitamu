export default function Footer(){
    return(
        <footer className="mt-24">
            <nav className="bg-white flex justify-between fixed bottom-0 w-full">
                <h1 className="text-orange-400 text-center ml-4 md:py-5">&copy;2023 JMStylings <i className="fa-regular fa-face-smile"></i></h1> 
                <div className="flex space-x-4 justify-end mr-2">
                <h1 className="footer text-2xl md:text-4xl hover:text-orange-400" ><a href="https://x.com/MimoMwangi?t=hyAjveA6KqfPqfqXQIRCkg&s=09" alt="facebook" target="_blank"><i className="fa-brands fa-facebook"></i></a></h1>
                    <h1 className="footer text-2xl md:text-4xl hover:text-orange-400" ><a href="https://x.com/MimoMwangi?t=hyAjveA6KqfPqfqXQIRCkg&s=09" alt="X" target="_blank"><i className="fa-brands fa-twitter"></i></a></h1>
                    <h1 className="footer text-2xl md:text-4xl hover:text-orange-400" ><a href="https://www.linkedin.com/in/jacinta-mwangi-8bb063192/" alt="linkedin" target="_blank"><i className="fa-brands fa-linkedin"></i></a></h1>
                    <h1 className="footer text-2xl md:text-4xl hover:text-orange-400" ><a href="https://github.com/cinta-hash" alt="github" target="_blank"><i className="fa-brands fa-github"></i></a></h1>
                    <h1 className="footer text-2xl md:text-4xl hover:text-orange-400" ><a href="https://x.com/MimoMwangi?t=hyAjveA6KqfPqfqXQIRCkg&s=09" alt="instagram" target="_blank"><i className="fa-brands fa-instagram"></i></a></h1>
               </div>           
           </nav>
        </footer>
    )
}