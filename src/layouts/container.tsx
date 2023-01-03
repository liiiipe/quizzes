interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#9dcbff] to-[#61abff]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        {children}
      </div>
    </main>
  );
};

export default Container;
