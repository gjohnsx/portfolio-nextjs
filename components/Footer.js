import socialButtons from "./social-buttons";
  
  export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content lg:flex-row lg:items-start lg:justify-around flex flex-col justify-start items-center">
            <div className="flex flex-col items-center md:flex-none">
                <span className="footer-title">Services</span> 
                <a className="link link-hover">Web Development</a> 
                <a className="link link-hover">Lead Generation</a> 
                <a className="link link-hover">Consulting</a>
            </div> 
            <div className="flex flex-col items-center md:flex-none">
                <span className="footer-title">About me</span> 
                <a className="link link-hover">About</a> 
                <a className="link link-hover">Projects</a> 
                <a className="link link-hover">Contact</a> 
            </div> 
            <div className="flex flex-col items-center md:flex-none">
                <span className="footer-title">Social</span> 
                <div className="grid grid-flow-col gap-4">
                    {socialButtons.map((item) => (
                        <a key={item.name} href={item.href} target={item.target} rel={item.rel} className="text-neutral hover:text-neutral-focus">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};