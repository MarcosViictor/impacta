export const Maps = () => {
    return (
      <div className="flex-1 w-[1000px] items-center justify-center mx-auto pt-5 pb-10 pl-10 pr-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    );
  };
  