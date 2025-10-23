import { Github, Linkedin, Code2 } from "lucide-react"; // replaced Twitter with Code2

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/santhosh-kumar08/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/santhoshkumar08-r/", label: "LinkedIn" },
    { icon: Code2, href: "https://leetcode.com/u/rsanthosh08/", label: "LeetCode" }, // replaced Twitter
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} Santhosh Kumar R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
