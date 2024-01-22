export default function Layout({ children, className = "" }) {
  return (
    <div
      className={`
        ${className} w-full h-full inline-block z-0 bg-light p-32
        
        xl:p-24 lg:p-16 mb:p-12 sm:p-8

        dark:bg-dark
      `}
    >
      {children}
    </div>
  );
}
