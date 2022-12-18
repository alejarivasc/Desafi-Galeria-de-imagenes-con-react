const Footer = ({ text, link, description }) => {
  return (
    <div className="d-flex justify-content-center gap-1 badge rounded-pill bg-primary">
      <span>
        {text}
        <a className="badge badge-primary" href={link}>
          {description}
        </a>
      </span>
    </div>
  );
};

export default Footer;
