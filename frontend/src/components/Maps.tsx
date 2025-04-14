export const Maps = () => {
    return (
      <div className="flex-1 w-[1000px] items-center justify-center mx-auto pt-5 pb-10 pl-10 pr-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4673181167245!2d-46.63330908444329!3d-23.588019867173803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c723d4c5e3%3A0xe1f2b9e9a85fdfcb!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1713100000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="rounded-lg"
        />

      </div>
    );
  };
  